// Keeps the student's plans in this browser's localStorage, so they are still there after a reload.
// They are saved as text, for example:
// {"currentPlanId":1,"plans":[{"id":1,"name":"Plan 1","placements":{"CS 124":0,"CS 425":"bank"},"savedAt":"2026-11-09T22:41:00.000Z"}]}
const planStorageKey = "uiucDegreePlanner.plans";

// Reads the saved plans, or returns null when there are none or they can't be read.
function loadSavedPlans() {
  try {
    const text = localStorage.getItem(planStorageKey);
    if (text === null) {
      return null;
    }
    const saved = JSON.parse(text);
    if (!Array.isArray(saved?.plans) || saved.plans.length === 0) {
      return null;
    }
    return saved;
  } catch {
    return null;
  }
}

// Saves the plans. Returns false when the browser won't allow it, as some private windows do.
function storeSavedPlans(saved) {
  try {
    localStorage.setItem(planStorageKey, JSON.stringify(saved));
    return true;
  } catch {
    return false;
  }
}

// "Plan 1", "Plan 2", ...: the first one no plan is already called.
function nextDefaultPlanName(plans) {
  let number = 1;
  while (plans.some((plan) => plan.name === `Plan ${number}`)) {
    number++;
  }
  return `Plan ${number}`;
}
