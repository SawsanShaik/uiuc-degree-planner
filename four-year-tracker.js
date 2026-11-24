// Lets a student plan their four years: pick CS required courses and technical electives
// (from courses.js) in the "Add courses" box to put them in a plan's course bank, then drag
// them into eight semesters.
const semesterNames = [
  "Year 1 Fall", "Year 1 Spring",
  "Year 2 Fall", "Year 2 Spring",
  "Year 3 Fall", "Year 3 Spring",
  "Year 4 Fall", "Year 4 Spring",
];

// The bank's columns, left to right: one per subject in courses.js (AE, BIOE, ..., TE) in
// alphabetical order, then the CS technical electives (a CS student picks at least 6 of them).
// Only the columns with courses waiting in them are shown.
const bankGroups = [
  ...[...new Set(courses.map((course) => course.id.split(" ")[0]))].sort()
    .map((subject) => ({ key: subject, name: subject })),
  { key: "tech-elective", name: "CS Tech Electives" },
];

// The search shows at most this many matching courses at once.
const maxSearchMatches = 5;

// Each course's prerequisite rules, read once from its sentence, like { "CS 128": [{ courseIds: ["CS 124", "CS 125"], ... }] }.
const prerequisitesByCourse = Object.fromEntries(
  courses.map((course) => [course.id, parsePrerequisites(course.prerequisiteText)]));

// The student's plans, as saved by plan-storage.js. Each plan has an id, a name, when it
// was last saved, and its placements: every course in the plan and where it is, either "bank"
// or a semester (a position in semesterNames), like { "CS 124": 0, "CS 425": "bank" }.
const savedPlans = loadSavedPlans() ?? { currentPlanId: null, plans: [] };
let lastSaveWorked = true;

function currentPlan() {
  return savedPlans.plans.find((plan) => plan.id === savedPlans.currentPlanId);
}

function planHasCourse(courseId) {
  return Object.hasOwn(currentPlan().placements, courseId);
}

// The prerequisite rules a course in this semester doesn't meet in the open plan. A rule is met by
// one of its courses in an earlier semester, or in the same semester when the rule allows it.
function unmetPrerequisites(courseId, semester) {
  const placements = currentPlan().placements;
  return prerequisitesByCourse[courseId].filter((rule) => !rule.courseIds.some((otherId) => {
    const otherSemester = placements[otherId];
    return Number.isInteger(otherSemester) &&
      (otherSemester < semester || (rule.sameSemester && otherSemester === semester));
  }));
}

// Adds a line to a semester's course card for each prerequisite it is missing: red "Needs ..." for a
// requirement, grey "Recommended ..." for advice. Names the options already in the plan ("first"),
// or else the ones that could be added. Only a missing requirement makes the card's border red.
function addPrerequisiteWarnings(card, course, semester) {
  const unmet = unmetPrerequisites(course.id, semester);
  for (const rule of unmet) {
    const inPlan = rule.courseIds.filter((courseId) => planHasCourse(courseId));
    const addable = rule.courseIds.filter((courseId) => courses.some((known) => known.id === courseId));
    const line = document.createElement("p");
    line.className = rule.recommended ? "prerequisite-recommendation" : "prerequisite-warning";
    const start = rule.recommended ? "Recommended:" : "Needs";
    line.textContent = inPlan.length > 0
      ? `${start} ${inPlan.join(" or ")} first`
      : `${start} ${(addable.length > 0 ? addable : rule.courseIds).join(" or ")} (not in this plan)`;
    card.appendChild(line);
  }
  card.classList.toggle("missing-prerequisite", unmet.some((rule) => !rule.recommended));
}

// A plan saved before plans had a major, or with a major that no longer exists, is Computer Science.
const defaultMajorId = "computer-science";

function currentMajor() {
  return majors.find((major) => major.id === currentPlan().majorId);
}

// The open plan's major's sample sequence: what "Select all default courses" selects. Where the
// sequence allows a choice, like MATH 221 or MATH 220, every option, so the student picks. Each course once.
function defaultCourseIds() {
  return [...new Set(currentMajor().semesters.flat(2))];
}

