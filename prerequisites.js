// Turns a course's prerequisite sentence from Course Explorer into rules the planner can check.

// A course ID in a sentence, like "CS 225" or "MATH 241".
const courseIdPattern = /\b[A-Z]{2,4} \d{3}\b/g;

function parsePrerequisites(text) {
  if (!text) {
    return [];
  }
  const sentence = text.replace(/,?\s*or a combination of[^.;]*/gi, "");
  const pieces = sentence.split(/;|\.(?:\s+|$)|\)\s*and\s+|\s+and\s+(?=\(|one of)/i);
  const groups = [];
  for (const piece of pieces) {
    const courseIds = piece.match(courseIdPattern) ?? [];
    const recommended = /recommend|encouraged/i.test(piece);
    const sameSemester = /credit or concurrent/i.test(piece);
    const otherWords = piece
      .replace(courseIdPattern, "")
      .replace(/credit or concurrent (?:registration|enrollment) in|\bone of\b|\bor\b|\band\b|[,/()]/gi, "")
      .trim();
    if (courseIds.length === 0 || (otherWords !== "" && !recommended)) {
      continue;
    }
    const isChoice = recommended || /\bor\b|\bone of\b|\//i.test(piece.replace(/credit or concurrent/i, ""));
    if (isChoice) {
      groups.push({ courseIds, sameSemester, recommended });
    } else {
      for (const courseId of courseIds) {
        groups.push({ courseIds: [courseId], sameSemester, recommended });
      }
    }
  }
  return groups;
}