// Keeps only saved placements that still make sense: a course in courses.js, in the bank or
// in one of the semesters. A plan saved in an older format, without placements, starts empty.
function cleanPlacements(placements) {
  const cleaned = {};
  for (const course of courses) {
    const place = placements?.[course.id];
    const isSemester = Number.isInteger(place) && place >= 0 && place < semesterNames.length;
    if (place === "bank" || isSemester) {
      cleaned[course.id] = place;
    }
  }
  return cleaned;
}

// Saves every plan, including which one is open, and updates the "Last saved" label.
function savePlans() {
  lastSaveWorked = storeSavedPlans(savedPlans);
  showPlanBar();
}

// Marks the open plan as just changed, then saves.
function saveCurrentPlan() {
  currentPlan().savedAt = new Date().toISOString();
  savePlans();
}

// Starts a new, empty plan and opens it. A blank name becomes "Plan 1", "Plan 2", ...
function createPlan(name) {
  const id = Math.max(0, ...savedPlans.plans.map((plan) => plan.id)) + 1;
  const majorId = savedPlans.plans.length > 0 ? currentPlan().majorId : defaultMajorId;
  savedPlans.plans.push({ id, name: name || nextDefaultPlanName(savedPlans.plans), majorId, placements: {} });
  savedPlans.currentPlanId = id;
  saveCurrentPlan();
}

// "1 hour", "3 hours", or "3–4 hours" for a course (or semester) whose hours can vary.
function describeHours(minHours, maxHours = minHours) {
  if (maxHours !== minHours) {
    return `${minHours}–${maxHours} hours`;
  }
  return minHours === 1 ? "1 hour" : minHours + " hours";
}

// Which bank column a course belongs in: its subject ("CS" for CS 124, "MATH" for MATH 221),
// or "tech-elective" for a CS technical elective like CS 411.
function bankGroupKey(course) {
  if (course.requirement === "technical elective") {
    return "tech-elective";
  }
  return course.id.split(" ")[0];
}

// What decides the hours of a course whose hours vary, from its Course Explorer description
// and the Class Schedule (where each section of a course lists its own hours).
function hoursExplanation(course) {
  const hours = describeHours(course.creditHours, course.maxCreditHours);
  if (course.id === "CS 397") {
    return `Individual study, ${hours}. You set it up with an instructor (it needs their consent), ` +
      "including how many hours it is worth.";
  }
  if (course.id === "CS 498") {
    return `Special topics, ${hours}. Each topic is its own section, and each section lists its own hours ` +
      "in that term's Class Schedule.";
  }
  return `${hours}, depending on the section you register for: each section lists its own hours in ` +
    "that term's Class Schedule. Ask your advisor which fits your plan.";
}

function makeHint(text) {
  const hint = document.createElement("li");
  hint.className = "hint";
  hint.textContent = text;
  return hint;
}

// A course card: "CS 124 · 3 hours" (or "CS 425 · 3–4 hours") in bold, with the title underneath.
function makeCourseItem(course) {
  const item = document.createElement("li");
  item.className = "course";
  item.draggable = true;
  item.dataset.courseId = course.id;
  const idAndHours = document.createElement("strong");
  idAndHours.textContent = `${course.id} · ${describeHours(course.creditHours, course.maxCreditHours)}`;
  const title = document.createElement("div");
  title.textContent = course.title;
  item.append(idAndHours, title);
  if (course.maxCreditHours !== course.creditHours) {
    item.append(makeHoursInfoButton(course));
  }
  item.addEventListener("dragstart", (event) => {
    event.dataTransfer.setData("text/plain", course.id);
  });
  // Clicking a card (or pressing Enter on it) turns it red with a trash can; clicking it again undoes that.
  item.tabIndex = 0;
  item.addEventListener("click", () => toggleRemoveMode(item, course));
  item.addEventListener("keydown", (event) => {
    if (event.target === item && event.key === "Enter") {
      toggleRemoveMode(item, course);
    }
  });
  return item;
}

// The card currently showing its trash can, or null.
let cardInRemoveMode = null;

function toggleRemoveMode(card, course) {
  if (cardInRemoveMode === card) {
    leaveRemoveMode();
  } else {
    leaveRemoveMode();
    card.classList.add("remove-mode");
    card.appendChild(makeRemoveButton(course));
    cardInRemoveMode = card;
  }
}

function leaveRemoveMode() {
  if (cardInRemoveMode) {
    cardInRemoveMode.classList.remove("remove-mode");
    cardInRemoveMode.querySelector(".remove-course").remove();
    cardInRemoveMode = null;
  }
}

// The big trash can in the middle of a red card. Clicking it takes the course out of the plan.
function makeRemoveButton(course) {
  const button = document.createElement("button");
  button.type = "button";
  button.className = "remove-course";
  button.textContent = "🗑";
  button.setAttribute("aria-label", `Remove ${course.id} from this plan`);
  button.addEventListener("click", (event) => {
    event.stopPropagation(); // Otherwise the card would also see the click.
    removeCourse(course.id);
    showPlan();
    bankStatus.textContent = `Removed ${course.id} from this plan.`;
  });
  return button;
}

// The small "i" in the top-right corner of a card whose hours vary. Clicking it opens the
// box that explains the hours; clicking it again closes it.
function makeHoursInfoButton(course) {
  const button = document.createElement("button");
  button.type = "button";
  button.className = "hours-info";
  button.textContent = "i";
  button.setAttribute("aria-label", `Why ${course.id} is ${describeHours(course.creditHours, course.maxCreditHours)}`);
  button.setAttribute("aria-controls", "hours-info-box");
  button.setAttribute("aria-expanded", "false");
  button.addEventListener("click", (event) => {
    event.stopPropagation(); // Otherwise the page's "clicked somewhere else" listener would close it right away.
    if (openHoursInfoButton === button) {
      closeHoursInfo();
    } else {
      openHoursInfo(button, course);
    }
  });
  return button;
}

// Where to put the info box, in pixels from the window's top-left corner, so it sits beside
// the "i" and never goes off the page: to the right if it fits, otherwise to the left, and
// moved up if it would run off the bottom.
function placeInfoBox(buttonRect, boxWidth, boxHeight, windowWidth, windowHeight) {
  const margin = 8;
  let left = buttonRect.right + margin;
  if (left + boxWidth > windowWidth - margin) {
    left = buttonRect.left - margin - boxWidth;
  }
  left = Math.max(margin, Math.min(left, windowWidth - margin - boxWidth));
  const top = Math.max(margin, Math.min(buttonRect.top, windowHeight - margin - boxHeight));
  return { left, top };
}

function openHoursInfo(button, course) {
  closeHoursInfo();
  hoursInfoBox.textContent = hoursExplanation(course);
  hoursInfoBox.hidden = false;
  const page = document.documentElement;
  const { left, top } = placeInfoBox(button.getBoundingClientRect(),
    hoursInfoBox.offsetWidth, hoursInfoBox.offsetHeight, page.clientWidth, page.clientHeight);
  hoursInfoBox.style.left = left + "px";
  hoursInfoBox.style.top = top + "px";
  button.setAttribute("aria-expanded", "true");
  openHoursInfoButton = button;
}

function closeHoursInfo() {
  hoursInfoBox.hidden = true;
  if (openHoursInfoButton) {
    openHoursInfoButton.setAttribute("aria-expanded", "false");
    openHoursInfoButton = null;
  }
}

// The courses whose number or title contains what the student typed, number matches first.
// "425", "cs 425", and "CS425" all find CS 425; "database" finds CS 411 Database Systems.
function searchCourses(query) {
  const typed = query.trim().toLowerCase();
  if (!typed) {
    return [];
  }
  const typedWithoutSpaces = typed.replaceAll(" ", "");
  const numberMatches = courses.filter((course) => course.id.toLowerCase().replace(" ", "").includes(typedWithoutSpaces));
  const titleMatches = courses.filter((course) => !numberMatches.includes(course) && course.title.toLowerCase().includes(typed));
  return [...numberMatches, ...titleMatches];
}

// Adds courses to the open plan's bank, skipping any it already has, and saves.
// Returns how many were added.
function addCourses(courseIds) {
  const newCourseIds = courseIds.filter((courseId) => !planHasCourse(courseId));
  if (newCourseIds.length > 0) {
    const placements = currentPlan().placements;
    for (const courseId of newCourseIds) {
      placements[courseId] = "bank";
    }
    saveCurrentPlan();
  }
  return newCourseIds.length;
}

// Takes a course out of the open plan, from the bank or from its semester, and saves.
function removeCourse(courseId) {
  delete currentPlan().placements[courseId];
  saveCurrentPlan();
}

// Moves a course to a semester (a position in semesterNames), or back to "bank", and saves.
// Only a course in the open plan can move.
function moveCourse(courseId, destination) {
  if (!planHasCourse(courseId)) {
    return;
  }
  currentPlan().placements[courseId] = destination;
  saveCurrentPlan();
  showPlan();
}

// Lets courses be dropped onto an area of the page.
function makeDropZone(area, destination) {
  area.addEventListener("dragover", (event) => event.preventDefault());
  area.addEventListener("drop", (event) => {
    event.preventDefault();
    moveCourse(event.dataTransfer.getData("text/plain"), destination);
  });
}

const semestersArea = document.getElementById("semesters");
const semesterBoxes = semesterNames.map((name, index) => {
  const box = document.createElement("section");
  box.className = "semester";
  box.dataset.semester = index;
  const heading = document.createElement("h2");
  heading.textContent = name;
  const hours = document.createElement("p");
  hours.className = "semester-hours";
  const list = document.createElement("ul");
  box.append(heading, hours, list);
  semestersArea.appendChild(box);
  makeDropZone(box, index);
  return { hours, list };
});

makeDropZone(document.getElementById("course-bank"), "bank");
const bankGroupsArea = document.getElementById("bank-groups");
bankGroupsArea.textContent = "";
const bankEmptyHint = document.getElementById("bank-empty");
const bankStatus = document.getElementById("bank-status");
const bankColumns = {};
const bankLists = {};
for (const group of bankGroups) {
  const column = document.createElement("div");
  column.className = "bank-group";
  column.dataset.group = group.key;
  const heading = document.createElement("h3");
  heading.textContent = group.name;
  const list = document.createElement("ul");
  column.append(heading, list);
  bankGroupsArea.appendChild(column);
  bankColumns[group.key] = column;
  bankLists[group.key] = list;
}

// The "Add courses" box. It covers the whole page, with the page dimmed around it. The student
// picks courses (they go in the Selected list at the top), then adds them all to the bank at once.
const addCoursesDialog = document.getElementById("add-courses-dialog");
const courseSearch = document.getElementById("course-search");
const searchMatchesList = document.getElementById("search-matches");
const selectedHeading = document.getElementById("selected-heading");
const selectedList = document.getElementById("selected-list");
const addSelectedButton = document.getElementById("add-selected");
const addStatus = document.getElementById("add-status");

// Courses picked in the box but not added to the bank yet, in the order they were picked.
// They stay picked if the box is closed and opened again.
let selectedCourseIds = [];

function selectCourses(courseIds) {
  const newCourseIds = courseIds.filter((courseId) => !planHasCourse(courseId) && !selectedCourseIds.includes(courseId));
  selectedCourseIds.push(...newCourseIds);
  return newCourseIds.length;
}

function unselectCourse(courseId) {
  selectedCourseIds = selectedCourseIds.filter((selectedId) => selectedId !== courseId);
}

// Redraws the Selected list and the Add button from selectedCourseIds.
function showSelectedCourses() {
  selectedList.textContent = "";
  selectedHeading.textContent = `Selected (${selectedCourseIds.length})`;
  if (selectedCourseIds.length === 0) {
    selectedList.appendChild(makeHint("Nothing selected yet. Search below and click a course to select it."));
  }
  for (const courseId of selectedCourseIds) {
    const item = document.createElement("li");
    item.className = "selected-course";
    item.textContent = courseId;
    const unselectButton = document.createElement("button");
    unselectButton.type = "button";
    unselectButton.textContent = "✕";
    unselectButton.setAttribute("aria-label", `Unselect ${courseId}`);
    unselectButton.addEventListener("click", () => {
      unselectCourse(courseId);
      addStatus.textContent = "";
      showAddCoursesDialog();
    });
    item.appendChild(unselectButton);
    selectedList.appendChild(item);
  }
  const count = selectedCourseIds.length;
  addSelectedButton.disabled = count === 0;
  addSelectedButton.textContent = count === 0 ? "Add to course bank" : `Add ${count} ${count === 1 ? "course" : "courses"} to course bank`;
}

// One search result: a button that selects the course (or unselects it, if it is selected
// already), or a greyed-out one if the plan has it.
function makeSearchMatch(course) {
  const item = document.createElement("li");
  const button = document.createElement("button");
  button.type = "button";
  button.dataset.matchId = course.id;
  button.textContent = `${course.id} · ${course.title} · ${describeHours(course.creditHours, course.maxCreditHours)}`;
  if (planHasCourse(course.id)) {
    button.disabled = true;
    button.textContent += " (already in this plan)";
  } else {
    const isSelected = selectedCourseIds.includes(course.id);
    button.setAttribute("aria-pressed", String(isSelected));
    if (isSelected) {
      button.textContent = "✓ " + button.textContent;
    }
  }
  button.addEventListener("click", () => toggleSelected(course.id));
  item.appendChild(button);
  return item;
}

function toggleSelected(courseId) {
  if (selectedCourseIds.includes(courseId)) {
    unselectCourse(courseId);
  } else {
    selectCourses([courseId]);
  }
  addStatus.textContent = "";
  showAddCoursesDialog();
}

// Redraws the list under the search box from what is typed in it.
function showSearchMatches() {
  searchMatchesList.textContent = "";
  const query = courseSearch.value.trim();
  if (!query) {
    return;
  }
  const matches = searchCourses(query);
  if (matches.length === 0) {
    searchMatchesList.appendChild(makeHint(`No courses match "${query}".`));
    return;
  }
  for (const course of matches.slice(0, maxSearchMatches)) {
    searchMatchesList.appendChild(makeSearchMatch(course));
  }
  const moreCount = matches.length - maxSearchMatches;
  if (moreCount > 0) {
    searchMatchesList.appendChild(makeHint(`${moreCount} more: keep typing to narrow it down.`));
  }
}

function showAddCoursesDialog() {
  selectedCourseIds = selectedCourseIds.filter((courseId) => !planHasCourse(courseId));
  showSelectedCourses();
  showSearchMatches();
}

document.getElementById("open-add-courses").addEventListener("click", () => {
  addStatus.textContent = "";
  showAddCoursesDialog();
  addCoursesDialog.showModal();
  courseSearch.focus();
});
document.getElementById("close-add-courses").addEventListener("click", () => addCoursesDialog.close());
// A click on the dimmed area around the box lands on the dialog itself, not on anything inside it.
addCoursesDialog.addEventListener("click", (event) => {
  if (event.target === addCoursesDialog) {
    addCoursesDialog.close();
  }
});

courseSearch.addEventListener("input", showSearchMatches);
// Enter selects the first match that isn't in the plan or selected yet.
courseSearch.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    event.preventDefault();
    const firstNewMatch = searchCourses(courseSearch.value)
      .slice(0, maxSearchMatches)
      .find((course) => !planHasCourse(course.id) && !selectedCourseIds.includes(course.id));
    if (firstNewMatch) {
      toggleSelected(firstNewMatch.id);
    }
  }
});

const selectDefaultButton = document.getElementById("select-default-courses");
selectDefaultButton.addEventListener("click", () => {
  const selectedCount = selectCourses(defaultCourseIds());
  const majorName = currentMajor().name;
  showAddCoursesDialog();
  if (selectedCount === 0) {
    addStatus.textContent = `All the default ${majorName} courses are already in this plan or selected.`;
  } else {
    addStatus.textContent = `Selected ${selectedCount} default ${majorName} ${selectedCount === 1 ? "course" : "courses"}.`;
  }
});

addSelectedButton.addEventListener("click", () => {
  const addedCount = addCourses(selectedCourseIds);
  selectedCourseIds = [];
  showPlan();
  addStatus.textContent = `Added ${addedCount} ${addedCount === 1 ? "course" : "courses"} to the course bank.`;
  courseSearch.focus();
});

// One info box, shared by every "i". It is drawn on top of the whole page (not inside a
// column), so the scrolling electives column can't cut it off.
const hoursInfoBox = document.createElement("div");
hoursInfoBox.id = "hours-info-box";
hoursInfoBox.className = "hours-info-box";
hoursInfoBox.hidden = true;
document.body.appendChild(hoursInfoBox);
let openHoursInfoButton = null;

// The box closes when the student clicks anywhere else, presses Esc, scrolls (the page or
// a column, so it never floats away from its card), or resizes the window.
// A red card goes back to normal the same way, on a click anywhere else or Esc.
document.addEventListener("click", (event) => {
  if (!hoursInfoBox.contains(event.target)) {
    closeHoursInfo();
  }
  if (cardInRemoveMode && !cardInRemoveMode.contains(event.target)) {
    leaveRemoveMode();
  }
});
document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && openHoursInfoButton) {
    const button = openHoursInfoButton;
    closeHoursInfo();
    button.focus();
  } else if (event.key === "Escape" && cardInRemoveMode) {
    const card = cardInRemoveMode;
    leaveRemoveMode();
    card.focus();
  }
});
document.addEventListener("scroll", closeHoursInfo, true);
window.addEventListener("resize", closeHoursInfo);

const planPicker = document.getElementById("plan-picker");
const saveStatus = document.getElementById("save-status");
const planNameForm = document.getElementById("plan-name-form");
const planNameLabel = document.getElementById("plan-name-label");
const planNameInput = document.getElementById("plan-name");
const planNameSubmit = document.getElementById("plan-name-submit");
let planNameFormIsForRename = false;

// "2:41 PM" for today, "Nov 8, 2:41 PM" for an earlier day.
function describeSaveTime(savedAt) {
  const time = savedAt.toLocaleTimeString([], { hour: "numeric", minute: "2-digit" });
  if (savedAt.toDateString() === new Date().toDateString()) {
    return time;
  }
  return `${savedAt.toLocaleDateString([], { month: "short", day: "numeric" })}, ${time}`;
}

// Redraws the plan dropdown and the "Last saved" label.
function showPlanBar() {
  planPicker.textContent = "";
  for (const plan of savedPlans.plans) {
    const option = document.createElement("option");
    option.value = plan.id;
    option.textContent = plan.name;
    planPicker.appendChild(option);
  }
  planPicker.value = savedPlans.currentPlanId;
  majorPicker.value = currentPlan().majorId;
  selectDefaultButton.textContent = `Select all default ${currentMajor().name} courses`;

  const savedAt = new Date(currentPlan().savedAt);
  if (!lastSaveWorked) {
    saveStatus.textContent = "Couldn't save: changes will be lost when you leave this page.";
  } else if (isNaN(savedAt)) {
    saveStatus.textContent = "Not saved yet";
  } else {
    saveStatus.textContent = `Last saved ${describeSaveTime(savedAt)}`;
  }
}

function showPlanNameForm(forRename) {
  planNameFormIsForRename = forRename;
  planNameLabel.textContent = forRename ? "New name:" : "Name (optional):";
  planNameSubmit.textContent = forRename ? "Rename" : "Create";
  planNameInput.value = forRename ? currentPlan().name : "";
  planNameForm.hidden = false;
  planNameInput.focus();
}

function hidePlanNameForm() {
  planNameForm.hidden = true;
}

document.getElementById("new-plan").addEventListener("click", () => showPlanNameForm(false));
document.getElementById("rename-plan").addEventListener("click", () => showPlanNameForm(true));
document.getElementById("cancel-plan-name").addEventListener("click", hidePlanNameForm);

planNameForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const name = planNameInput.value.trim();
  if (!planNameFormIsForRename) {
    createPlan(name);
    showPlan();
  } else if (name) {
    currentPlan().name = name;
    saveCurrentPlan();
  }
  hidePlanNameForm();
});

// The major dropdown lists every major; choosing one changes only the open plan's major
// (what "Select all default courses" adds), not the courses already in the plan.
const majorPicker = document.getElementById("major-picker");
for (const major of majors) {
  const option = document.createElement("option");
  option.value = major.id;
  option.textContent = major.name;
  majorPicker.appendChild(option);
}

majorPicker.addEventListener("change", () => {
  currentPlan().majorId = majorPicker.value;
  saveCurrentPlan();
});

planPicker.addEventListener("change", () => {
  savedPlans.currentPlanId = Number(planPicker.value);
  hidePlanNameForm();
  savePlans();
  showPlan();
});

// Redraws the bank, every semester, and the search results from the open plan.
function showPlan() {
  closeHoursInfo();
  cardInRemoveMode = null; // Its card is about to be redrawn.
  bankStatus.textContent = "";
  const placements = currentPlan().placements;
  const semesterHours = semesterNames.map(() => ({ min: 0, max: 0 }));
  for (const box of semesterBoxes) {
    box.list.textContent = "";
  }
  for (const list of Object.values(bankLists)) {
    list.textContent = "";
  }

  for (const course of courses.filter((course) => planHasCourse(course.id))) {
    const semester = placements[course.id];
    if (semester === "bank") {
      bankLists[bankGroupKey(course)].appendChild(makeCourseItem(course));
    } else {
      const card = makeCourseItem(course);
      addPrerequisiteWarnings(card, course, semester);
      semesterBoxes[semester].list.appendChild(card);
      semesterHours[semester].min += course.creditHours;
      semesterHours[semester].max += course.maxCreditHours;
    }
  }

  semesterBoxes.forEach((box, index) => {
    box.hours.textContent = describeHours(semesterHours[index].min, semesterHours[index].max);
    if (box.list.children.length === 0) {
      box.list.appendChild(makeHint("Drop courses here"));
    }
  });
  // Only the columns with courses waiting in them are shown.
  for (const group of bankGroups) {
    bankColumns[group.key].hidden = bankLists[group.key].children.length === 0;
  }
  if (Object.keys(placements).length === 0) {
    bankEmptyHint.textContent = "This plan's bank is empty. Click \"+ Add courses\" to add some.";
  } else {
    bankEmptyHint.textContent = "Every course in this plan is in a semester.";
  }
  bankEmptyHint.hidden = Object.values(bankColumns).some((column) => !column.hidden);
  showAddCoursesDialog();
}

// Opening the page: tidy up whatever was saved, then open the last plan used,
// or start a first plan if there are none.
savedPlans.plans = savedPlans.plans
  .filter((plan) => Number.isInteger(plan?.id))
  .map((plan) => ({
    id: plan.id,
    name: typeof plan.name === "string" && plan.name.trim() ? plan.name : "Untitled plan",
    majorId: majors.some((major) => major.id === plan.majorId) ? plan.majorId : defaultMajorId,
    placements: cleanPlacements(plan.placements),
    savedAt: plan.savedAt,
  }));
if (savedPlans.plans.length === 0) {
  createPlan("");
} else {
  if (!currentPlan()) {
    savedPlans.currentPlanId = savedPlans.plans[0].id;
  }
  showPlanBar();
}
showPlan();
