// Every course a Grainger major's sample sequence names, the CS technical electives, and every other
// undergraduate CS and MATH course, downloaded from UIUC Course Explorer by scripts/fetch-courses.mjs.
// Do not edit by hand: run the script again instead.
const courses = [
  {
    "id": "AE 100",
    "title": "Intro to Aerospace Engineering",
    "creditHours": 2,
    "maxCreditHours": 2,
    "requirement": "required",
    "termsOffered": [
      "Spring 2027",
      "Fall 2026",
      "Fall 2025",
      "Fall 2024"
    ],
    "genEds": [],
    "prerequisiteText": ""
  },
  {
    "id": "AE 140",
    "title": "Aerospace Computer-Aided Design",
    "creditHours": 2,
    "maxCreditHours": 2,
    "requirement": "required",
    "termsOffered": [
      "Spring 2027",
      "Fall 2026",
      "Spring 2026",
      "Fall 2025",
      "Spring 2025",
      "Fall 2024"
    ],
    "genEds": [],
    "prerequisiteText": "Restricted to Aerospace Majors."
  },
  {
    "id": "AE 202",
    "title": "Aerospace Flight Mechanics",
    "creditHours": 3,
    "maxCreditHours": 3,
    "requirement": "required",
    "termsOffered": [
      "Spring 2027",
      "Fall 2026",
      "Spring 2026",
      "Fall 2025",
      "Spring 2025",
      "Fall 2024"
    ],
    "genEds": [],
    "prerequisiteText": "Credit or concurrent registration in TAM 212."
  },
  {
    "id": "AE 311",
    "title": "Incompressible Flow",
    "creditHours": 3,
    "maxCreditHours": 3,
    "requirement": "required",
    "termsOffered": [
      "Spring 2027",
      "Fall 2026",
      "Spring 2026",
      "Fall 2025",
      "Spring 2025",
      "Fall 2024"
    ],
    "genEds": [],
    "prerequisiteText": "Credit or concurrent registration in AE 202 and MATH 241."
  },
  {
    "id": "AE 312",
    "title": "Compressible Flow",
    "creditHours": 3,
    "maxCreditHours": 3,
    "requirement": "required",
    "termsOffered": [
      "Spring 2027",
      "Fall 2026",
      "Spring 2026",
      "Fall 2025",
      "Spring 2025",
      "Fall 2024"
    ],
    "genEds": [],
    "prerequisiteText": "AE 202 and MATH 285. Credit or concurrent registration in ME 200."
  },
  {
    "id": "AE 321",
    "title": "Mechs of Aerospace Structures",
    "creditHours": 3,
    "maxCreditHours": 3,
    "requirement": "required",
    "termsOffered": [
      "Spring 2027",
      "Fall 2026",
      "Spring 2026",
      "Fall 2025",
      "Spring 2025",
      "Fall 2024"
    ],
    "genEds": [],
    "prerequisiteText": "MATH 285 and one of TAM 210 or TAM 211."
  },
  {
    "id": "AE 323",
    "title": "Applied Aerospace Structures",
    "creditHours": 3,
    "maxCreditHours": 3,
    "requirement": "required",
    "termsOffered": [
      "Spring 2027",
      "Fall 2026",
      "Spring 2026",
      "Fall 2025",
      "Spring 2025",
      "Fall 2024"
    ],
    "genEds": [],
    "prerequisiteText": "AE 321, MATH 241, MATH 285, and one of TAM 210 or TAM 211."
  },
  {
    "id": "AE 352",
    "title": "Aerospace Dynamical Systems",
    "creditHours": 3,
    "maxCreditHours": 3,
    "requirement": "required",
    "termsOffered": [
      "Spring 2027",
      "Fall 2026",
      "Spring 2026",
      "Fall 2025",
      "Spring 2025",
      "Fall 2024"
    ],
    "genEds": [],
    "prerequisiteText": "MATH 225, MATH 257, or MATH 415; MATH 285, MATH 284, MATH 286, or MATH 441; and TAM 212."
  },
  {
    "id": "AE 353",
    "title": "Aerospace Control Systems",
    "creditHours": 3,
    "maxCreditHours": 3,
    "requirement": "required",
    "termsOffered": [
      "Spring 2027",
      "Fall 2026",
      "Spring 2026",
      "Fall 2025",
      "Spring 2025",
      "Fall 2024"
    ],
    "genEds": [],
    "prerequisiteText": "MATH 225, MATH 257, or MATH 415; and MATH 285 and TAM 212."
  },
  {
    "id": "AE 370",
    "title": "Aerospace Numerical Methods",
    "creditHours": 3,
    "maxCreditHours": 3,
    "requirement": "required",
    "termsOffered": [
      "Spring 2027",
      "Fall 2026",
      "Spring 2026",
      "Fall 2025",
      "Spring 2025",
      "Fall 2024"
    ],
    "genEds": [],
    "prerequisiteText": "Credit or concurrent registration in AE 311 or AE 312; credit or concurrent registration in AE 321 or AE 323."
  },
  {
    "id": "AE 433",
    "title": "Aerospace Propulsion",
    "creditHours": 3,
    "maxCreditHours": 3,
    "requirement": "required",
    "termsOffered": [
      "Fall 2026",
      "Fall 2025",
      "Fall 2024"
    ],
    "genEds": [],
    "prerequisiteText": "AE 312 and PHYS 212."
  },
  {
    "id": "AE 442",
    "title": "Aerospace Systems Design I",
    "creditHours": 3,
    "maxCreditHours": 3,
    "requirement": "required",
    "termsOffered": [
      "Spring 2027",
      "Fall 2026",
      "Spring 2026",
      "Fall 2025",
      "Fall 2024"
    ],
    "genEds": [],
    "prerequisiteText": "Credit or concurrent registration in AE 311, AE 323, and AE 352."
  },
  {
    "id": "AE 443",
    "title": "Aerospace Systems Design II",
    "creditHours": 3,
    "maxCreditHours": 3,
    "requirement": "required",
    "termsOffered": [
      "Spring 2027",
      "Fall 2026",
      "Spring 2026",
      "Spring 2025"
    ],
    "genEds": [
      "Advanced Composition"
    ],
    "prerequisiteText": "AE 442."
  },
  {
    "id": "AE 460",
    "title": "Aerodynamics & Propulsion Lab",
    "creditHours": 2,
    "maxCreditHours": 2,
    "requirement": "required",
    "termsOffered": [
      "Fall 2026",
      "Fall 2025",
      "Fall 2024"
    ],
    "genEds": [],
    "prerequisiteText": "AE 311; credit or concurrent registration in AE 433."
  },
  {
    "id": "AE 461",
    "title": "Structures & Control Lab",
    "creditHours": 2,
    "maxCreditHours": 2,
    "requirement": "required",
    "termsOffered": [
      "Spring 2027",
      "Spring 2026",
      "Spring 2025"
    ],
    "genEds": [],
    "prerequisiteText": "AE 321 and AE 352. Credit or concurrent registration in AE 323 and AE 353."
  },
  {
    "id": "AE 483",
    "title": "Autonomous Systems Lab",
    "creditHours": 2,
    "maxCreditHours": 2,
    "requirement": "required",
    "termsOffered": [
      "Fall 2026",
      "Fall 2025",
      "Fall 2024"
    ],
    "genEds": [],
    "prerequisiteText": "AE 202, AE 352, AE 353, AE 370, and PHYS 212."
  },
  {
    "id": "ATMS 202",
    "title": "General Physical Climate",
    "creditHours": 3,
    "maxCreditHours": 3,
    "requirement": "required",
    "termsOffered": [
      "Spring 2027",
      "Fall 2026",
      "Spring 2026",
      "Spring 2025"
    ],
    "genEds": [
      "Quantitative Reasoning II"
    ],
    "prerequisiteText": "MATH 220 or MATH 221."
  },
  {
    "id": "BIOE 100",
    "title": "Bioengineering Seminar",
    "creditHours": 1,
    "maxCreditHours": 1,
    "requirement": "required",
    "termsOffered": [
      "Fall 2026",
      "Fall 2025",
      "Fall 2024"
    ],
    "genEds": [],
    "prerequisiteText": ""
  },
  {
    "id": "BIOE 120",
    "title": "Introduction to Bioengineering",
    "creditHours": 1,
    "maxCreditHours": 1,
    "requirement": "required",
    "termsOffered": [
      "Spring 2027",
      "Fall 2026",
      "Spring 2026",
      "Fall 2025",
      "Spring 2025",
      "Fall 2024"
    ],
    "genEds": [],
    "prerequisiteText": ""
  },
  {
    "id": "BIOE 201",
    "title": "Conservation Principles Bioeng",
    "creditHours": 3,
    "maxCreditHours": 3,
    "requirement": "required",
    "termsOffered": [
      "Fall 2026",
      "Fall 2025",
      "Fall 2024"
    ],
    "genEds": [],
    "prerequisiteText": "CHEM 104, MCB 150, and PHYS 211."
  },
  {
    "id": "BIOE 202",
    "title": "Cell & Tissue Engineering Lab",
    "creditHours": 2,
    "maxCreditHours": 2,
    "requirement": "required",
    "termsOffered": [
      "Spring 2027",
      "Fall 2026",
      "Spring 2026",
      "Fall 2025",
      "Spring 2025",
      "Fall 2024"
    ],
    "genEds": [],
    "prerequisiteText": "MCB 150, and credit or concurrent enrollment in BIOE 206."
  },
  {
    "id": "BIOE 205",
    "title": "Signals & Systems in Bioengrg",
    "creditHours": 3,
    "maxCreditHours": 3,
    "requirement": "required",
    "termsOffered": [
      "Spring 2027",
      "Spring 2026",
      "Spring 2025"
    ],
    "genEds": [],
    "prerequisiteText": "CS 101 or CS 124, PHYS 212, and credit or concurrent registration in MATH 285."
  },
  {
    "id": "BIOE 206",
    "title": "Cellular Bioengineering",
    "creditHours": 3,
    "maxCreditHours": 3,
    "requirement": "required",
    "termsOffered": [
      "Fall 2026",
      "Fall 2025",
      "Fall 2024"
    ],
    "genEds": [],
    "prerequisiteText": "MCB 150."
  },
  {
    "id": "BIOE 210",
    "title": "Linear Algebra for Biomedical Data Science",
    "creditHours": 3,
    "maxCreditHours": 3,
    "requirement": "required",
    "termsOffered": [
      "Spring 2027",
      "Fall 2026",
      "Spring 2026",
      "Fall 2025",
      "Spring 2025",
      "Fall 2024"
    ],
    "genEds": [],
    "prerequisiteText": "CS 101 or CS 124, and MATH 231."
  },
  {
    "id": "BIOE 302",
    "title": "Modeling Human Physiology",
    "creditHours": 3,
    "maxCreditHours": 3,
    "requirement": "required",
    "termsOffered": [
      "Fall 2026",
      "Fall 2025",
      "Fall 2024"
    ],
    "genEds": [],
    "prerequisiteText": "BIOE 205 and one of MCB 252 or BIOE 206."
  },
  {
    "id": "BIOE 303",
    "title": "Quantitative Physiology Lab",
    "creditHours": 2,
    "maxCreditHours": 2,
    "requirement": "required",
    "termsOffered": [
      "Spring 2027",
      "Fall 2026",
      "Spring 2026",
      "Fall 2025",
      "Spring 2025",
      "Fall 2024"
    ],
    "genEds": [],
    "prerequisiteText": "Concurrent enrollment in BIOE 302 is allowed."
  },
  {
    "id": "BIOE 310",
    "title": "Computational Tools for Biological Data",
    "creditHours": 3,
    "maxCreditHours": 3,
    "requirement": "required",
    "termsOffered": [
      "Spring 2027",
      "Fall 2026",
      "Spring 2026",
      "Spring 2025"
    ],
    "genEds": [],
    "prerequisiteText": "BIOE 210 or MATH 257. Students in the BS-BIOE must take BIOE 210 as the prerequisite."
  },
  {
    "id": "BIOE 360",
    "title": "Transport & Flow in Bioengrg",
    "creditHours": 3,
    "maxCreditHours": 3,
    "requirement": "required",
    "termsOffered": [
      "Spring 2027",
      "Spring 2026",
      "Spring 2025"
    ],
    "genEds": [],
    "prerequisiteText": "BIOE 201 and MATH 285."
  },
  {
    "id": "BIOE 400",
    "title": "Bioengineering Senior Design",
    "creditHours": 4,
    "maxCreditHours": 4,
    "requirement": "required",
    "termsOffered": [
      "Spring 2027",
      "Fall 2026",
      "Spring 2026",
      "Fall 2025",
      "Spring 2025",
      "Fall 2024"
    ],
    "genEds": [
      "Advanced Composition"
    ],
    "prerequisiteText": "BIOE 302, BIOE 303, BIOE 414, BIOE 415. Restricted to students in the Bioengineering Bachelor of Science program."
  },
  {
    "id": "BIOE 404",
    "title": "CS+BIOE Senior Design",
    "creditHours": 4,
    "maxCreditHours": 4,
    "requirement": "required",
    "termsOffered": [],
    "genEds": [],
    "prerequisiteText": "CS 374, BIOE 310, BIOE 206 or BIOE 302. Concurrent enrollment in CS 357 or CS 421. Restricted to CS + BIOE majors only."
  },
  {
    "id": "BIOE 414",
    "title": "Biomedical Instrumentation",
    "creditHours": 3,
    "maxCreditHours": 3,
    "requirement": "required",
    "termsOffered": [
      "Spring 2027",
      "Fall 2026",
      "Spring 2026",
      "Fall 2025",
      "Spring 2025",
      "Fall 2024"
    ],
    "genEds": [],
    "prerequisiteText": "BIOE 205, ECE 205 or ECE 210."
  },
  {
    "id": "BIOE 415",
    "title": "Biomedical Instrumentation Lab",
    "creditHours": 2,
    "maxCreditHours": 2,
    "requirement": "required",
    "termsOffered": [
      "Spring 2027",
      "Fall 2026",
      "Spring 2026",
      "Fall 2025",
      "Spring 2025",
      "Fall 2024"
    ],
    "genEds": [],
    "prerequisiteText": "Credit or concurrent registration in BIOE 414."
  },
  {
    "id": "BIOE 420",
    "title": "Intro Bio Control Systems",
    "creditHours": 3,
    "maxCreditHours": 3,
    "requirement": "required",
    "termsOffered": [
      "Fall 2026",
      "Fall 2025",
      "Fall 2024"
    ],
    "genEds": [],
    "prerequisiteText": "BIOE 302, BIOE 303, BIOE 414, BIOE 415."
  },
  {
    "id": "BIOE 476",
    "title": "Tissue Engineering",
    "creditHours": 3,
    "maxCreditHours": 3,
    "requirement": "required",
    "termsOffered": [
      "Fall 2026",
      "Fall 2025",
      "Fall 2024"
    ],
    "genEds": [],
    "prerequisiteText": "MCB 150 and BIOE 206."
  },
  {
    "id": "CEE 190",
    "title": "Project-Based Introduction to CEE",
    "creditHours": 4,
    "maxCreditHours": 4,
    "requirement": "required",
    "termsOffered": [
      "Fall 2026",
      "Fall 2025",
      "Fall 2024"
    ],
    "genEds": [],
    "prerequisiteText": ""
  },
  {
    "id": "CEE 201",
    "title": "Systems Engrg & Economics",
    "creditHours": 3,
    "maxCreditHours": 3,
    "requirement": "required",
    "termsOffered": [
      "Spring 2027",
      "Fall 2026",
      "Spring 2026",
      "Fall 2025",
      "Spring 2025",
      "Fall 2024"
    ],
    "genEds": [],
    "prerequisiteText": "MATH 231; CS 101 or CS 124; credit or concurrent registration in MATH 257 or MATH 415."
  },
  {
    "id": "CEE 202",
    "title": "Engineering Risk & Uncertainty",
    "creditHours": 3,
    "maxCreditHours": 3,
    "requirement": "required",
    "termsOffered": [
      "Spring 2027",
      "Fall 2026",
      "Spring 2026",
      "Fall 2025",
      "Spring 2025",
      "Fall 2024"
    ],
    "genEds": [],
    "prerequisiteText": "Credit in CS 101 or CS 124; Credit or concurrent registration in MATH 241."
  },
  {
    "id": "CEE 300",
    "title": "Behavior of Materials",
    "creditHours": 4,
    "maxCreditHours": 4,
    "requirement": "required",
    "termsOffered": [
      "Spring 2027",
      "Fall 2026",
      "Spring 2026",
      "Fall 2025",
      "Spring 2025",
      "Fall 2024"
    ],
    "genEds": [
      "Advanced Composition"
    ],
    "prerequisiteText": "Completion of Composition I general education requirement; CHEM 104; TAM 251."
  },
  {
    "id": "CEE 330",
    "title": "Environmental Engineering",
    "creditHours": 3,
    "maxCreditHours": 3,
    "requirement": "required",
    "termsOffered": [
      "Spring 2027",
      "Fall 2026",
      "Spring 2026",
      "Fall 2025",
      "Spring 2025",
      "Fall 2024"
    ],
    "genEds": [],
    "prerequisiteText": "CHEM 104 or CHEM 204."
  },
  {
    "id": "CEE 331",
    "title": "Fluid Dynamics in the Natural and Built Environment",
    "creditHours": 4,
    "maxCreditHours": 4,
    "requirement": "required",
    "termsOffered": [
      "Fall 2026",
      "Fall 2025",
      "Fall 2024"
    ],
    "genEds": [],
    "prerequisiteText": "TAM 211. Credit or concurrent registration in TAM 212."
  },
  {
    "id": "CEE 340",
    "title": "Energy and Global Environment",
    "creditHours": 3,
    "maxCreditHours": 3,
    "requirement": "required",
    "termsOffered": [
      "Fall 2026",
      "Fall 2025",
      "Fall 2024"
    ],
    "genEds": [
      "Advanced Composition"
    ],
    "prerequisiteText": "PHYS 211; PHYS 213 or ME 200; CEE 201 or IE 310; CEE 202, IE 300, or STAT 200."
  },
  {
    "id": "CEE 350",
    "title": "Water Resources Engineering",
    "creditHours": 3,
    "maxCreditHours": 3,
    "requirement": "required",
    "termsOffered": [
      "Spring 2027",
      "Fall 2026",
      "Spring 2026",
      "Fall 2025",
      "Spring 2025",
      "Fall 2024"
    ],
    "genEds": [],
    "prerequisiteText": "CEE 202; credit or concurrent registration in CEE 201."
  },
  {
    "id": "CEE 449",
    "title": "Environmental Engineering Lab",
    "creditHours": 3,
    "maxCreditHours": 3,
    "requirement": "required",
    "termsOffered": [
      "Spring 2027",
      "Spring 2026",
      "Spring 2025"
    ],
    "genEds": [],
    "prerequisiteText": "CEE 330."
  },
  {
    "id": "CEE 453",
    "title": "Urban Hydrology and Hydraulics",
    "creditHours": 4,
    "maxCreditHours": 4,
    "requirement": "required",
    "termsOffered": [
      "Spring 2027",
      "Spring 2026",
      "Spring 2025"
    ],
    "genEds": [],
    "prerequisiteText": "CEE 350."
  },
  {
    "id": "CEE 495",
    "title": "Professional Practice",
    "creditHours": 0,
    "maxCreditHours": 0,
    "requirement": "required",
    "termsOffered": [
      "Fall 2026",
      "Fall 2025",
      "Spring 2025",
      "Fall 2024"
    ],
    "genEds": [],
    "prerequisiteText": ""
  },
  {
    "id": "CHEM 102",
    "title": "General Chemistry I",
    "creditHours": 3,
    "maxCreditHours": 3,
    "requirement": "required",
    "termsOffered": [
      "Spring 2027",
      "Fall 2026",
      "Summer 2026",
      "Spring 2026",
      "Fall 2025",
      "Summer 2025",
      "Spring 2025",
      "Fall 2024"
    ],
    "genEds": [
      "Nat Sci & Tech - Phys Sciences"
    ],
    "prerequisiteText": "Credit in or exemption from MATH 112; one year of high school chemistry or equivalent. All students enrolled in CHEM 102 should also enroll in CHEM 103."
  },
  {
    "id": "CHEM 103",
    "title": "General Chemistry Lab I",
    "creditHours": 1,
    "maxCreditHours": 1,
    "requirement": "required",
    "termsOffered": [
      "Spring 2027",
      "Fall 2026",
      "Spring 2026",
      "Fall 2025",
      "Spring 2025",
      "Fall 2024"
    ],
    "genEds": [],
    "prerequisiteText": "Credit or concurrent registration in CHEM 102 is required."
  },
  {
    "id": "CHEM 104",
    "title": "General Chemistry II",
    "creditHours": 3,
    "maxCreditHours": 3,
    "requirement": "required",
    "termsOffered": [
      "Spring 2027",
      "Fall 2026",
      "Summer 2026",
      "Spring 2026",
      "Fall 2025",
      "Summer 2025",
      "Spring 2025",
      "Fall 2024"
    ],
    "genEds": [
      "Nat Sci & Tech - Phys Sciences"
    ],
    "prerequisiteText": "CHEM 102 or CHEM 202 or advanced placement credit for one semester of college-level chemistry. All students enrolled in CHEM 104 should also enroll in CHEM 105."
  },
  {
    "id": "CHEM 105",
    "title": "General Chemistry Lab II",
    "creditHours": 1,
    "maxCreditHours": 1,
    "requirement": "required",
    "termsOffered": [
      "Spring 2027",
      "Fall 2026",
      "Spring 2026",
      "Fall 2025",
      "Spring 2025",
      "Fall 2024"
    ],
    "genEds": [],
    "prerequisiteText": "CHEM 102 and CHEM 103. Credit or concurrent registration in CHEM 104 is required."
  },
  {
    "id": "CHEM 232",
    "title": "Elementary Organic Chemistry I",
    "creditHours": 3,
    "maxCreditHours": 4,
    "requirement": "required",
    "termsOffered": [
      "Spring 2027",
      "Fall 2026",
      "Summer 2026",
      "Spring 2026",
      "Fall 2025",
      "Summer 2025",
      "Spring 2025",
      "Fall 2024"
    ],
    "genEds": [],
    "prerequisiteText": "CHEM 104 and CHEM 105, or CHEM 204."
  },
  {
    "id": "CS 100",
    "title": "Computer Science Orientation",
    "creditHours": 1,
    "maxCreditHours": 1,
    "requirement": "required",
    "termsOffered": [
      "Fall 2026",
      "Fall 2025",
      "Fall 2024"
    ],
    "genEds": [],
    "prerequisiteText": ""
  },
  {
    "id": "CS 101",
    "title": "Intro Computing: Engrg & Sci",
    "creditHours": 3,
    "maxCreditHours": 3,
    "requirement": "required",
    "termsOffered": [
      "Spring 2027",
      "Fall 2026",
      "Spring 2026",
      "Fall 2025",
      "Spring 2025",
      "Fall 2024"
    ],
    "genEds": [
      "Quantitative Reasoning II"
    ],
    "prerequisiteText": "One of MATH 220 or MATH 221 or MATH 231 or MATH 241."
  },
  {
    "id": "CS 102",
    "title": "Little Bits to Big Ideas",
    "creditHours": 4,
    "maxCreditHours": 4,
    "requirement": "other",
    "termsOffered": [
      "Spring 2027",
      "Spring 2026",
      "Spring 2025"
    ],
    "genEds": [],
    "prerequisiteText": ""
  },
  {
    "id": "CS 105",
    "title": "Intro Computing: Non-Tech",
    "creditHours": 3,
    "maxCreditHours": 3,
    "requirement": "other",
    "termsOffered": [
      "Spring 2027",
      "Fall 2026",
      "Spring 2026",
      "Fall 2025",
      "Spring 2025",
      "Fall 2024"
    ],
    "genEds": [
      "Quantitative Reasoning I"
    ],
    "prerequisiteText": "MATH 112."
  },
  {
    "id": "CS 107",
    "title": "Data Science Discovery",
    "creditHours": 4,
    "maxCreditHours": 4,
    "requirement": "required",
    "termsOffered": [
      "Spring 2027",
      "Fall 2026",
      "Spring 2026",
      "Fall 2025",
      "Spring 2025",
      "Fall 2024"
    ],
    "genEds": [
      "Quantitative Reasoning I"
    ],
    "prerequisiteText": ""
  },
  {
    "id": "CS 124",
    "title": "Introduction to Computer Science I",
    "creditHours": 3,
    "maxCreditHours": 3,
    "requirement": "required",
    "termsOffered": [
      "Spring 2027",
      "Fall 2026",
      "Spring 2026",
      "Fall 2025",
      "Summer 2025",
      "Spring 2025",
      "Fall 2024"
    ],
    "genEds": [
      "Quantitative Reasoning I"
    ],
    "prerequisiteText": "Three years of high school mathematics or MATH 112."
  },
  {
    "id": "CS 125",
    "title": "Introduction to Computer Science",
    "creditHours": 4,
    "maxCreditHours": 4,
    "requirement": "other",
    "termsOffered": [],
    "genEds": [],
    "prerequisiteText": "Three years of high school mathematics or MATH 112."
  },
  {
    "id": "CS 126",
    "title": "Software Design Studio",
    "creditHours": 3,
    "maxCreditHours": 3,
    "requirement": "other",
    "termsOffered": [],
    "genEds": [],
    "prerequisiteText": "CS 125. For majors only."
  },
  {
    "id": "CS 128",
    "title": "Introduction to Computer Science II",
    "creditHours": 3,
    "maxCreditHours": 3,
    "requirement": "required",
    "termsOffered": [
      "Spring 2027",
      "Fall 2026",
      "Summer 2026",
      "Spring 2026",
      "Fall 2025",
      "Summer 2025",
      "Spring 2025",
      "Fall 2024"
    ],
    "genEds": [
      "Quantitative Reasoning II"
    ],
    "prerequisiteText": "CS 124 or CS 125."
  },
  {
    "id": "CS 173",
    "title": "Discrete Structures",
    "creditHours": 3,
    "maxCreditHours": 3,
    "requirement": "required",
    "termsOffered": [
      "Spring 2027",
      "Fall 2026",
      "Summer 2026",
      "Spring 2026",
      "Fall 2025",
      "Summer 2025",
      "Spring 2025",
      "Fall 2024"
    ],
    "genEds": [],
    "prerequisiteText": "One of CS 124, CS 125, ECE 220; one of MATH 220, MATH 221."
  },
  {
    "id": "CS 196",
    "title": "First-Year Student Honors",
    "creditHours": 1,
    "maxCreditHours": 1,
    "requirement": "other",
    "termsOffered": [],
    "genEds": [],
    "prerequisiteText": "Concurrent registration in another 100-level computer science course (see Schedule)."
  },
  {
    "id": "CS 199",
    "title": "Undergraduate Open Seminar in Computer Science",
    "creditHours": 0,
    "maxCreditHours": 5,
    "requirement": "other",
    "termsOffered": [
      "Spring 2027",
      "Fall 2026",
      "Summer 2026",
      "Spring 2026",
      "Fall 2025",
      "Summer 2025",
      "Spring 2025",
      "Fall 2024"
    ],
    "genEds": [],
    "prerequisiteText": ""
  },
  {
    "id": "CS 210",
    "title": "Ethical & Professional Issues",
    "creditHours": 2,
    "maxCreditHours": 2,
    "requirement": "required",
    "termsOffered": [
      "Spring 2027",
      "Fall 2026",
      "Spring 2026",
      "Fall 2025",
      "Spring 2025",
      "Fall 2024"
    ],
    "genEds": [],
    "prerequisiteText": "CS 225. Junior standing required."
  },
  {
    "id": "CS 211",
    "title": "Ethical and Professional Conduct",
    "creditHours": 3,
    "maxCreditHours": 3,
    "requirement": "required",
    "termsOffered": [
      "Spring 2027",
      "Fall 2026",
      "Spring 2026",
      "Fall 2025",
      "Spring 2025",
      "Fall 2024"
    ],
    "genEds": [
      "Advanced Composition"
    ],
    "prerequisiteText": "CS 225."
  },
  {
    "id": "CS 222",
    "title": "Software Design Lab",
    "creditHours": 1,
    "maxCreditHours": 1,
    "requirement": "required",
    "termsOffered": [
      "Spring 2027",
      "Fall 2026",
      "Spring 2026",
      "Fall 2025",
      "Spring 2025",
      "Fall 2024"
    ],
    "genEds": [],
    "prerequisiteText": "CS 128; credit or concurrent registration in CS 225. Restricted to majors in Computer Science undergraduate curricula only."
  },
  {
    "id": "CS 225",
    "title": "Data Structures",
    "creditHours": 4,
    "maxCreditHours": 4,
    "requirement": "required",
    "termsOffered": [
      "Spring 2027",
      "Fall 2026",
      "Spring 2026",
      "Fall 2025",
      "Summer 2025",
      "Spring 2025",
      "Fall 2024"
    ],
    "genEds": [
      "Quantitative Reasoning II"
    ],
    "prerequisiteText": "CS 126 or CS 128 or ECE 220; One of CS 173, CS 413, MATH 213, MATH 314, MATH 347, MATH 412, or MATH 413."
  },
  {
    "id": "CS 233",
    "title": "Computer Architecture",
    "creditHours": 4,
    "maxCreditHours": 4,
    "requirement": "required",
    "termsOffered": [
      "Spring 2027",
      "Fall 2026",
      "Spring 2026",
      "Fall 2025",
      "Spring 2025",
      "Fall 2024"
    ],
    "genEds": [],
    "prerequisiteText": "CS 125 or CS 128; CS 173 or MATH 213; credit or concurrent enrollment in CS 225."
  },
  {
    "id": "CS 242",
    "title": "Programming Studio",
    "creditHours": 3,
    "maxCreditHours": 3,
    "requirement": "other",
    "termsOffered": [],
    "genEds": [],
    "prerequisiteText": "CS 241."
  },
  {
    "id": "CS 265",
    "title": "Innovation Illinois: From Accessible Design to Supercomputing Cultures",
    "creditHours": 3,
    "maxCreditHours": 3,
    "requirement": "other",
    "termsOffered": [],
    "genEds": [],
    "prerequisiteText": ""
  },
  {
    "id": "CS 266",
    "title": "Community Innovation",
    "creditHours": 3,
    "maxCreditHours": 3,
    "requirement": "other",
    "termsOffered": [
      "Spring 2026",
      "Spring 2025"
    ],
    "genEds": [
      "Social & Beh Sci - Soc Sci",
      "Cultural Studies - Western"
    ],
    "prerequisiteText": ""
  },
  {
    "id": "CS 277",
    "title": "Algorithms and Data Structures for Data Science",
    "creditHours": 4,
    "maxCreditHours": 4,
    "requirement": "required",
    "termsOffered": [
      "Spring 2027",
      "Fall 2026",
      "Spring 2026",
      "Spring 2025"
    ],
    "genEds": [],
    "prerequisiteText": "STAT 207; one of MATH 220, MATH 221, MATH 234. CS 277 cannot be taken concurrently with CS 225."
  },
  {
    "id": "CS 296",
    "title": "Honors Course",
    "creditHours": 1,
    "maxCreditHours": 1,
    "requirement": "other",
    "termsOffered": [],
    "genEds": [],
    "prerequisiteText": "Concurrent registration in another 200-level computer science course (see Schedule)."
  },
  {
    "id": "CS 307",
    "title": "Modeling and Learning in Data Science",
    "creditHours": 4,
    "maxCreditHours": 4,
    "requirement": "required",
    "termsOffered": [
      "Spring 2027",
      "Fall 2026",
      "Spring 2026",
      "Fall 2025",
      "Spring 2025",
      "Fall 2024"
    ],
    "genEds": [],
    "prerequisiteText": "STAT 207; one of MATH 225, MATH 227, MATH 257, MATH 415, MATH 416, ASRM 406."
  },
  {
    "id": "CS 340",
    "title": "Introduction to Computer Systems",
    "creditHours": 3,
    "maxCreditHours": 3,
    "requirement": "required",
    "termsOffered": [
      "Spring 2027",
      "Fall 2026",
      "Spring 2026",
      "Fall 2025",
      "Spring 2025",
      "Fall 2024"
    ],
    "genEds": [],
    "prerequisiteText": "CS 128 and CS 225."
  },
  {
    "id": "CS 341",
    "title": "System Programming",
    "creditHours": 4,
    "maxCreditHours": 4,
    "requirement": "required",
    "termsOffered": [
      "Spring 2027",
      "Fall 2026",
      "Spring 2026",
      "Fall 2025",
      "Spring 2025",
      "Fall 2024"
    ],
    "genEds": [],
    "prerequisiteText": "CS 225 and CS 233."
  },
  {
    "id": "CS 357",
    "title": "Numerical Methods I",
    "creditHours": 3,
    "maxCreditHours": 3,
    "requirement": "required",
    "termsOffered": [
      "Spring 2027",
      "Fall 2026",
      "Spring 2026",
      "Fall 2025",
      "Spring 2025",
      "Fall 2024"
    ],
    "genEds": [],
    "prerequisiteText": "One of CS 101, CS 105, CS 124, CS 125 or ECE 220; MATH 241; one of MATH 225, MATH 227, MATH 257, MATH 415, MATH 416, ASRM 406 or BIOE 210."
  },
  {
    "id": "CS 361",
    "title": "Probability & Statistics for Computer Science",
    "creditHours": 3,
    "maxCreditHours": 3,
    "requirement": "required",
    "termsOffered": [
      "Spring 2027",
      "Fall 2026",
      "Spring 2026",
      "Fall 2025",
      "Spring 2025",
      "Fall 2024"
    ],
    "genEds": [],
    "prerequisiteText": "MATH 220 or MATH 221. Credit or concurrent registration in one of MATH 225, MATH 227, MATH 257, MATH 415, MATH 416, ASRM 406 or BIOE 210."
  },
  {
    "id": "CS 374",
    "title": "Introduction to Algorithms & Models of Computation",
    "creditHours": 4,
    "maxCreditHours": 4,
    "requirement": "required",
    "termsOffered": [
      "Spring 2027",
      "Fall 2026",
      "Summer 2026",
      "Spring 2026",
      "Fall 2025",
      "Summer 2025",
      "Spring 2025",
      "Fall 2024"
    ],
    "genEds": [],
    "prerequisiteText": "One of CS 173, MATH 213; CS 225."
  },
  {
    "id": "CS 397",
    "title": "Individual Study",
    "creditHours": 1,
    "maxCreditHours": 3,
    "requirement": "technical elective",
    "termsOffered": [
      "Spring 2027",
      "Fall 2026",
      "Summer 2026",
      "Spring 2026",
      "Fall 2025",
      "Spring 2025",
      "Fall 2024"
    ],
    "genEds": [],
    "prerequisiteText": "Consent of instructor."
  },
  {
    "id": "CS 398",
    "title": "Special Topics",
    "creditHours": 1,
    "maxCreditHours": 4,
    "requirement": "other",
    "termsOffered": [
      "Spring 2026"
    ],
    "genEds": [],
    "prerequisiteText": ""
  },
  {
    "id": "CS 400",
    "title": "Accelerated Fundamentals of Computing I",
    "creditHours": 3,
    "maxCreditHours": 3,
    "requirement": "other",
    "termsOffered": [
      "Fall 2026",
      "Fall 2025",
      "Fall 2024"
    ],
    "genEds": [],
    "prerequisiteText": "Current enrollment in the Illinois Computing Accelerator for Non-specialists (iCAN) program or consent of instructor. Restricted to post-baccalaureate students with a non-computing background."
  },
  {
    "id": "CS 401",
    "title": "Accelerated Fundamentals of Algorithms I",
    "creditHours": 3,
    "maxCreditHours": 3,
    "requirement": "other",
    "termsOffered": [
      "Fall 2026",
      "Fall 2025",
      "Fall 2024"
    ],
    "genEds": [],
    "prerequisiteText": "Current enrollment in the Illinois Computing Accelerator for Non-specialists (iCAN) program or consent of instructor. Restricted to post- baccalaureate students with a non-computing background."
  },
  {
    "id": "CS 402",
    "title": "Accelerated Fundamentals of Computing II",
    "creditHours": 3,
    "maxCreditHours": 3,
    "requirement": "other",
    "termsOffered": [
      "Spring 2027",
      "Spring 2026",
      "Spring 2025"
    ],
    "genEds": [],
    "prerequisiteText": "CS 400 or consent of instructor. Current enrollment in the Illinois Computing Accelerator for Non-specialists (iCAN) program or consent of instructor. Restricted to post-baccalaureate students with a non-computing background."
  },
  {
    "id": "CS 403",
    "title": "Accelerated Fundamentals of Algorithms II",
    "creditHours": 3,
    "maxCreditHours": 3,
    "requirement": "other",
    "termsOffered": [
      "Spring 2027",
      "Spring 2026",
      "Spring 2025"
    ],
    "genEds": [],
    "prerequisiteText": "CS 401 or consent of instructor. Current enrollment in the Illinois Computing Accelerator for Non-specialists (iCAN) program or consent of instructor. Restricted to post-baccalaureate students with a non-computing background."
  },
  {
    "id": "CS 407",
    "title": "Cryptography",
    "creditHours": 3,
    "maxCreditHours": 4,
    "requirement": "technical elective",
    "termsOffered": [
      "Spring 2027",
      "Fall 2026",
      "Spring 2026",
      "Fall 2025",
      "Spring 2025",
      "Fall 2024"
    ],
    "genEds": [],
    "prerequisiteText": ""
  },
  {
    "id": "CS 409",
    "title": "The Art of Web Programming",
    "creditHours": 3,
    "maxCreditHours": 3,
    "requirement": "technical elective",
    "termsOffered": [
      "Fall 2026",
      "Fall 2025",
      "Fall 2024"
    ],
    "genEds": [],
    "prerequisiteText": "CS 225."
  },
  {
    "id": "CS 410",
    "title": "Text Information Systems",
    "creditHours": 3,
    "maxCreditHours": 3,
    "requirement": "technical elective",
    "termsOffered": [
      "Spring 2027",
      "Fall 2026",
      "Spring 2026",
      "Fall 2025",
      "Spring 2025",
      "Fall 2024"
    ],
    "genEds": [],
    "prerequisiteText": "CS 225."
  },
  {
    "id": "CS 411",
    "title": "Database Systems",
    "creditHours": 3,
    "maxCreditHours": 3,
    "requirement": "technical elective",
    "termsOffered": [
      "Spring 2027",
      "Fall 2026",
      "Summer 2026",
      "Spring 2026",
      "Fall 2025",
      "Summer 2025",
      "Spring 2025",
      "Fall 2024"
    ],
    "genEds": [],
    "prerequisiteText": "CS 225."
  },
  {
    "id": "CS 412",
    "title": "Introduction to Data Mining",
    "creditHours": 3,
    "maxCreditHours": 3,
    "requirement": "technical elective",
    "termsOffered": [
      "Spring 2027",
      "Fall 2026",
      "Summer 2026",
      "Spring 2026",
      "Fall 2025",
      "Summer 2025",
      "Spring 2025",
      "Fall 2024"
    ],
    "genEds": [],
    "prerequisiteText": "CS 225."
  },
  {
    "id": "CS 413",
    "title": "Intro to Combinatorics",
    "creditHours": 3,
    "maxCreditHours": 4,
    "requirement": "technical elective",
    "termsOffered": [
      "Spring 2027",
      "Fall 2026",
      "Spring 2026",
      "Fall 2025",
      "Spring 2025",
      "Fall 2024"
    ],
    "genEds": [],
    "prerequisiteText": ""
  },
  {
    "id": "CS 414",
    "title": "Multimedia Systems",
    "creditHours": 3,
    "maxCreditHours": 3,
    "requirement": "technical elective",
    "termsOffered": [],
    "genEds": [],
    "prerequisiteText": "One of CS 240, CS 241, CS 340, CS 341 or ECE 391."
  },
  {
    "id": "CS 415",
    "title": "Game Development",
    "creditHours": 3,
    "maxCreditHours": 3,
    "requirement": "technical elective",
    "termsOffered": [
      "Spring 2027",
      "Fall 2026",
      "Spring 2026",
      "Fall 2025",
      "Spring 2025",
      "Fall 2024"
    ],
    "genEds": [],
    "prerequisiteText": "CS 225."
  },
  {
    "id": "CS 416",
    "title": "Data Visualization",
    "creditHours": 3,
    "maxCreditHours": 3,
    "requirement": "technical elective",
    "termsOffered": [
      "Summer 2026",
      "Summer 2025"
    ],
    "genEds": [],
    "prerequisiteText": "CS 225."
  },
  {
    "id": "CS 417",
    "title": "Introduction to Extended Reality",
    "creditHours": 3,
    "maxCreditHours": 3,
    "requirement": "technical elective",
    "termsOffered": [
      "Spring 2027",
      "Fall 2026",
      "Spring 2026"
    ],
    "genEds": [],
    "prerequisiteText": "CS 128; one of MATH 257, MATH 225, MATH 227, MATH 415, MATH 416, ASRM 406 or BIOE 210."
  },
  {
    "id": "CS 418",
    "title": "Interactive Computer Graphics",
    "creditHours": 3,
    "maxCreditHours": 3,
    "requirement": "technical elective",
    "termsOffered": [
      "Fall 2026",
      "Fall 2025",
      "Fall 2024"
    ],
    "genEds": [],
    "prerequisiteText": "CS 225; One of MATH 225, MATH 257, MATH 415, MATH 416, ASRM 406, or BIOE 210; MATH 241."
  },
  {
    "id": "CS 419",
    "title": "Production Computer Graphics",
    "creditHours": 3,
    "maxCreditHours": 3,
    "requirement": "technical elective",
    "termsOffered": [],
    "genEds": [],
    "prerequisiteText": "CS 418 or CSE 427."
  },
  {
    "id": "CS 420",
    "title": "Parallel Progrmg: Sci & Engrg",
    "creditHours": 3,
    "maxCreditHours": 3,
    "requirement": "technical elective",
    "termsOffered": [],
    "genEds": [],
    "prerequisiteText": "CS 225."
  },
  {
    "id": "CS 421",
    "title": "Programming Languages & Compilers",
    "creditHours": 3,
    "maxCreditHours": 3,
    "requirement": "required",
    "termsOffered": [
      "Spring 2027",
      "Fall 2026",
      "Summer 2026",
      "Spring 2026",
      "Fall 2025",
      "Summer 2025",
      "Spring 2025",
      "Fall 2024"
    ],
    "genEds": [],
    "prerequisiteText": "One of CS 233, CS 240, CS 340 or ECE 391; CS 374 or ECE 374; one of MATH 225, MATH 257, MATH 415, MATH 416, ASRM 406, or BIOE 210."
  },
  {
    "id": "CS 422",
    "title": "Programming Language Design",
    "creditHours": 3,
    "maxCreditHours": 3,
    "requirement": "technical elective",
    "termsOffered": [
      "Fall 2026",
      "Fall 2025",
      "Fall 2024"
    ],
    "genEds": [],
    "prerequisiteText": "CS 421."
  },
  {
    "id": "CS 423",
    "title": "Operating Systems Design",
    "creditHours": 3,
    "maxCreditHours": 3,
    "requirement": "technical elective",
    "termsOffered": [
      "Spring 2027",
      "Fall 2026",
      "Spring 2026",
      "Fall 2025",
      "Spring 2025",
      "Fall 2024"
    ],
    "genEds": [],
    "prerequisiteText": "One of CS 241, CS 341, or ECE 391."
  },
  {
    "id": "CS 424",
    "title": "Real-Time Systems",
    "creditHours": 3,
    "maxCreditHours": 3,
    "requirement": "technical elective",
    "termsOffered": [
      "Fall 2026",
      "Fall 2025",
      "Fall 2024"
    ],
    "genEds": [],
    "prerequisiteText": "One of CS 241, CS 341 or ECE 391."
  },
  {
    "id": "CS 425",
    "title": "Distributed Systems",
    "creditHours": 3,
    "maxCreditHours": 4,
    "requirement": "technical elective",
    "termsOffered": [
      "Spring 2027",
      "Fall 2026",
      "Spring 2026",
      "Fall 2025",
      "Spring 2025",
      "Fall 2024"
    ],
    "genEds": [],
    "prerequisiteText": "Credit or concurrent enrollment in one of CS 240, CS 241, CS 340, CS 341 or ECE 391."
  },
  {
    "id": "CS 426",
    "title": "Compiler Construction",
    "creditHours": 3,
    "maxCreditHours": 3,
    "requirement": "technical elective",
    "termsOffered": [
      "Fall 2026",
      "Fall 2025",
      "Fall 2024"
    ],
    "genEds": [],
    "prerequisiteText": "Credit or concurrent enrollment in CS 421."
  },
  {
    "id": "CS 427",
    "title": "Software Engineering I",
    "creditHours": 3,
    "maxCreditHours": 3,
    "requirement": "technical elective",
    "termsOffered": [
      "Spring 2027",
      "Fall 2026",
      "Spring 2026",
      "Fall 2025",
      "Spring 2025",
      "Fall 2024"
    ],
    "genEds": [],
    "prerequisiteText": "One of CS 222, CS 240, CS 241, CS 340, CS 341 or ECE 391."
  },
  {
    "id": "CS 428",
    "title": "Software Engineering II",
    "creditHours": 3,
    "maxCreditHours": 3,
    "requirement": "technical elective",
    "termsOffered": [],
    "genEds": [],
    "prerequisiteText": "CS 427 or CSE 426."
  },
  {
    "id": "CS 429",
    "title": "Software Engineering II, ACP",
    "creditHours": 3,
    "maxCreditHours": 3,
    "requirement": "technical elective",
    "termsOffered": [],
    "genEds": [],
    "prerequisiteText": "CS 427 or CSE 426."
  },
  {
    "id": "CS 431",
    "title": "Embedded Systems",
    "creditHours": 3,
    "maxCreditHours": 3,
    "requirement": "technical elective",
    "termsOffered": [
      "Spring 2027",
      "Spring 2026",
      "Spring 2025"
    ],
    "genEds": [],
    "prerequisiteText": "One of CS 241, CS 341 or ECE 391."
  },
  {
    "id": "CS 433",
    "title": "Computer System Organization",
    "creditHours": 3,
    "maxCreditHours": 3,
    "requirement": "technical elective",
    "termsOffered": [
      "Spring 2027",
      "Fall 2026",
      "Spring 2026",
      "Fall 2025",
      "Spring 2025",
      "Fall 2024"
    ],
    "genEds": [],
    "prerequisiteText": "CS 233."
  },
  {
    "id": "CS 434",
    "title": "Real World Algorithms for IoT and Data Science",
    "creditHours": 3,
    "maxCreditHours": 4,
    "requirement": "technical elective",
    "termsOffered": [
      "Spring 2027",
      "Fall 2026",
      "Spring 2026",
      "Spring 2025"
    ],
    "genEds": [],
    "prerequisiteText": ""
  },
  {
    "id": "CS 435",
    "title": "Cloud Networking",
    "creditHours": 3,
    "maxCreditHours": 3,
    "requirement": "technical elective",
    "termsOffered": [
      "Spring 2027",
      "Spring 2026",
      "Spring 2025"
    ],
    "genEds": [],
    "prerequisiteText": "One of CS 240, CS 241, CS 340, CS 341 or ECE 391."
  },
  {
    "id": "CS 436",
    "title": "Computer Networking Laboratory",
    "creditHours": 3,
    "maxCreditHours": 3,
    "requirement": "technical elective",
    "termsOffered": [],
    "genEds": [],
    "prerequisiteText": "One of CS 240, CS 241, CS 340, CS 341 or ECE 391."
  },
  {
    "id": "CS 437",
    "title": "Topics in Internet of Things",
    "creditHours": 3,
    "maxCreditHours": 3,
    "requirement": "technical elective",
    "termsOffered": [
      "Spring 2027",
      "Fall 2026",
      "Spring 2026",
      "Fall 2025",
      "Spring 2025",
      "Fall 2024"
    ],
    "genEds": [],
    "prerequisiteText": "CS 241 or CS 341. Additional prerequisites may be specified each term. See section information."
  },
  {
    "id": "CS 438",
    "title": "Computer Networks",
    "creditHours": 3,
    "maxCreditHours": 3,
    "requirement": "technical elective",
    "termsOffered": [
      "Spring 2027",
      "Fall 2026",
      "Spring 2026",
      "Fall 2025",
      "Spring 2025",
      "Fall 2024"
    ],
    "genEds": [],
    "prerequisiteText": "One of CS 241, CS 341 or ECE 391; strongly recommend one of CS 361, STAT 361, ECE 313, MATH 362, MATH 461, MATH 463 or STAT 400."
  },
  {
    "id": "CS 439",
    "title": "Wireless Networks",
    "creditHours": 3,
    "maxCreditHours": 4,
    "requirement": "technical elective",
    "termsOffered": [
      "Fall 2026",
      "Fall 2025",
      "Fall 2024"
    ],
    "genEds": [],
    "prerequisiteText": ""
  },
  {
    "id": "CS 440",
    "title": "Artificial Intelligence",
    "creditHours": 3,
    "maxCreditHours": 3,
    "requirement": "technical elective",
    "termsOffered": [
      "Spring 2027",
      "Fall 2026",
      "Summer 2026",
      "Spring 2026",
      "Fall 2025",
      "Spring 2025",
      "Fall 2024"
    ],
    "genEds": [],
    "prerequisiteText": "CS 225; one of CS 361, STAT 361, ECE 313, MATH 362, MATH 461, MATH 463, STAT 400 or BIOE 310."
  },
  {
    "id": "CS 441",
    "title": "Applied Machine Learning",
    "creditHours": 3,
    "maxCreditHours": 3,
    "requirement": "technical elective",
    "termsOffered": [
      "Spring 2027",
      "Fall 2026",
      "Spring 2026",
      "Fall 2025",
      "Spring 2025",
      "Fall 2024"
    ],
    "genEds": [],
    "prerequisiteText": "One of CS 225 or CS 277, and one of CS 361, STAT 361, ECE 313, BIOE 310, MATH 362, MATH 461, MATH 463 or STAT 400."
  },
  {
    "id": "CS 442",
    "title": "Trustworthy Machine Learning",
    "creditHours": 3,
    "maxCreditHours": 3,
    "requirement": "technical elective",
    "termsOffered": [
      "Spring 2027",
      "Spring 2026",
      "Spring 2025"
    ],
    "genEds": [],
    "prerequisiteText": "CS 225; one of CS 440, ECE 448, CS 441, CS 446 or ECE 449; one of MATH 225, MATH 257, MATH 415, MATH 416, ASRM 406 or BIOE 210."
  },
  {
    "id": "CS 443",
    "title": "Reinforcement Learning",
    "creditHours": 3,
    "maxCreditHours": 3,
    "requirement": "technical elective",
    "termsOffered": [
      "Spring 2027",
      "Spring 2026"
    ],
    "genEds": [],
    "prerequisiteText": "CS 225; MATH 241; one of MATH 225, MATH 257, MATH 415, MATH 416, ASRM 406 or BIOE 210; one of CS 361, STAT 361, ECE 313, MATH 362, MATH 461, MATH 463 or STAT 400."
  },
  {
    "id": "CS 444",
    "title": "Deep Learning for Computer Vision",
    "creditHours": 3,
    "maxCreditHours": 3,
    "requirement": "technical elective",
    "termsOffered": [
      "Spring 2027",
      "Fall 2026",
      "Spring 2026",
      "Fall 2025",
      "Spring 2025",
      "Fall 2024"
    ],
    "genEds": [],
    "prerequisiteText": "MATH 241; one of MATH 225, MATH 257, MATH 415, MATH 416, ASRM 406, or BIOE 210; CS 225; one of CS 361, STAT 361, ECE 313, MATH 362, MATH 461, MATH 463 or STAT 400. No previous exposure to machine learning is required."
  },
  {
    "id": "CS 445",
    "title": "Computational Photography",
    "creditHours": 3,
    "maxCreditHours": 3,
    "requirement": "technical elective",
    "termsOffered": [
      "Spring 2027",
      "Fall 2026",
      "Spring 2026",
      "Fall 2025",
      "Spring 2025",
      "Fall 2024"
    ],
    "genEds": [],
    "prerequisiteText": "CS 225, MATH 225, and MATH 231."
  },
  {
    "id": "CS 446",
    "title": "Machine Learning",
    "creditHours": 3,
    "maxCreditHours": 3,
    "requirement": "technical elective",
    "termsOffered": [
      "Spring 2027",
      "Fall 2026",
      "Spring 2026",
      "Fall 2025",
      "Spring 2025",
      "Fall 2024"
    ],
    "genEds": [],
    "prerequisiteText": "CS 225; One of MATH 225, MATH 257, MATH 415, MATH 416, ASRM 406 or BIOE 210; one of CS 361, STAT 361, ECE 313, MATH 362, MATH 461, MATH 463, STAT 400 or BIOE 310."
  },
  {
    "id": "CS 447",
    "title": "Natural Language Processing",
    "creditHours": 3,
    "maxCreditHours": 3,
    "requirement": "technical elective",
    "termsOffered": [
      "Spring 2027",
      "Fall 2026",
      "Spring 2026",
      "Fall 2025",
      "Spring 2025",
      "Fall 2024"
    ],
    "genEds": [],
    "prerequisiteText": "One of CS 173 or MATH 213; CS 225; CS 374 or ECE 374; one of CS 361, STAT 361, ECE 313, MATH 362, MATH 461, MATH 463, STAT 400 or BIOE 310; one of MATH 225, MATH 257, MATH 415, MATH 416, ASRM 406 or BIOE 210."
  },
  {
    "id": "CS 448",
    "title": "Audio Computing Laboratory",
    "creditHours": 3,
    "maxCreditHours": 3,
    "requirement": "technical elective",
    "termsOffered": [
      "Spring 2027",
      "Spring 2026",
      "Spring 2025"
    ],
    "genEds": [],
    "prerequisiteText": "One of CS 240, CS 241, CS 340, CS 341, or ECE 391; one of MATH 225, MATH 257, MATH 415, MATH 416, ASRM 406, or BIOE 210."
  },
  {
    "id": "CS 450",
    "title": "Numerical Analysis",
    "creditHours": 3,
    "maxCreditHours": 3,
    "requirement": "required",
    "termsOffered": [
      "Spring 2027",
      "Fall 2026",
      "Spring 2026",
      "Fall 2025",
      "Spring 2025",
      "Fall 2024"
    ],
    "genEds": [],
    "prerequisiteText": "One of CS 101, CS 124 or CS 125; one of CS 357, MATH 257, MATH 357, MATH 415, or MATH 416; MATH 285."
  },
  {
    "id": "CS 452",
    "title": "Topics in Robotics",
    "creditHours": 3,
    "maxCreditHours": 3,
    "requirement": "technical elective",
    "termsOffered": [],
    "genEds": [],
    "prerequisiteText": "(CS 128 or ECE 220) and CS 225 and (CS 241 or CS 341 or ECE 391)."
  },
  {
    "id": "CS 460",
    "title": "Security Laboratory",
    "creditHours": 3,
    "maxCreditHours": 3,
    "requirement": "technical elective",
    "termsOffered": [
      "Fall 2026",
      "Fall 2025",
      "Fall 2024"
    ],
    "genEds": [],
    "prerequisiteText": "CS 461 or ECE 422 or a combination of CS 463 and one of CS 340, CS 341 or ECE 391."
  },
  {
    "id": "CS 461",
    "title": "Computer Security I",
    "creditHours": 4,
    "maxCreditHours": 4,
    "requirement": "technical elective",
    "termsOffered": [
      "Spring 2027",
      "Fall 2026",
      "Spring 2026",
      "Fall 2025",
      "Spring 2025",
      "Fall 2024"
    ],
    "genEds": [],
    "prerequisiteText": "One of CS 241, CS 341 or ECE 391, or a combination of CS 233 and CS 340."
  },
  {
    "id": "CS 462",
    "title": "Issues of Law and Policy in Computer Science",
    "creditHours": 3,
    "maxCreditHours": 3,
    "requirement": "technical elective",
    "termsOffered": [
      "Spring 2027",
      "Fall 2026",
      "Spring 2026"
    ],
    "genEds": [],
    "prerequisiteText": "CS 340 or CS 341 or ECE 391."
  },
  {
    "id": "CS 463",
    "title": "Computer Security II",
    "creditHours": 3,
    "maxCreditHours": 3,
    "requirement": "technical elective",
    "termsOffered": [
      "Spring 2027",
      "Fall 2026",
      "Spring 2026",
      "Fall 2025",
      "Spring 2025",
      "Fall 2024"
    ],
    "genEds": [],
    "prerequisiteText": "CS 225 and one of CS 361, STAT 361, ECE 313, MATH 362, MATH 461, MATH 463 or STAT 400. CS 441 completion is recommended."
  },
  {
    "id": "CS 464",
    "title": "Topics in Societal and Ethical Impacts of Computer Technology",
    "creditHours": 3,
    "maxCreditHours": 3,
    "requirement": "technical elective",
    "termsOffered": [
      "Spring 2027",
      "Fall 2026",
      "Spring 2026",
      "Fall 2025",
      "Spring 2025"
    ],
    "genEds": [],
    "prerequisiteText": "CS 225. One of CS 210 or CS 211 or ECE 316 or PHIL 316. One of CS 361 or STAT 400 or STAT 200. Restricted to students with senior standing."
  },
  {
    "id": "CS 465",
    "title": "User Interface Design",
    "creditHours": 4,
    "maxCreditHours": 4,
    "requirement": "technical elective",
    "termsOffered": [
      "Spring 2027",
      "Fall 2025",
      "Fall 2024"
    ],
    "genEds": [],
    "prerequisiteText": "CS 225."
  },
  {
    "id": "CS 466",
    "title": "Introduction to Bioinformatics",
    "creditHours": 3,
    "maxCreditHours": 3,
    "requirement": "technical elective",
    "termsOffered": [
      "Spring 2027",
      "Fall 2026",
      "Spring 2026",
      "Fall 2024"
    ],
    "genEds": [],
    "prerequisiteText": "CS 225."
  },
  {
    "id": "CS 467",
    "title": "Social Visualization",
    "creditHours": 3,
    "maxCreditHours": 3,
    "requirement": "technical elective",
    "termsOffered": [],
    "genEds": [],
    "prerequisiteText": "CS 225."
  },
  {
    "id": "CS 468",
    "title": "Tech and Advertising Campaigns",
    "creditHours": 3,
    "maxCreditHours": 3,
    "requirement": "technical elective",
    "termsOffered": [
      "Spring 2027",
      "Fall 2026",
      "Spring 2026",
      "Fall 2025",
      "Spring 2025",
      "Fall 2024"
    ],
    "genEds": [],
    "prerequisiteText": ""
  },
  {
    "id": "CS 469",
    "title": "Computational Advertising Infrastructure",
    "creditHours": 3,
    "maxCreditHours": 3,
    "requirement": "technical elective",
    "termsOffered": [],
    "genEds": [],
    "prerequisiteText": "CS 173; CS 225; one of MATH 225, MATH 257, MATH 415, MATH 416, ASRM 406 or BIOE 210; one of CS 361, STAT 361, ECE 313, MATH 362, MATH 461, MATH 463 or STAT 400."
  },
  {
    "id": "CS 470",
    "title": "Social and Information Networks",
    "creditHours": 3,
    "maxCreditHours": 3,
    "requirement": "technical elective",
    "termsOffered": [
      "Fall 2026",
      "Fall 2025",
      "Fall 2024"
    ],
    "genEds": [],
    "prerequisiteText": "CS 225; CS 173; one of CS 361, STAT 361, ECE 313, MATH 362, MATH 461, MATH 463 or STAT 400; one of MATH 225, MATH 257, MATH 415, MATH 416, ASRM 406, or BIOE 210."
  },
  {
    "id": "CS 473",
    "title": "Algorithms",
    "creditHours": 4,
    "maxCreditHours": 4,
    "requirement": "technical elective",
    "termsOffered": [
      "Spring 2027",
      "Fall 2026",
      "Spring 2026",
      "Fall 2025",
      "Spring 2025",
      "Fall 2024"
    ],
    "genEds": [],
    "prerequisiteText": "CS 374 or ECE 374, and one of CS 361, STAT 361, ECE 313, MATH 362, MATH 461, MATH 463 or STAT 400."
  },
  {
    "id": "CS 474",
    "title": "Logic in Computer Science",
    "creditHours": 3,
    "maxCreditHours": 3,
    "requirement": "technical elective",
    "termsOffered": [
      "Spring 2027",
      "Spring 2026",
      "Fall 2024"
    ],
    "genEds": [],
    "prerequisiteText": "CS 173; CS 225; one of CS 374 or ECE 374."
  },
  {
    "id": "CS 475",
    "title": "Formal Models of Computation",
    "creditHours": 3,
    "maxCreditHours": 3,
    "requirement": "technical elective",
    "termsOffered": [
      "Fall 2026",
      "Fall 2025",
      "Fall 2024"
    ],
    "genEds": [],
    "prerequisiteText": "CS 374 or ECE 374."
  },
  {
    "id": "CS 476",
    "title": "Program Verification",
    "creditHours": 3,
    "maxCreditHours": 3,
    "requirement": "technical elective",
    "termsOffered": [
      "Spring 2027",
      "Spring 2026",
      "Fall 2024"
    ],
    "genEds": [],
    "prerequisiteText": "CS 225; one of CS 374, ECE 374 or MATH 414."
  },
  {
    "id": "CS 477",
    "title": "Formal Software Development Methods",
    "creditHours": 3,
    "maxCreditHours": 3,
    "requirement": "technical elective",
    "termsOffered": [
      "Spring 2027",
      "Fall 2026",
      "Spring 2026",
      "Spring 2025"
    ],
    "genEds": [],
    "prerequisiteText": "CS 225; one of CS 374, ECE 374 or MATH 414."
  },
  {
    "id": "CS 478",
    "title": "Quantum Algorithms and Complexity",
    "creditHours": 3,
    "maxCreditHours": 3,
    "requirement": "technical elective",
    "termsOffered": [
      "Spring 2027"
    ],
    "genEds": [],
    "prerequisiteText": "CS 225; one of MATH 257, MATH 415 or MATH 416; one of CS 361, STAT 361, ECE 313, MATH 362, MATH 461, MATH 463, STAT 400, PHYS 214 or PHYS 486. Credit or concurrent enrollment in CS 374/ECE 374 is encouraged."
  },
  {
    "id": "CS 481",
    "title": "Advanced Topics in Stochastic Processes & Applications",
    "creditHours": 3,
    "maxCreditHours": 4,
    "requirement": "technical elective",
    "termsOffered": [
      "Spring 2027",
      "Fall 2026",
      "Fall 2025",
      "Fall 2024"
    ],
    "genEds": [],
    "prerequisiteText": ""
  },
  {
    "id": "CS 482",
    "title": "Simulation",
    "creditHours": 3,
    "maxCreditHours": 4,
    "requirement": "technical elective",
    "termsOffered": [
      "Spring 2027",
      "Spring 2026",
      "Spring 2025"
    ],
    "genEds": [],
    "prerequisiteText": ""
  },
  {
    "id": "CS 483",
    "title": "Applied Parallel Programming",
    "creditHours": 4,
    "maxCreditHours": 4,
    "requirement": "technical elective",
    "termsOffered": [
      "Spring 2027",
      "Fall 2026",
      "Summer 2026",
      "Spring 2026",
      "Fall 2025",
      "Summer 2025",
      "Spring 2025",
      "Fall 2024"
    ],
    "genEds": [],
    "prerequisiteText": ""
  },
  {
    "id": "CS 484",
    "title": "Parallel Programming",
    "creditHours": 3,
    "maxCreditHours": 3,
    "requirement": "technical elective",
    "termsOffered": [
      "Fall 2026",
      "Fall 2025",
      "Fall 2024"
    ],
    "genEds": [],
    "prerequisiteText": "CS 241 or CS 341."
  },
  {
    "id": "CS 491",
    "title": "Seminar",
    "creditHours": 0,
    "maxCreditHours": 4,
    "requirement": "other",
    "termsOffered": [
      "Spring 2027",
      "Fall 2026",
      "Spring 2026",
      "Fall 2025",
      "Spring 2025",
      "Fall 2024"
    ],
    "genEds": [],
    "prerequisiteText": "As specified for each topic offering, see Class Schedule or departmental course description."
  },
  {
    "id": "CS 492",
    "title": "Senior Project I",
    "creditHours": 3,
    "maxCreditHours": 3,
    "requirement": "technical elective",
    "termsOffered": [
      "Fall 2026",
      "Fall 2025",
      "Fall 2024"
    ],
    "genEds": [],
    "prerequisiteText": "For Computer Science majors with senior standing."
  },
  {
    "id": "CS 493",
    "title": "Senior Project II, ACP",
    "creditHours": 3,
    "maxCreditHours": 3,
    "requirement": "technical elective",
    "termsOffered": [
      "Spring 2027",
      "Spring 2026",
      "Spring 2025"
    ],
    "genEds": [
      "Advanced Composition"
    ],
    "prerequisiteText": "CS 492."
  },
  {
    "id": "CS 494",
    "title": "Senior Project II",
    "creditHours": 3,
    "maxCreditHours": 3,
    "requirement": "technical elective",
    "termsOffered": [
      "Spring 2027",
      "Spring 2026",
      "Spring 2025"
    ],
    "genEds": [],
    "prerequisiteText": "CS 492."
  },
  {
    "id": "CS 497",
    "title": "CS Team Project",
    "creditHours": 1,
    "maxCreditHours": 3,
    "requirement": "technical elective",
    "termsOffered": [
      "Spring 2027",
      "Fall 2026",
      "Spring 2026",
      "Fall 2025",
      "Spring 2025",
      "Fall 2024"
    ],
    "genEds": [],
    "prerequisiteText": "For majors only; junior or senior standing required."
  },
  {
    "id": "CS 498",
    "title": "Special Topics",
    "creditHours": 1,
    "maxCreditHours": 4,
    "requirement": "technical elective",
    "termsOffered": [
      "Spring 2027",
      "Fall 2026",
      "Spring 2026",
      "Fall 2025",
      "Spring 2025",
      "Fall 2024"
    ],
    "genEds": [],
    "prerequisiteText": ""
  },
  {
    "id": "CS 499",
    "title": "Senior Thesis",
    "creditHours": 3,
    "maxCreditHours": 3,
    "requirement": "technical elective",
    "termsOffered": [
      "Spring 2027",
      "Fall 2026",
      "Summer 2026",
      "Spring 2026",
      "Fall 2025",
      "Spring 2025",
      "Fall 2024"
    ],
    "genEds": [
      "Advanced Composition"
    ],
    "prerequisiteText": "Consent of instructor."
  },
  {
    "id": "ECE 110",
    "title": "Introduction to Electronics",
    "creditHours": 3,
    "maxCreditHours": 3,
    "requirement": "required",
    "termsOffered": [
      "Spring 2027",
      "Fall 2026",
      "Spring 2026",
      "Fall 2025",
      "Spring 2025",
      "Fall 2024"
    ],
    "genEds": [],
    "prerequisiteText": ""
  },
  {
    "id": "ECE 120",
    "title": "Introduction to Computing",
    "creditHours": 4,
    "maxCreditHours": 4,
    "requirement": "required",
    "termsOffered": [
      "Spring 2027",
      "Fall 2026",
      "Summer 2026",
      "Spring 2026",
      "Fall 2025",
      "Summer 2025",
      "Spring 2025",
      "Fall 2024"
    ],
    "genEds": [],
    "prerequisiteText": "Restricted to Computer Engineering or Electrical Engineering majors or transfer students with ECE Department consent."
  },
  {
    "id": "ECE 205",
    "title": "Electrical and Electronic Circuits",
    "creditHours": 3,
    "maxCreditHours": 3,
    "requirement": "required",
    "termsOffered": [
      "Spring 2027",
      "Fall 2026",
      "Summer 2026",
      "Spring 2026",
      "Fall 2025",
      "Summer 2025",
      "Spring 2025",
      "Fall 2024"
    ],
    "genEds": [],
    "prerequisiteText": "PHYS 212."
  },
  {
    "id": "ECE 206",
    "title": "Electrical and Electronic Circuits Lab",
    "creditHours": 1,
    "maxCreditHours": 1,
    "requirement": "required",
    "termsOffered": [
      "Spring 2027",
      "Fall 2026",
      "Summer 2026",
      "Spring 2026",
      "Fall 2025",
      "Summer 2025",
      "Spring 2025",
      "Fall 2024"
    ],
    "genEds": [],
    "prerequisiteText": "ECE 205."
  },
  {
    "id": "ECE 210",
    "title": "Analog Signal Processing",
    "creditHours": 4,
    "maxCreditHours": 4,
    "requirement": "required",
    "termsOffered": [
      "Spring 2027",
      "Fall 2026",
      "Summer 2026",
      "Spring 2026",
      "Fall 2025",
      "Summer 2025",
      "Spring 2025",
      "Fall 2024"
    ],
    "genEds": [],
    "prerequisiteText": "ECE 110 and PHYS 212; credit or concurrent registration in MATH 285 or MATH 286."
  },
  {
    "id": "ECE 211",
    "title": "Analog Circuits & Systems",
    "creditHours": 2,
    "maxCreditHours": 2,
    "requirement": "required",
    "termsOffered": [
      "Spring 2027",
      "Fall 2026",
      "Summer 2026",
      "Spring 2026",
      "Fall 2025",
      "Summer 2025",
      "Spring 2025",
      "Fall 2024"
    ],
    "genEds": [],
    "prerequisiteText": "ECE 110 and PHYS 212; credit or concurrent registration in MATH 285 or MATH 286."
  },
  {
    "id": "ECE 220",
    "title": "Computer Systems & Programming",
    "creditHours": 4,
    "maxCreditHours": 4,
    "requirement": "required",
    "termsOffered": [
      "Spring 2027",
      "Fall 2026",
      "Summer 2026",
      "Spring 2026",
      "Fall 2025",
      "Summer 2025",
      "Spring 2025",
      "Fall 2024"
    ],
    "genEds": [],
    "prerequisiteText": "ECE 120. Restricted to Computer Engineering or Electrical Engineering majors or transfer students with ECE Department consent."
  },
  {
    "id": "ECE 313",
    "title": "Probability with Engrg Applic",
    "creditHours": 3,
    "maxCreditHours": 3,
    "requirement": "required",
    "termsOffered": [
      "Spring 2027",
      "Fall 2026",
      "Summer 2026",
      "Spring 2026",
      "Fall 2025",
      "Summer 2025",
      "Spring 2025",
      "Fall 2024"
    ],
    "genEds": [],
    "prerequisiteText": "MATH 257 or MATH 416."
  },
  {
    "id": "ECE 316",
    "title": "Ethics and Engineering",
    "creditHours": 3,
    "maxCreditHours": 3,
    "requirement": "required",
    "termsOffered": [
      "Spring 2027",
      "Fall 2026",
      "Spring 2026",
      "Fall 2025",
      "Spring 2025",
      "Fall 2024"
    ],
    "genEds": [
      "Humanities – Hist & Phil",
      "Advanced Composition"
    ],
    "prerequisiteText": "RHET 105."
  },
  {
    "id": "ECE 329",
    "title": "Fields and Waves I",
    "creditHours": 3,
    "maxCreditHours": 3,
    "requirement": "required",
    "termsOffered": [
      "Spring 2027",
      "Fall 2026",
      "Summer 2026",
      "Spring 2026",
      "Fall 2025",
      "Summer 2025",
      "Spring 2025",
      "Fall 2024"
    ],
    "genEds": [],
    "prerequisiteText": "ECE 210."
  },
  {
    "id": "ECE 340",
    "title": "Semiconductor Electronics",
    "creditHours": 3,
    "maxCreditHours": 3,
    "requirement": "required",
    "termsOffered": [
      "Spring 2027",
      "Fall 2026",
      "Summer 2026",
      "Spring 2026",
      "Fall 2025",
      "Summer 2025",
      "Spring 2025",
      "Fall 2024"
    ],
    "genEds": [],
    "prerequisiteText": "(ECE 205 or ECE 210) and PHYS 214."
  },
  {
    "id": "ECE 374",
    "title": "Introduction to Algorithms & Models of Computation",
    "creditHours": 4,
    "maxCreditHours": 4,
    "requirement": "required",
    "termsOffered": [
      "Spring 2027",
      "Fall 2026",
      "Summer 2026",
      "Spring 2026",
      "Fall 2025",
      "Summer 2025",
      "Spring 2025",
      "Fall 2024"
    ],
    "genEds": [],
    "prerequisiteText": ""
  },
  {
    "id": "ECE 385",
    "title": "Digital Systems Laboratory",
    "creditHours": 3,
    "maxCreditHours": 3,
    "requirement": "required",
    "termsOffered": [
      "Spring 2027",
      "Fall 2026",
      "Summer 2026",
      "Spring 2026",
      "Fall 2025",
      "Summer 2025",
      "Spring 2025",
      "Fall 2024"
    ],
    "genEds": [],
    "prerequisiteText": "ECE 110 and ECE 220."
  },
  {
    "id": "ECE 391",
    "title": "Computer Systems Engineering",
    "creditHours": 4,
    "maxCreditHours": 4,
    "requirement": "required",
    "termsOffered": [
      "Spring 2027",
      "Fall 2026",
      "Summer 2026",
      "Spring 2026",
      "Fall 2025",
      "Summer 2025",
      "Spring 2025",
      "Fall 2024"
    ],
    "genEds": [],
    "prerequisiteText": "ECE 220 or CS 233."
  },
  {
    "id": "ECE 410",
    "title": "Neural Circuits and Systems",
    "creditHours": 3,
    "maxCreditHours": 4,
    "requirement": "required",
    "termsOffered": [
      "Fall 2026",
      "Fall 2025"
    ],
    "genEds": [],
    "prerequisiteText": ""
  },
  {
    "id": "ECE 421",
    "title": "Neural Interface Engineering",
    "creditHours": 3,
    "maxCreditHours": 3,
    "requirement": "required",
    "termsOffered": [
      "Spring 2027",
      "Spring 2025"
    ],
    "genEds": [],
    "prerequisiteText": "ECE 210 or BIOE 205 and NE 330, or instructor approval."
  },
  {
    "id": "ECE 445",
    "title": "Senior Design Project Lab",
    "creditHours": 4,
    "maxCreditHours": 4,
    "requirement": "required",
    "termsOffered": [
      "Spring 2027",
      "Fall 2026",
      "Spring 2026",
      "Fall 2025",
      "Spring 2025",
      "Fall 2024"
    ],
    "genEds": [
      "Advanced Composition"
    ],
    "prerequisiteText": "ECE 385. Restricted to Senior standing."
  },
  {
    "id": "ECE 496",
    "title": "Senior Research Project",
    "creditHours": 2,
    "maxCreditHours": 2,
    "requirement": "required",
    "termsOffered": [
      "Spring 2027",
      "Fall 2026",
      "Summer 2026",
      "Spring 2026",
      "Fall 2025",
      "Summer 2025",
      "Spring 2025",
      "Fall 2024"
    ],
    "genEds": [
      "Advanced Composition"
    ],
    "prerequisiteText": "RHET 105; consent of instructor."
  },
  {
    "id": "ECE 499",
    "title": "Senior Thesis",
    "creditHours": 2,
    "maxCreditHours": 2,
    "requirement": "required",
    "termsOffered": [
      "Spring 2027",
      "Fall 2026",
      "Summer 2026",
      "Spring 2026",
      "Fall 2025",
      "Summer 2025",
      "Spring 2025",
      "Fall 2024"
    ],
    "genEds": [
      "Advanced Composition"
    ],
    "prerequisiteText": "ECE 496 and consent of instructor."
  },
  {
    "id": "ECON 102",
    "title": "Microeconomic Principles",
    "creditHours": 3,
    "maxCreditHours": 3,
    "requirement": "required",
    "termsOffered": [
      "Spring 2027",
      "Winter 2027",
      "Fall 2026",
      "Summer 2026",
      "Spring 2026",
      "Winter 2026",
      "Fall 2025",
      "Summer 2025",
      "Spring 2025",
      "Winter 2025",
      "Fall 2024"
    ],
    "genEds": [
      "Social & Beh Sci - Soc Sci"
    ],
    "prerequisiteText": ""
  },
  {
    "id": "ECON 103",
    "title": "Macroeconomic Principles",
    "creditHours": 3,
    "maxCreditHours": 3,
    "requirement": "required",
    "termsOffered": [
      "Spring 2027",
      "Winter 2027",
      "Fall 2026",
      "Summer 2026",
      "Spring 2026",
      "Winter 2026",
      "Fall 2025",
      "Summer 2025",
      "Spring 2025",
      "Winter 2025",
      "Fall 2024"
    ],
    "genEds": [
      "Social & Beh Sci - Soc Sci"
    ],
    "prerequisiteText": ""
  },
  {
    "id": "ENG 100",
    "title": "Grainger Engineering Orientation Seminar",
    "creditHours": 1,
    "maxCreditHours": 1,
    "requirement": "required",
    "termsOffered": [
      "Spring 2027",
      "Fall 2026",
      "Spring 2026",
      "Fall 2025",
      "Spring 2025",
      "Fall 2024"
    ],
    "genEds": [],
    "prerequisiteText": ""
  },
  {
    "id": "IE 300",
    "title": "Analysis of Data",
    "creditHours": 3,
    "maxCreditHours": 3,
    "requirement": "required",
    "termsOffered": [
      "Spring 2027",
      "Fall 2026",
      "Spring 2026",
      "Fall 2025",
      "Spring 2025",
      "Fall 2024"
    ],
    "genEds": [],
    "prerequisiteText": "MATH 241."
  },
  {
    "id": "IE 310",
    "title": "Deterministic Models in Optimization",
    "creditHours": 3,
    "maxCreditHours": 3,
    "requirement": "required",
    "termsOffered": [
      "Spring 2027",
      "Fall 2026",
      "Spring 2026",
      "Fall 2025",
      "Spring 2025",
      "Fall 2024"
    ],
    "genEds": [],
    "prerequisiteText": "Credit or concurrent registration in MATH 257 or MATH 415."
  },
  {
    "id": "IE 360",
    "title": "Facilities Planning and Design",
    "creditHours": 3,
    "maxCreditHours": 3,
    "requirement": "required",
    "termsOffered": [
      "Fall 2026",
      "Fall 2025",
      "Fall 2024"
    ],
    "genEds": [],
    "prerequisiteText": "Credit or concurrent enrollment in IE 310."
  },
  {
    "id": "IE 361",
    "title": "Production Planning & Control",
    "creditHours": 3,
    "maxCreditHours": 3,
    "requirement": "required",
    "termsOffered": [
      "Spring 2027",
      "Spring 2026",
      "Spring 2025"
    ],
    "genEds": [],
    "prerequisiteText": "IE 310."
  },
  {
    "id": "IE 370",
    "title": "Stochastic Processes and Applications",
    "creditHours": 3,
    "maxCreditHours": 3,
    "requirement": "required",
    "termsOffered": [
      "Spring 2027",
      "Spring 2026",
      "Spring 2025"
    ],
    "genEds": [],
    "prerequisiteText": "IE 300 and IE 310."
  },
  {
    "id": "IE 371",
    "title": "Simulation Modeling with Applications for Industrial Engineering",
    "creditHours": 3,
    "maxCreditHours": 3,
    "requirement": "required",
    "termsOffered": [
      "Spring 2027",
      "Spring 2026",
      "Spring 2025"
    ],
    "genEds": [],
    "prerequisiteText": "IE 300 and IE 310. Restricted to Junior and Senior Standing."
  },
  {
    "id": "IE 400",
    "title": "Design & Anlys of Experiments",
    "creditHours": 3,
    "maxCreditHours": 3,
    "requirement": "required",
    "termsOffered": [
      "Fall 2026",
      "Fall 2025",
      "Fall 2024"
    ],
    "genEds": [],
    "prerequisiteText": "IE 300."
  },
  {
    "id": "IS 467",
    "title": "Ethics and Policy for Data Science",
    "creditHours": 3,
    "maxCreditHours": 3,
    "requirement": "required",
    "termsOffered": [
      "Spring 2027",
      "Fall 2026",
      "Summer 2026",
      "Spring 2026",
      "Fall 2025",
      "Summer 2025",
      "Spring 2025",
      "Fall 2024"
    ],
    "genEds": [
      null
    ],
    "prerequisiteText": ""
  },
  {
    "id": "IS 477",
    "title": "Data Management, Curation & Reproducibility",
    "creditHours": 3,
    "maxCreditHours": 3,
    "requirement": "required",
    "termsOffered": [
      "Spring 2027",
      "Fall 2026",
      "Spring 2026",
      "Fall 2025",
      "Spring 2025",
      "Fall 2024"
    ],
    "genEds": [
      null
    ],
    "prerequisiteText": "IS 205 or STAT 207 or equivalent programming experience."
  },
  {
    "id": "MATH 101",
    "title": "Thinking Mathematically",
    "creditHours": 3,
    "maxCreditHours": 3,
    "requirement": "other",
    "termsOffered": [
      "Fall 2026",
      "Fall 2025",
      "Fall 2024"
    ],
    "genEds": [],
    "prerequisiteText": "Three years of high school mathematics. Undergraduates only."
  },
  {
    "id": "MATH 103",
    "title": "Theory of Arithmetic",
    "creditHours": 4,
    "maxCreditHours": 4,
    "requirement": "other",
    "termsOffered": [
      "Spring 2027",
      "Fall 2026",
      "Spring 2026",
      "Fall 2025",
      "Spring 2025",
      "Fall 2024"
    ],
    "genEds": [
      "Quantitative Reasoning I"
    ],
    "prerequisiteText": "MATH 112 (formerly MATH 012) or equivalent."
  },
  {
    "id": "MATH 112",
    "title": "Algebra",
    "creditHours": 3,
    "maxCreditHours": 3,
    "requirement": "other",
    "termsOffered": [
      "Spring 2027",
      "Fall 2026",
      "Spring 2026",
      "Fall 2025",
      "Summer 2025",
      "Spring 2025",
      "Fall 2024"
    ],
    "genEds": [],
    "prerequisiteText": "1.5 units of high school algebra and 1 unit of high school geometry."
  },
  {
    "id": "MATH 115",
    "title": "Preparation for Calculus",
    "creditHours": 3,
    "maxCreditHours": 3,
    "requirement": "other",
    "termsOffered": [
      "Spring 2027",
      "Fall 2026",
      "Spring 2026",
      "Fall 2025",
      "Summer 2025",
      "Spring 2025",
      "Fall 2024"
    ],
    "genEds": [
      "Quantitative Reasoning I"
    ],
    "prerequisiteText": "MATH 112."
  },
  {
    "id": "MATH 117",
    "title": "Elementary Mathematics",
    "creditHours": 4,
    "maxCreditHours": 4,
    "requirement": "other",
    "termsOffered": [
      "Spring 2027",
      "Spring 2026",
      "Spring 2025"
    ],
    "genEds": [
      "Quantitative Reasoning I"
    ],
    "prerequisiteText": "MATH 112 or equivalent."
  },
  {
    "id": "MATH 119",
    "title": "Ideas in Geometry",
    "creditHours": 3,
    "maxCreditHours": 3,
    "requirement": "other",
    "termsOffered": [
      "Fall 2026",
      "Fall 2025",
      "Fall 2024"
    ],
    "genEds": [
      "Quantitative Reasoning I"
    ],
    "prerequisiteText": "Two units of high school algebra; one unit of high school geometry; or equivalent."
  },
  {
    "id": "MATH 124",
    "title": "Finite Mathematics",
    "creditHours": 3,
    "maxCreditHours": 3,
    "requirement": "other",
    "termsOffered": [
      "Fall 2025",
      "Spring 2025",
      "Fall 2024"
    ],
    "genEds": [
      "Quantitative Reasoning I"
    ],
    "prerequisiteText": "MATH 112 (formerly MATH 012) or an adequate ALEKS score."
  },
  {
    "id": "MATH 181",
    "title": "A Mathematical World",
    "creditHours": 3,
    "maxCreditHours": 3,
    "requirement": "other",
    "termsOffered": [
      "Spring 2027",
      "Spring 2026",
      "Spring 2025"
    ],
    "genEds": [
      "Quantitative Reasoning I"
    ],
    "prerequisiteText": "Three years of high school mathematics, including two years of algebra and one year of geometry."
  },
  {
    "id": "MATH 199",
    "title": "Undergraduate Open Seminar",
    "creditHours": 1,
    "maxCreditHours": 5,
    "requirement": "other",
    "termsOffered": [
      "Spring 2027",
      "Fall 2026",
      "Summer 2026",
      "Spring 2026",
      "Fall 2025",
      "Summer 2025",
      "Spring 2025",
      "Fall 2024"
    ],
    "genEds": [],
    "prerequisiteText": ""
  },
  {
    "id": "MATH 213",
    "title": "Basic Discrete Mathematics",
    "creditHours": 3,
    "maxCreditHours": 3,
    "requirement": "other",
    "termsOffered": [
      "Spring 2027",
      "Fall 2026",
      "Spring 2026",
      "Fall 2025",
      "Spring 2025",
      "Fall 2024"
    ],
    "genEds": [
      "Quantitative Reasoning II"
    ],
    "prerequisiteText": "MATH 220 or MATH 221, or equivalent."
  },
  {
    "id": "MATH 220",
    "title": "Calculus",
    "creditHours": 5,
    "maxCreditHours": 5,
    "requirement": "required",
    "termsOffered": [
      "Spring 2027",
      "Fall 2026",
      "Spring 2026",
      "Fall 2025",
      "Spring 2025",
      "Fall 2024"
    ],
    "genEds": [
      "Quantitative Reasoning I"
    ],
    "prerequisiteText": "An adequate ALEKS placement score as described at http://math.illinois.edu/ALEKS/, demonstrating knowledge of topics of MATH 115. Students with previous calculus experience should consider MATH 221."
  },
  {
    "id": "MATH 221",
    "title": "Calculus I",
    "creditHours": 4,
    "maxCreditHours": 4,
    "requirement": "required",
    "termsOffered": [
      "Fall 2026",
      "Fall 2025",
      "Fall 2024"
    ],
    "genEds": [
      "Quantitative Reasoning I"
    ],
    "prerequisiteText": "An adequate ALEKS placement score as described at http://math.illinois.edu/ALEKS/ and either one year of high school calculus or a minimum score of 2 on the AB Calculus AP exam."
  },
  {
    "id": "MATH 225",
    "title": "Introductory Matrix Theory",
    "creditHours": 2,
    "maxCreditHours": 2,
    "requirement": "other",
    "termsOffered": [
      "Spring 2027",
      "Fall 2026",
      "Spring 2026",
      "Fall 2025",
      "Spring 2025",
      "Fall 2024"
    ],
    "genEds": [],
    "prerequisiteText": "MATH 220 or MATH 221; or equivalent."
  },
  {
    "id": "MATH 227",
    "title": "Linear Algebra for Data Science",
    "creditHours": 3,
    "maxCreditHours": 3,
    "requirement": "required",
    "termsOffered": [
      "Spring 2027",
      "Spring 2026",
      "Spring 2025"
    ],
    "genEds": [],
    "prerequisiteText": "Assumes an introductory knowledge of Python, such as students acquire in STAT 107."
  },
  {
    "id": "MATH 231",
    "title": "Calculus II",
    "creditHours": 3,
    "maxCreditHours": 3,
    "requirement": "required",
    "termsOffered": [
      "Spring 2027",
      "Fall 2026",
      "Spring 2026",
      "Fall 2025",
      "Spring 2025",
      "Fall 2024"
    ],
    "genEds": [
      "Quantitative Reasoning I"
    ],
    "prerequisiteText": "MATH 220 or MATH 221."
  },
  {
    "id": "MATH 234",
    "title": "Calculus for Business I",
    "creditHours": 4,
    "maxCreditHours": 4,
    "requirement": "other",
    "termsOffered": [
      "Spring 2027",
      "Fall 2026",
      "Spring 2026",
      "Fall 2025",
      "Spring 2025"
    ],
    "genEds": [
      "Quantitative Reasoning I"
    ],
    "prerequisiteText": "An adequate ALEKS placement score as described at http://math.illinois.edu/ALEKS/, demonstrating knowledge of the topics of MATH 112."
  },
  {
    "id": "MATH 241",
    "title": "Calculus III",
    "creditHours": 4,
    "maxCreditHours": 4,
    "requirement": "required",
    "termsOffered": [
      "Spring 2027",
      "Fall 2026",
      "Summer 2026",
      "Spring 2026",
      "Fall 2025",
      "Summer 2025",
      "Spring 2025",
      "Fall 2024"
    ],
    "genEds": [
      "Quantitative Reasoning II"
    ],
    "prerequisiteText": "MATH 231."
  },
  {
    "id": "MATH 257",
    "title": "Linear Algebra with Computational Applications",
    "creditHours": 3,
    "maxCreditHours": 3,
    "requirement": "required",
    "termsOffered": [
      "Spring 2027",
      "Fall 2026",
      "Summer 2026",
      "Spring 2026",
      "Fall 2025",
      "Summer 2025",
      "Spring 2025",
      "Fall 2024"
    ],
    "genEds": [],
    "prerequisiteText": "MATH 220 or MATH 221; CS 101 or equivalent programming experience."
  },
  {
    "id": "MATH 285",
    "title": "Intro Differential Equations",
    "creditHours": 3,
    "maxCreditHours": 3,
    "requirement": "required",
    "termsOffered": [
      "Spring 2027",
      "Fall 2026",
      "Summer 2026",
      "Spring 2026",
      "Fall 2025",
      "Summer 2025",
      "Spring 2025",
      "Fall 2024"
    ],
    "genEds": [],
    "prerequisiteText": "MATH 241."
  },
  {
    "id": "MATH 299",
    "title": "Topics in Mathematics",
    "creditHours": 1,
    "maxCreditHours": 4,
    "requirement": "other",
    "termsOffered": [
      "Fall 2026",
      "Fall 2025",
      "Fall 2024"
    ],
    "genEds": [],
    "prerequisiteText": "MATH 220 or MATH 221; consent of instructor."
  },
  {
    "id": "MATH 314",
    "title": "Introduction to Higher Mathematics",
    "creditHours": 4,
    "maxCreditHours": 4,
    "requirement": "other",
    "termsOffered": [
      "Spring 2027",
      "Fall 2026",
      "Summer 2026",
      "Spring 2026",
      "Fall 2025",
      "Spring 2025",
      "Fall 2024"
    ],
    "genEds": [],
    "prerequisiteText": "MATH 241."
  },
  {
    "id": "MATH 357",
    "title": "Numerical Methods I",
    "creditHours": 3,
    "maxCreditHours": 3,
    "requirement": "other",
    "termsOffered": [
      "Spring 2027",
      "Fall 2026",
      "Spring 2026",
      "Fall 2025",
      "Spring 2025",
      "Fall 2024"
    ],
    "genEds": [],
    "prerequisiteText": ""
  },
  {
    "id": "MATH 362",
    "title": "Probability with Engrg Applic",
    "creditHours": 3,
    "maxCreditHours": 3,
    "requirement": "other",
    "termsOffered": [
      "Spring 2027",
      "Fall 2026",
      "Summer 2026",
      "Spring 2026",
      "Fall 2025",
      "Summer 2025",
      "Spring 2025",
      "Fall 2024"
    ],
    "genEds": [],
    "prerequisiteText": ""
  },
  {
    "id": "MATH 390",
    "title": "Individual Study",
    "creditHours": 0,
    "maxCreditHours": 3,
    "requirement": "other",
    "termsOffered": [
      "Spring 2027",
      "Fall 2026",
      "Summer 2026",
      "Spring 2026",
      "Fall 2025",
      "Summer 2025",
      "Spring 2025",
      "Fall 2024"
    ],
    "genEds": [],
    "prerequisiteText": "Consent of instructor."
  },
  {
    "id": "MATH 399",
    "title": "Math/Actuarial Internship",
    "creditHours": 0,
    "maxCreditHours": 0,
    "requirement": "other",
    "termsOffered": [
      "Spring 2027",
      "Fall 2026",
      "Summer 2026",
      "Spring 2026",
      "Fall 2025",
      "Summer 2025",
      "Spring 2025",
      "Fall 2024"
    ],
    "genEds": [],
    "prerequisiteText": "After obtaining an internship, Mathematics majors must request entry from the Mathematics Director of Undergraduate Studies; Actuarial Science majors must request entry from the Director of the Actuarial Science Program."
  },
  {
    "id": "MATH 402",
    "title": "Non Euclidean Geometry",
    "creditHours": 3,
    "maxCreditHours": 4,
    "requirement": "other",
    "termsOffered": [
      "Spring 2027",
      "Fall 2026",
      "Spring 2026",
      "Fall 2025",
      "Spring 2025",
      "Fall 2024"
    ],
    "genEds": [],
    "prerequisiteText": "MATH 241; MATH 314 or MATH 347 or MATH 348, or equivalent; or consent of instructor."
  },
  {
    "id": "MATH 403",
    "title": "Euclidean Geometry",
    "creditHours": 3,
    "maxCreditHours": 4,
    "requirement": "other",
    "termsOffered": [
      "Spring 2027",
      "Fall 2026",
      "Spring 2026",
      "Fall 2025",
      "Spring 2025",
      "Fall 2024"
    ],
    "genEds": [],
    "prerequisiteText": "MATH 241; MATH 314 or MATH 347, or equivalent; or consent of instructor."
  },
  {
    "id": "MATH 405",
    "title": "Teacher's Course",
    "creditHours": 3,
    "maxCreditHours": 4,
    "requirement": "other",
    "termsOffered": [
      "Fall 2026",
      "Fall 2025",
      "Fall 2024"
    ],
    "genEds": [],
    "prerequisiteText": "MATH 241; MATH 314 or MATH 347, or equivalent; or consent of instructor."
  },
  {
    "id": "MATH 412",
    "title": "Graph Theory",
    "creditHours": 3,
    "maxCreditHours": 4,
    "requirement": "other",
    "termsOffered": [
      "Spring 2027",
      "Fall 2026",
      "Spring 2026",
      "Fall 2025",
      "Spring 2025",
      "Fall 2024"
    ],
    "genEds": [],
    "prerequisiteText": "MATH 314 or MATH 347 or equivalent experience or CS 374."
  },
  {
    "id": "MATH 413",
    "title": "Intro to Combinatorics",
    "creditHours": 3,
    "maxCreditHours": 3,
    "requirement": "other",
    "termsOffered": [
      "Spring 2027",
      "Fall 2026",
      "Spring 2026",
      "Fall 2025",
      "Spring 2025",
      "Fall 2024"
    ],
    "genEds": [],
    "prerequisiteText": "MATH 314 or MATH 347 or equivalent experience."
  },
  {
    "id": "MATH 414",
    "title": "Mathematical Logic",
    "creditHours": 3,
    "maxCreditHours": 3,
    "requirement": "other",
    "termsOffered": [
      "Spring 2027",
      "Spring 2026"
    ],
    "genEds": [],
    "prerequisiteText": "MATH 314."
  },
  {
    "id": "MATH 415",
    "title": "Applied Linear Algebra",
    "creditHours": 3,
    "maxCreditHours": 4,
    "requirement": "other",
    "termsOffered": [
      "Spring 2027",
      "Fall 2026",
      "Spring 2026",
      "Fall 2025",
      "Spring 2025",
      "Fall 2024"
    ],
    "genEds": [],
    "prerequisiteText": "MATH 241 or consent of instructor."
  },
  {
    "id": "MATH 416",
    "title": "Abstract Linear Algebra",
    "creditHours": 3,
    "maxCreditHours": 4,
    "requirement": "other",
    "termsOffered": [
      "Spring 2027",
      "Fall 2026",
      "Summer 2026",
      "Spring 2026",
      "Fall 2025",
      "Summer 2025",
      "Spring 2025",
      "Fall 2024"
    ],
    "genEds": [],
    "prerequisiteText": "MATH 241; MATH 314 or MATH 347; or consent of instructor."
  },
  {
    "id": "MATH 417",
    "title": "Intro to Abstract Algebra",
    "creditHours": 3,
    "maxCreditHours": 4,
    "requirement": "other",
    "termsOffered": [
      "Spring 2027",
      "Fall 2026",
      "Summer 2026",
      "Spring 2026",
      "Fall 2025",
      "Summer 2025",
      "Spring 2025",
      "Fall 2024"
    ],
    "genEds": [],
    "prerequisiteText": "MATH 314 or MATH 347 or CS 374."
  },
  {
    "id": "MATH 418",
    "title": "Intro to Abstract Algebra II",
    "creditHours": 3,
    "maxCreditHours": 4,
    "requirement": "other",
    "termsOffered": [
      "Spring 2027",
      "Spring 2026",
      "Spring 2025"
    ],
    "genEds": [],
    "prerequisiteText": "MATH 417 or consent of instructor."
  },
  {
    "id": "MATH 423",
    "title": "Differential Geometry",
    "creditHours": 3,
    "maxCreditHours": 4,
    "requirement": "other",
    "termsOffered": [
      "Fall 2026",
      "Fall 2025",
      "Fall 2024"
    ],
    "genEds": [],
    "prerequisiteText": "MATH 241 or equivalent."
  },
  {
    "id": "MATH 424",
    "title": "Honors Real Analysis",
    "creditHours": 3,
    "maxCreditHours": 3,
    "requirement": "other",
    "termsOffered": [
      "Spring 2027",
      "Fall 2026",
      "Spring 2026",
      "Fall 2025",
      "Spring 2025",
      "Fall 2024"
    ],
    "genEds": [],
    "prerequisiteText": "An honors section of MATH 347 or an honors section of MATH 416, and consent of the department."
  },
  {
    "id": "MATH 425",
    "title": "Honors Advanced Analysis",
    "creditHours": 3,
    "maxCreditHours": 3,
    "requirement": "other",
    "termsOffered": [
      "Spring 2027",
      "Spring 2026",
      "Spring 2025"
    ],
    "genEds": [],
    "prerequisiteText": "MATH 424 and either MATH 415 or MATH 416, and consent of the department."
  },
  {
    "id": "MATH 427",
    "title": "Honors Abstract Algebra",
    "creditHours": 3,
    "maxCreditHours": 3,
    "requirement": "other",
    "termsOffered": [
      "Fall 2026",
      "Fall 2025",
      "Spring 2025",
      "Fall 2024"
    ],
    "genEds": [],
    "prerequisiteText": "Consent of the department is required. Prerequisite courses are either an honors section of MATH 416, or MATH 415 together with an honors section of MATH 347."
  },
  {
    "id": "MATH 428",
    "title": "Honors Topics in Mathematics",
    "creditHours": 3,
    "maxCreditHours": 3,
    "requirement": "other",
    "termsOffered": [
      "Fall 2026"
    ],
    "genEds": [],
    "prerequisiteText": "Consent of the department."
  },
  {
    "id": "MATH 432",
    "title": "Set Theory and Topology",
    "creditHours": 3,
    "maxCreditHours": 4,
    "requirement": "other",
    "termsOffered": [
      "Spring 2027",
      "Spring 2026",
      "Spring 2025"
    ],
    "genEds": [],
    "prerequisiteText": "MATH 314 or MATH 347 or consent of instructor."
  },
  {
    "id": "MATH 439",
    "title": "Philosophy of Mathematics",
    "creditHours": 3,
    "maxCreditHours": 4,
    "requirement": "other",
    "termsOffered": [
      "Fall 2026",
      "Spring 2025"
    ],
    "genEds": [],
    "prerequisiteText": ""
  },
  {
    "id": "MATH 441",
    "title": "Differential Equations",
    "creditHours": 3,
    "maxCreditHours": 4,
    "requirement": "required",
    "termsOffered": [
      "Spring 2027",
      "Fall 2026",
      "Summer 2026",
      "Spring 2026",
      "Fall 2025",
      "Summer 2025",
      "Spring 2025",
      "Fall 2024"
    ],
    "genEds": [],
    "prerequisiteText": "MATH 241; MATH 314 or MATH 347 is recommended."
  },
  {
    "id": "MATH 442",
    "title": "Intro Partial Diff Equations",
    "creditHours": 3,
    "maxCreditHours": 4,
    "requirement": "required",
    "termsOffered": [
      "Spring 2027",
      "Fall 2026",
      "Spring 2026",
      "Fall 2025",
      "Spring 2025",
      "Fall 2024"
    ],
    "genEds": [],
    "prerequisiteText": "One of MATH 284, MATH 285, MATH 286, MATH 441."
  },
  {
    "id": "MATH 444",
    "title": "Elementary Real Analysis",
    "creditHours": 3,
    "maxCreditHours": 4,
    "requirement": "other",
    "termsOffered": [
      "Spring 2027",
      "Fall 2026",
      "Summer 2026",
      "Spring 2026",
      "Fall 2025",
      "Summer 2025",
      "Spring 2025",
      "Fall 2024"
    ],
    "genEds": [],
    "prerequisiteText": "MATH 241; MATH 314 or MATH 347, or equivalent."
  },
  {
    "id": "MATH 446",
    "title": "Applied Complex Variables",
    "creditHours": 3,
    "maxCreditHours": 4,
    "requirement": "other",
    "termsOffered": [
      "Spring 2027",
      "Fall 2026",
      "Spring 2026",
      "Fall 2025",
      "Spring 2025",
      "Fall 2024"
    ],
    "genEds": [],
    "prerequisiteText": "MATH 241."
  },
  {
    "id": "MATH 447",
    "title": "Real Variables",
    "creditHours": 3,
    "maxCreditHours": 3,
    "requirement": "other",
    "termsOffered": [
      "Spring 2027",
      "Fall 2026",
      "Spring 2026",
      "Fall 2025",
      "Spring 2025",
      "Fall 2024"
    ],
    "genEds": [],
    "prerequisiteText": "MATH 241 or equivalent; junior standing; MATH 314 or MATH 347, or equivalent experience; or consent of instructor."
  },
  {
    "id": "MATH 448",
    "title": "Complex Variables",
    "creditHours": 3,
    "maxCreditHours": 4,
    "requirement": "other",
    "termsOffered": [
      "Spring 2027",
      "Fall 2026",
      "Spring 2026",
      "Fall 2025",
      "Spring 2025",
      "Fall 2024"
    ],
    "genEds": [],
    "prerequisiteText": "MATH 447."
  },
  {
    "id": "MATH 450",
    "title": "Numerical Analysis",
    "creditHours": 3,
    "maxCreditHours": 4,
    "requirement": "other",
    "termsOffered": [
      "Spring 2027",
      "Fall 2026",
      "Spring 2026",
      "Fall 2025",
      "Spring 2025",
      "Fall 2024"
    ],
    "genEds": [],
    "prerequisiteText": ""
  },
  {
    "id": "MATH 453",
    "title": "Number Theory",
    "creditHours": 3,
    "maxCreditHours": 3,
    "requirement": "other",
    "termsOffered": [
      "Spring 2027",
      "Fall 2026",
      "Spring 2026",
      "Fall 2025",
      "Spring 2025",
      "Fall 2024"
    ],
    "genEds": [],
    "prerequisiteText": "MATH 314 or MATH 347."
  },
  {
    "id": "MATH 461",
    "title": "Probability Theory",
    "creditHours": 3,
    "maxCreditHours": 4,
    "requirement": "other",
    "termsOffered": [
      "Spring 2027",
      "Fall 2026",
      "Spring 2026",
      "Fall 2025",
      "Spring 2025",
      "Fall 2024"
    ],
    "genEds": [],
    "prerequisiteText": "MATH 241 or equivalent."
  },
  {
    "id": "MATH 463",
    "title": "Statistics and Probability I",
    "creditHours": 4,
    "maxCreditHours": 4,
    "requirement": "other",
    "termsOffered": [
      "Spring 2027",
      "Fall 2026",
      "Summer 2026",
      "Spring 2026",
      "Fall 2025",
      "Summer 2025",
      "Spring 2025",
      "Fall 2024"
    ],
    "genEds": [],
    "prerequisiteText": ""
  },
  {
    "id": "MATH 464",
    "title": "Statistics and Probability II",
    "creditHours": 3,
    "maxCreditHours": 4,
    "requirement": "other",
    "termsOffered": [
      "Spring 2027",
      "Fall 2026",
      "Summer 2026",
      "Spring 2026",
      "Fall 2025",
      "Summer 2025",
      "Spring 2025",
      "Fall 2024"
    ],
    "genEds": [],
    "prerequisiteText": ""
  },
  {
    "id": "MATH 466",
    "title": "Applied Random Processes",
    "creditHours": 3,
    "maxCreditHours": 3,
    "requirement": "other",
    "termsOffered": [
      "Spring 2027",
      "Spring 2026",
      "Spring 2025"
    ],
    "genEds": [],
    "prerequisiteText": "MATH 241, MATH 416, and MATH 461. Priority registration will be given to students in the Mathematics + Data Science major."
  },
  {
    "id": "MATH 467",
    "title": "Mathematics for Machine Learning",
    "creditHours": 4,
    "maxCreditHours": 4,
    "requirement": "other",
    "termsOffered": [],
    "genEds": [],
    "prerequisiteText": "MATH 416; MATH 461 or STAT 400; STAT 207; CS 277; and CS 307."
  },
  {
    "id": "MATH 473",
    "title": "Algorithms",
    "creditHours": 4,
    "maxCreditHours": 4,
    "requirement": "other",
    "termsOffered": [
      "Spring 2027",
      "Fall 2026",
      "Spring 2026",
      "Fall 2025",
      "Spring 2025",
      "Fall 2024"
    ],
    "genEds": [],
    "prerequisiteText": ""
  },
  {
    "id": "MATH 475",
    "title": "Formal Models of Computation",
    "creditHours": 3,
    "maxCreditHours": 4,
    "requirement": "other",
    "termsOffered": [
      "Fall 2026",
      "Fall 2025",
      "Fall 2024"
    ],
    "genEds": [],
    "prerequisiteText": ""
  },
  {
    "id": "MATH 481",
    "title": "Vector and Tensor Analysis",
    "creditHours": 3,
    "maxCreditHours": 4,
    "requirement": "other",
    "termsOffered": [
      "Spring 2027",
      "Spring 2026",
      "Spring 2025",
      "Fall 2024"
    ],
    "genEds": [],
    "prerequisiteText": "MATH 241 and one of MATH 257, MATH 415, or MATH 416."
  },
  {
    "id": "MATH 482",
    "title": "Linear Programming",
    "creditHours": 3,
    "maxCreditHours": 4,
    "requirement": "other",
    "termsOffered": [
      "Spring 2027",
      "Fall 2026",
      "Spring 2026",
      "Fall 2025",
      "Spring 2025",
      "Fall 2024"
    ],
    "genEds": [],
    "prerequisiteText": "ASRM 406, MATH 257, MATH 415, or MATH 416."
  },
  {
    "id": "MATH 484",
    "title": "Nonlinear Programming",
    "creditHours": 3,
    "maxCreditHours": 4,
    "requirement": "other",
    "termsOffered": [
      "Spring 2027",
      "Fall 2026",
      "Spring 2026",
      "Fall 2025",
      "Spring 2025",
      "Fall 2024"
    ],
    "genEds": [],
    "prerequisiteText": "MATH 241 and one of MATH 257, MATH 415, or MATH 416."
  },
  {
    "id": "MATH 487",
    "title": "Advanced Engineering Math",
    "creditHours": 3,
    "maxCreditHours": 3,
    "requirement": "other",
    "termsOffered": [
      "Fall 2026",
      "Fall 2024"
    ],
    "genEds": [],
    "prerequisiteText": "One of MATH 284, MATH 285, MATH 286, MATH 441."
  },
  {
    "id": "MATH 489",
    "title": "Dynamics & Differential Eqns",
    "creditHours": 3,
    "maxCreditHours": 4,
    "requirement": "other",
    "termsOffered": [
      "Spring 2027",
      "Fall 2026",
      "Spring 2026",
      "Fall 2025",
      "Fall 2024"
    ],
    "genEds": [],
    "prerequisiteText": "One of MATH 284, MATH 285, MATH 286, MATH 441."
  },
  {
    "id": "MATH 490",
    "title": "Advanced Topics in Mathematics",
    "creditHours": 1,
    "maxCreditHours": 4,
    "requirement": "other",
    "termsOffered": [
      "Fall 2025",
      "Spring 2025",
      "Fall 2024"
    ],
    "genEds": [],
    "prerequisiteText": "Consent of instructor."
  },
  {
    "id": "MATH 492",
    "title": "Undergraduate Research in Math",
    "creditHours": 1,
    "maxCreditHours": 3,
    "requirement": "other",
    "termsOffered": [
      "Spring 2027",
      "Spring 2026",
      "Spring 2025",
      "Fall 2024"
    ],
    "genEds": [],
    "prerequisiteText": "Evidence of adequate preparation for such study; consent of faculty member supervising the work; and approval of the department head."
  },
  {
    "id": "MATH 495",
    "title": "Models in Mathematical Biology",
    "creditHours": 3,
    "maxCreditHours": 3,
    "requirement": "other",
    "termsOffered": [
      "Spring 2027",
      "Spring 2026",
      "Spring 2025"
    ],
    "genEds": [],
    "prerequisiteText": "Math 220 or equivalent."
  },
  {
    "id": "MATH 499",
    "title": "Introduction Graduate Research",
    "creditHours": 1,
    "maxCreditHours": 1,
    "requirement": "other",
    "termsOffered": [
      "Fall 2026",
      "Spring 2026",
      "Fall 2025",
      "Fall 2024"
    ],
    "genEds": [],
    "prerequisiteText": "Graduate standing or consent of instructor."
  },
  {
    "id": "MCB 150",
    "title": "Molecular & Cellular Basis of Life",
    "creditHours": 4,
    "maxCreditHours": 4,
    "requirement": "required",
    "termsOffered": [
      "Spring 2027",
      "Fall 2026",
      "Summer 2026",
      "Spring 2026",
      "Fall 2025",
      "Summer 2025",
      "Spring 2025",
      "Fall 2024"
    ],
    "genEds": [
      "Nat Sci & Tech - Life Sciences"
    ],
    "prerequisiteText": ""
  },
  {
    "id": "MCB 250",
    "title": "Molecular Genetics",
    "creditHours": 3,
    "maxCreditHours": 3,
    "requirement": "required",
    "termsOffered": [
      "Spring 2027",
      "Fall 2026",
      "Summer 2026",
      "Spring 2026",
      "Fall 2025",
      "Summer 2025",
      "Spring 2025",
      "Fall 2024"
    ],
    "genEds": [],
    "prerequisiteText": "MCB 150, CHEM 102 and CHEM 104, or equivalents or consent of instructor."
  },
  {
    "id": "MCB 252",
    "title": "Cells, Tissues & Development",
    "creditHours": 3,
    "maxCreditHours": 3,
    "requirement": "required",
    "termsOffered": [
      "Spring 2027",
      "Fall 2026",
      "Summer 2026",
      "Spring 2026",
      "Fall 2025",
      "Summer 2025",
      "Spring 2025",
      "Fall 2024"
    ],
    "genEds": [],
    "prerequisiteText": "MCB 250 or equivalent with consent of instructor."
  },
  {
    "id": "MCB 450",
    "title": "Introductory Biochemistry",
    "creditHours": 3,
    "maxCreditHours": 3,
    "requirement": "required",
    "termsOffered": [
      "Spring 2027",
      "Fall 2026",
      "Summer 2026",
      "Spring 2026",
      "Fall 2025",
      "Summer 2025",
      "Spring 2025",
      "Fall 2024"
    ],
    "genEds": [],
    "prerequisiteText": "CHEM 232 or CHEM 236, or equivalent, or consent of instructor. Not intended for students in the MCB or biochemistry curricula."
  },
  {
    "id": "ME 170",
    "title": "Computer-Aided Design",
    "creditHours": 3,
    "maxCreditHours": 3,
    "requirement": "required",
    "termsOffered": [
      "Spring 2027",
      "Fall 2026",
      "Spring 2026",
      "Fall 2025",
      "Spring 2025",
      "Fall 2024"
    ],
    "genEds": [],
    "prerequisiteText": ""
  },
  {
    "id": "ME 200",
    "title": "Thermodynamics",
    "creditHours": 3,
    "maxCreditHours": 3,
    "requirement": "required",
    "termsOffered": [
      "Spring 2027",
      "Fall 2026",
      "Summer 2026",
      "Spring 2026",
      "Fall 2025",
      "Summer 2025",
      "Spring 2025",
      "Fall 2024"
    ],
    "genEds": [],
    "prerequisiteText": "MATH 241."
  },
  {
    "id": "ME 270",
    "title": "Design for Manufacturability",
    "creditHours": 3,
    "maxCreditHours": 3,
    "requirement": "required",
    "termsOffered": [
      "Spring 2027",
      "Fall 2026",
      "Spring 2026",
      "Fall 2025",
      "Spring 2025",
      "Fall 2024"
    ],
    "genEds": [],
    "prerequisiteText": "ME 170. ME and EM majors only."
  },
  {
    "id": "ME 290",
    "title": "Seminar",
    "creditHours": 0,
    "maxCreditHours": 0,
    "requirement": "required",
    "termsOffered": [
      "Fall 2026",
      "Fall 2025",
      "Fall 2024"
    ],
    "genEds": [],
    "prerequisiteText": ""
  },
  {
    "id": "ME 310",
    "title": "Fundamentals of Fluid Dynamics",
    "creditHours": 4,
    "maxCreditHours": 4,
    "requirement": "required",
    "termsOffered": [
      "Spring 2027",
      "Fall 2026",
      "Spring 2026",
      "Fall 2025",
      "Spring 2025",
      "Fall 2024"
    ],
    "genEds": [],
    "prerequisiteText": "MATH 285 or MATH 441; credit or concurrent registration in ME 200."
  },
  {
    "id": "ME 320",
    "title": "Heat Transfer",
    "creditHours": 4,
    "maxCreditHours": 4,
    "requirement": "required",
    "termsOffered": [
      "Spring 2027",
      "Fall 2026",
      "Spring 2026",
      "Fall 2025",
      "Spring 2025",
      "Fall 2024"
    ],
    "genEds": [],
    "prerequisiteText": "ME 200; ME 310 or TAM 335; MATH 285 or MATH 441."
  },
  {
    "id": "ME 330",
    "title": "Engineering Materials",
    "creditHours": 4,
    "maxCreditHours": 4,
    "requirement": "required",
    "termsOffered": [
      "Spring 2027",
      "Fall 2026",
      "Spring 2026",
      "Fall 2025",
      "Spring 2025",
      "Fall 2024"
    ],
    "genEds": [],
    "prerequisiteText": "CHEM 102 and TAM 251."
  },
  {
    "id": "ME 340",
    "title": "Dynamics of Mechanical Systems",
    "creditHours": 3,
    "maxCreditHours": 3,
    "requirement": "required",
    "termsOffered": [
      "Spring 2027",
      "Fall 2026",
      "Spring 2026",
      "Fall 2025",
      "Spring 2025",
      "Fall 2024"
    ],
    "genEds": [],
    "prerequisiteText": "MATH 285 or MATH 441; TAM 212; credit or concurrent registration in MATH 257 or MATH 415 or MATH 416; credit or concurrent registration in ECE 205."
  },
  {
    "id": "ME 360",
    "title": "Signal Processing",
    "creditHours": 3,
    "maxCreditHours": 3,
    "requirement": "required",
    "termsOffered": [
      "Spring 2027",
      "Fall 2026",
      "Spring 2026",
      "Fall 2025",
      "Spring 2025",
      "Fall 2024"
    ],
    "genEds": [],
    "prerequisiteText": "ME 340."
  },
  {
    "id": "ME 370",
    "title": "Mechanical Design I",
    "creditHours": 3,
    "maxCreditHours": 3,
    "requirement": "required",
    "termsOffered": [
      "Spring 2027",
      "Fall 2026",
      "Spring 2026",
      "Fall 2025",
      "Spring 2025",
      "Fall 2024"
    ],
    "genEds": [],
    "prerequisiteText": "ME 270, TAM 212, and TAM 251."
  },
  {
    "id": "ME 371",
    "title": "Mechanical Design II",
    "creditHours": 3,
    "maxCreditHours": 3,
    "requirement": "required",
    "termsOffered": [
      "Spring 2027",
      "Fall 2026",
      "Spring 2026",
      "Fall 2025",
      "Spring 2025",
      "Fall 2024"
    ],
    "genEds": [],
    "prerequisiteText": "ME 370; CEE 300/TAM 324 or credit or concurrent registration in ME 330."
  },
  {
    "id": "ME 470",
    "title": "Senior Design Project",
    "creditHours": 3,
    "maxCreditHours": 3,
    "requirement": "required",
    "termsOffered": [
      "Spring 2027",
      "Fall 2026",
      "Spring 2026",
      "Fall 2025",
      "Spring 2025",
      "Fall 2024"
    ],
    "genEds": [
      "Advanced Composition"
    ],
    "prerequisiteText": "Concurrent enrollment in no more than two required ME courses; completion of all required courses for ME students. Concurrent enrollment in no more than two required TAM courses; completion of all required courses for EM students. Departmental approval required. Restricted to students in the Mechanical Sci & Engineering department. Restricted to students with Senior class standing."
  },
  {
    "id": "MSE 182",
    "title": "Introduction to MatSE",
    "creditHours": 2,
    "maxCreditHours": 2,
    "requirement": "required",
    "termsOffered": [
      "Fall 2026",
      "Fall 2025",
      "Fall 2024"
    ],
    "genEds": [],
    "prerequisiteText": ""
  },
  {
    "id": "MSE 183",
    "title": "Introductory Materials Science and Engineering Laboratory",
    "creditHours": 1,
    "maxCreditHours": 1,
    "requirement": "required",
    "termsOffered": [
      "Spring 2027",
      "Spring 2026",
      "Spring 2025"
    ],
    "genEds": [],
    "prerequisiteText": "MSE 182."
  },
  {
    "id": "MSE 201",
    "title": "Phases and Phase Relations",
    "creditHours": 3,
    "maxCreditHours": 3,
    "requirement": "required",
    "termsOffered": [
      "Fall 2026",
      "Spring 2026",
      "Fall 2025",
      "Fall 2024"
    ],
    "genEds": [],
    "prerequisiteText": "MSE 182; credit or concurrent enrollment in CHEM 104, MATH 231 and PHYS 211."
  },
  {
    "id": "MSE 206",
    "title": "Mechanics for MatSE",
    "creditHours": 4,
    "maxCreditHours": 4,
    "requirement": "required",
    "termsOffered": [
      "Spring 2027",
      "Spring 2026",
      "Spring 2025"
    ],
    "genEds": [],
    "prerequisiteText": "MATH 241 and PHYS 211. Credit or concurrent enrollment in CS 101 or CS 124 or CS 125; and MATH 225 or MATH 257 or MATH 415; and MSE 201."
  },
  {
    "id": "MSE 280",
    "title": "Engineering Materials",
    "creditHours": 3,
    "maxCreditHours": 3,
    "requirement": "required",
    "termsOffered": [
      "Spring 2027",
      "Fall 2026",
      "Spring 2026",
      "Fall 2025",
      "Spring 2025",
      "Fall 2024"
    ],
    "genEds": [],
    "prerequisiteText": "CHEM 102 and PHYS 211."
  },
  {
    "id": "MSE 304",
    "title": "Electronic Properties of Matls",
    "creditHours": 3,
    "maxCreditHours": 3,
    "requirement": "required",
    "termsOffered": [
      "Spring 2027",
      "Spring 2026",
      "Spring 2025"
    ],
    "genEds": [],
    "prerequisiteText": "PHYS 214."
  },
  {
    "id": "MSE 307",
    "title": "Materials Laboratory I",
    "creditHours": 3,
    "maxCreditHours": 3,
    "requirement": "required",
    "termsOffered": [
      "Fall 2026",
      "Fall 2025",
      "Fall 2024"
    ],
    "genEds": [
      "Advanced Composition"
    ],
    "prerequisiteText": "Credit or concurrent registration in MSE 201 and MSE 401."
  },
  {
    "id": "MSE 308",
    "title": "Materials Laboratory II",
    "creditHours": 3,
    "maxCreditHours": 3,
    "requirement": "required",
    "termsOffered": [
      "Spring 2027",
      "Spring 2026",
      "Spring 2025"
    ],
    "genEds": [
      "Advanced Composition"
    ],
    "prerequisiteText": "Credit or concurrent registration in MSE 307 and MSE 406."
  },
  {
    "id": "MSE 401",
    "title": "Thermodynamics of Materials",
    "creditHours": 3,
    "maxCreditHours": 3,
    "requirement": "required",
    "termsOffered": [
      "Fall 2026",
      "Fall 2025",
      "Fall 2024"
    ],
    "genEds": [],
    "prerequisiteText": "MSE 201 or MSE 280; credit or concurrent registration in MATH 285."
  },
  {
    "id": "MSE 402",
    "title": "Kinetic Processes in Materials",
    "creditHours": 3,
    "maxCreditHours": 3,
    "requirement": "required",
    "termsOffered": [
      "Spring 2027",
      "Spring 2026",
      "Spring 2025"
    ],
    "genEds": [],
    "prerequisiteText": "MSE 201 and MSE 401."
  },
  {
    "id": "MSE 404",
    "title": "Laboratory Studies in Materials Science and Engineering",
    "creditHours": 5,
    "maxCreditHours": 5,
    "requirement": "required",
    "termsOffered": [
      "Spring 2027",
      "Fall 2026",
      "Spring 2026",
      "Fall 2025",
      "Spring 2025",
      "Fall 2024"
    ],
    "genEds": [],
    "prerequisiteText": "MSE 307 and MSE 308 or permission of instructor. Senior standing."
  },
  {
    "id": "MSE 405",
    "title": "Microstructure Determination",
    "creditHours": 3,
    "maxCreditHours": 3,
    "requirement": "required",
    "termsOffered": [
      "Spring 2027",
      "Spring 2026",
      "Spring 2025"
    ],
    "genEds": [],
    "prerequisiteText": "MSE 201, MATH 285 and PHYS 214."
  },
  {
    "id": "MSE 406",
    "title": "Thermal-Mech Behavior of Matls",
    "creditHours": 3,
    "maxCreditHours": 3,
    "requirement": "required",
    "termsOffered": [
      "Fall 2026",
      "Fall 2025",
      "Fall 2024"
    ],
    "genEds": [],
    "prerequisiteText": "MSE 206; credit or concurrent registration in MSE 201 and MSE 401."
  },
  {
    "id": "MSE 470",
    "title": "Design and Use of Biomaterials",
    "creditHours": 3,
    "maxCreditHours": 3,
    "requirement": "required",
    "termsOffered": [
      "Fall 2026",
      "Fall 2025",
      "Fall 2024"
    ],
    "genEds": [],
    "prerequisiteText": "Credit or concurrent registration in both MCB 252 and either CHEM 232 or MSE 403."
  },
  {
    "id": "MSE 494",
    "title": "Materials Design Thinking",
    "creditHours": 1,
    "maxCreditHours": 1,
    "requirement": "required",
    "termsOffered": [
      "Fall 2026",
      "Fall 2025",
      "Fall 2024"
    ],
    "genEds": [],
    "prerequisiteText": "MSE 308."
  },
  {
    "id": "MSE 495",
    "title": "Materials Design",
    "creditHours": 2,
    "maxCreditHours": 2,
    "requirement": "required",
    "termsOffered": [
      "Spring 2027",
      "Spring 2026",
      "Spring 2025"
    ],
    "genEds": [],
    "prerequisiteText": "Credit in MSE 494."
  },
  {
    "id": "NE 100",
    "title": "Introduction to Neural Engineering",
    "creditHours": 2,
    "maxCreditHours": 2,
    "requirement": "required",
    "termsOffered": [
      "Fall 2026",
      "Fall 2025",
      "Fall 2024"
    ],
    "genEds": [],
    "prerequisiteText": "Restricted to Neural Engineering majors."
  },
  {
    "id": "NE 330",
    "title": "Neuroscience for Engineers",
    "creditHours": 3,
    "maxCreditHours": 3,
    "requirement": "required",
    "termsOffered": [
      "Fall 2026",
      "Fall 2025",
      "Spring 2025"
    ],
    "genEds": [],
    "prerequisiteText": "NE 100, MCB 252. Restricted to Neural Engineering majors."
  },
  {
    "id": "NE 402",
    "title": "Neural Engineering Senior Design",
    "creditHours": 4,
    "maxCreditHours": 4,
    "requirement": "required",
    "termsOffered": [
      "Spring 2027"
    ],
    "genEds": [],
    "prerequisiteText": "NE 410/ECE 410, NE 420/ECE 421, NE 422. Concurrent enrollment or previous credit in both NE 412 and NE 431 is required."
  },
  {
    "id": "NE 410",
    "title": "Neural Circuits and Systems",
    "creditHours": 3,
    "maxCreditHours": 3,
    "requirement": "required",
    "termsOffered": [
      "Fall 2026",
      "Fall 2025"
    ],
    "genEds": [],
    "prerequisiteText": "MATH 285 or equivalent. CS 101 or equivalent."
  },
  {
    "id": "NE 412",
    "title": "Neural Data Analysis",
    "creditHours": 3,
    "maxCreditHours": 3,
    "requirement": "required",
    "termsOffered": [
      "Spring 2027",
      "Spring 2026"
    ],
    "genEds": [],
    "prerequisiteText": "BIOE 210, BIOE 310, or instructor consent."
  },
  {
    "id": "NE 420",
    "title": "Neural Interface Engineering",
    "creditHours": 3,
    "maxCreditHours": 4,
    "requirement": "required",
    "termsOffered": [
      "Spring 2027",
      "Spring 2025"
    ],
    "genEds": [],
    "prerequisiteText": ""
  },
  {
    "id": "NE 422",
    "title": "Introduction to Neuroimaging",
    "creditHours": 3,
    "maxCreditHours": 3,
    "requirement": "required",
    "termsOffered": [
      "Spring 2027",
      "Spring 2026",
      "Spring 2025"
    ],
    "genEds": [],
    "prerequisiteText": "BIOE 210, BIOE 310, NE 330."
  },
  {
    "id": "NE 430",
    "title": "Neural Cell and Tissue Engineering",
    "creditHours": 3,
    "maxCreditHours": 3,
    "requirement": "required",
    "termsOffered": [
      "Fall 2026",
      "Fall 2025"
    ],
    "genEds": [],
    "prerequisiteText": "NE 330 or instructor consent."
  },
  {
    "id": "NE 431",
    "title": "Neural Cell & Tissue Engineering Lab",
    "creditHours": 4,
    "maxCreditHours": 4,
    "requirement": "required",
    "termsOffered": [
      "Fall 2026",
      "Fall 2025"
    ],
    "genEds": [],
    "prerequisiteText": "NE 330 or instructor consent. Concurrent enrollment or credit in NE 430 is required."
  },
  {
    "id": "NPRE 100",
    "title": "Orientation to NPRE",
    "creditHours": 1,
    "maxCreditHours": 1,
    "requirement": "required",
    "termsOffered": [
      "Fall 2026",
      "Fall 2025",
      "Fall 2024"
    ],
    "genEds": [],
    "prerequisiteText": ""
  },
  {
    "id": "NPRE 200",
    "title": "Mathematics for Nuclear, Plasma, and Radiological Engineering",
    "creditHours": 2,
    "maxCreditHours": 2,
    "requirement": "required",
    "termsOffered": [
      "Fall 2026",
      "Fall 2025",
      "Fall 2024"
    ],
    "genEds": [],
    "prerequisiteText": "MATH 231."
  },
  {
    "id": "NPRE 247",
    "title": "Modeling Nuclear Energy System",
    "creditHours": 3,
    "maxCreditHours": 3,
    "requirement": "required",
    "termsOffered": [
      "Spring 2027",
      "Fall 2026",
      "Spring 2026",
      "Fall 2025",
      "Spring 2025",
      "Fall 2024"
    ],
    "genEds": [],
    "prerequisiteText": "Credit for PHYS 211; credit or concurrent registration in CS 101 or CS 124 or CS 125; credit or concurrent registration in MATH 285."
  },
  {
    "id": "NPRE 321",
    "title": "Introduction to Plasmas and Applications",
    "creditHours": 3,
    "maxCreditHours": 3,
    "requirement": "required",
    "termsOffered": [
      "Fall 2026",
      "Fall 2025",
      "Fall 2024"
    ],
    "genEds": [],
    "prerequisiteText": "MATH 241 and PHYS 212."
  },
  {
    "id": "NPRE 330",
    "title": "Materials in Nuclear Engineering",
    "creditHours": 3,
    "maxCreditHours": 3,
    "requirement": "required",
    "termsOffered": [
      "Fall 2026",
      "Fall 2025",
      "Fall 2024"
    ],
    "genEds": [],
    "prerequisiteText": ""
  },
  {
    "id": "NPRE 349",
    "title": "Introduction to NPRE Heat Transfer",
    "creditHours": 2,
    "maxCreditHours": 2,
    "requirement": "required",
    "termsOffered": [
      "Spring 2027",
      "Summer 2026",
      "Spring 2026",
      "Summer 2025",
      "Spring 2025"
    ],
    "genEds": [],
    "prerequisiteText": "MATH 285; credit or concurrent registration in TAM 335 or ME 310."
  },
  {
    "id": "NPRE 441",
    "title": "Radiation Protection",
    "creditHours": 4,
    "maxCreditHours": 4,
    "requirement": "required",
    "termsOffered": [
      "Spring 2027",
      "Spring 2026",
      "Spring 2025"
    ],
    "genEds": [],
    "prerequisiteText": "NPRE 445."
  },
  {
    "id": "NPRE 445",
    "title": "Interaction of Radiation with Matter",
    "creditHours": 4,
    "maxCreditHours": 4,
    "requirement": "required",
    "termsOffered": [
      "Fall 2026",
      "Fall 2025",
      "Fall 2024"
    ],
    "genEds": [],
    "prerequisiteText": "NPRE 200, MATH 285, PHYS 212."
  },
  {
    "id": "NPRE 449",
    "title": "Nuclear Systems Engineering and Design",
    "creditHours": 3,
    "maxCreditHours": 3,
    "requirement": "required",
    "termsOffered": [
      "Fall 2026",
      "Fall 2025",
      "Fall 2024"
    ],
    "genEds": [],
    "prerequisiteText": "NPRE 349, NPRE 455."
  },
  {
    "id": "NPRE 451",
    "title": "NPRE Laboratory",
    "creditHours": 3,
    "maxCreditHours": 3,
    "requirement": "required",
    "termsOffered": [
      "Spring 2027",
      "Fall 2026",
      "Spring 2026",
      "Fall 2025",
      "Spring 2025",
      "Fall 2024"
    ],
    "genEds": [],
    "prerequisiteText": "NPRE 445."
  },
  {
    "id": "NPRE 455",
    "title": "Neutron Diffusion & Transport",
    "creditHours": 4,
    "maxCreditHours": 4,
    "requirement": "required",
    "termsOffered": [
      "Spring 2027",
      "Spring 2026",
      "Spring 2025"
    ],
    "genEds": [],
    "prerequisiteText": "NPRE 247."
  },
  {
    "id": "NPRE 458",
    "title": "Design in NPRE",
    "creditHours": 4,
    "maxCreditHours": 4,
    "requirement": "required",
    "termsOffered": [
      "Spring 2027",
      "Spring 2026",
      "Spring 2025"
    ],
    "genEds": [],
    "prerequisiteText": "NPRE 449."
  },
  {
    "id": "PHYS 110",
    "title": "Physics Careers",
    "creditHours": 0,
    "maxCreditHours": 0,
    "requirement": "required",
    "termsOffered": [
      "Fall 2026",
      "Fall 2025",
      "Fall 2024"
    ],
    "genEds": [],
    "prerequisiteText": ""
  },
  {
    "id": "PHYS 211",
    "title": "University Physics: Mechanics",
    "creditHours": 4,
    "maxCreditHours": 4,
    "requirement": "required",
    "termsOffered": [
      "Spring 2027",
      "Fall 2026",
      "Summer 2026",
      "Spring 2026",
      "Fall 2025",
      "Summer 2025",
      "Spring 2025",
      "Fall 2024"
    ],
    "genEds": [
      "Nat Sci & Tech - Phys Sciences",
      "Quantitative Reasoning II"
    ],
    "prerequisiteText": "Credit or concurrent registration in MATH 231."
  },
  {
    "id": "PHYS 212",
    "title": "University Physics: Elec & Mag",
    "creditHours": 4,
    "maxCreditHours": 4,
    "requirement": "required",
    "termsOffered": [
      "Spring 2027",
      "Fall 2026",
      "Summer 2026",
      "Spring 2026",
      "Fall 2025",
      "Summer 2025",
      "Spring 2025",
      "Fall 2024"
    ],
    "genEds": [
      "Quantitative Reasoning II",
      "Nat Sci & Tech - Phys Sciences"
    ],
    "prerequisiteText": "PHYS 211; credit or concurrent registration in MATH 241."
  },
  {
    "id": "PHYS 213",
    "title": "Univ Physics: Thermal Physics",
    "creditHours": 2,
    "maxCreditHours": 2,
    "requirement": "required",
    "termsOffered": [
      "Spring 2027",
      "Fall 2026",
      "Summer 2026",
      "Spring 2026",
      "Fall 2025",
      "Summer 2025",
      "Spring 2025",
      "Fall 2024"
    ],
    "genEds": [],
    "prerequisiteText": "PHYS 211; credit or concurrent registration in MATH 241."
  },
  {
    "id": "PHYS 214",
    "title": "Univ Physics: Quantum Physics",
    "creditHours": 2,
    "maxCreditHours": 2,
    "requirement": "required",
    "termsOffered": [
      "Spring 2027",
      "Fall 2026",
      "Summer 2026",
      "Spring 2026",
      "Fall 2025",
      "Summer 2025",
      "Spring 2025",
      "Fall 2024"
    ],
    "genEds": [],
    "prerequisiteText": "PHYS 212."
  },
  {
    "id": "PHYS 225",
    "title": "Relativity & Math Applications",
    "creditHours": 2,
    "maxCreditHours": 2,
    "requirement": "required",
    "termsOffered": [
      "Spring 2027",
      "Fall 2026",
      "Spring 2026",
      "Fall 2025",
      "Spring 2025",
      "Fall 2024"
    ],
    "genEds": [],
    "prerequisiteText": "Credit or concurrent registration in PHYS 212."
  },
  {
    "id": "PHYS 246",
    "title": "An Introduction to Modern Computational Physics",
    "creditHours": 2,
    "maxCreditHours": 2,
    "requirement": "required",
    "termsOffered": [
      "Spring 2027",
      "Fall 2026",
      "Spring 2026",
      "Fall 2025",
      "Spring 2025",
      "Fall 2024"
    ],
    "genEds": [],
    "prerequisiteText": "Concurrent enrollment in PHYS 225."
  },
  {
    "id": "PHYS 325",
    "title": "Classical Mechanics I",
    "creditHours": 3,
    "maxCreditHours": 3,
    "requirement": "required",
    "termsOffered": [
      "Spring 2027",
      "Fall 2026",
      "Spring 2026",
      "Fall 2025",
      "Spring 2025",
      "Fall 2024"
    ],
    "genEds": [],
    "prerequisiteText": "PHYS 225; credit or concurrent registration in MATH 285 or MATH 286."
  },
  {
    "id": "PHYS 427",
    "title": "Thermal & Statistical Physics",
    "creditHours": 4,
    "maxCreditHours": 4,
    "requirement": "required",
    "termsOffered": [
      "Spring 2027",
      "Fall 2026",
      "Spring 2026",
      "Fall 2025",
      "Spring 2025",
      "Fall 2024"
    ],
    "genEds": [],
    "prerequisiteText": "PHYS 213; PHYS 214; PHYS 435 or ECE 329."
  },
  {
    "id": "PHYS 435",
    "title": "Electromagnetic Fields I",
    "creditHours": 3,
    "maxCreditHours": 3,
    "requirement": "required",
    "termsOffered": [
      "Spring 2027",
      "Fall 2026",
      "Spring 2026",
      "Fall 2025",
      "Spring 2025",
      "Fall 2024"
    ],
    "genEds": [],
    "prerequisiteText": "MATH 285 and PHYS 325. Credit or concurrent enrollment in MATH 257 or MATH 416."
  },
  {
    "id": "PHYS 446",
    "title": "Modern Computational Physics",
    "creditHours": 3,
    "maxCreditHours": 3,
    "requirement": "required",
    "termsOffered": [
      "Spring 2027",
      "Fall 2026",
      "Spring 2026",
      "Fall 2025",
      "Spring 2025"
    ],
    "genEds": [],
    "prerequisiteText": "PHYS 246."
  },
  {
    "id": "PHYS 485",
    "title": "Atomic Phys & Quantum Theory",
    "creditHours": 3,
    "maxCreditHours": 3,
    "requirement": "required",
    "termsOffered": [
      "Fall 2026",
      "Fall 2025",
      "Fall 2024"
    ],
    "genEds": [],
    "prerequisiteText": "PHYS 325. Credit or concurrent registration in PHYS 435."
  },
  {
    "id": "PHYS 486",
    "title": "Quantum Physics I",
    "creditHours": 4,
    "maxCreditHours": 4,
    "requirement": "required",
    "termsOffered": [
      "Spring 2027",
      "Fall 2026",
      "Spring 2026",
      "Fall 2025",
      "Spring 2025",
      "Fall 2024"
    ],
    "genEds": [],
    "prerequisiteText": "PHYS 214 and PHYS 435 or ECE 329."
  },
  {
    "id": "PSYC 100",
    "title": "Intro Psych",
    "creditHours": 4,
    "maxCreditHours": 4,
    "requirement": "required",
    "termsOffered": [
      "Spring 2027",
      "Winter 2027",
      "Fall 2026",
      "Summer 2026",
      "Spring 2026",
      "Winter 2026",
      "Fall 2025",
      "Summer 2025",
      "Spring 2025",
      "Winter 2025",
      "Fall 2024"
    ],
    "genEds": [
      "Social & Beh Sci - Beh Sci"
    ],
    "prerequisiteText": ""
  },
  {
    "id": "SE 100",
    "title": "Introduction to ISE",
    "creditHours": 1,
    "maxCreditHours": 1,
    "requirement": "required",
    "termsOffered": [
      "Fall 2026",
      "Fall 2025",
      "Fall 2024"
    ],
    "genEds": [],
    "prerequisiteText": ""
  },
  {
    "id": "SE 101",
    "title": "Engineering Graphics & Design",
    "creditHours": 3,
    "maxCreditHours": 3,
    "requirement": "required",
    "termsOffered": [
      "Spring 2027",
      "Fall 2026",
      "Spring 2026",
      "Fall 2025",
      "Spring 2025",
      "Fall 2024"
    ],
    "genEds": [],
    "prerequisiteText": ""
  },
  {
    "id": "SE 261",
    "title": "Business Side of Engineering",
    "creditHours": 2,
    "maxCreditHours": 2,
    "requirement": "required",
    "termsOffered": [
      "Spring 2027",
      "Fall 2026",
      "Spring 2026",
      "Fall 2025",
      "Spring 2025",
      "Fall 2024"
    ],
    "genEds": [],
    "prerequisiteText": ""
  },
  {
    "id": "SE 290",
    "title": "ISE Undergraduate Seminar",
    "creditHours": 0,
    "maxCreditHours": 0,
    "requirement": "required",
    "termsOffered": [
      "Spring 2027",
      "Fall 2026",
      "Spring 2026",
      "Fall 2025",
      "Spring 2025",
      "Fall 2024"
    ],
    "genEds": [],
    "prerequisiteText": ""
  },
  {
    "id": "SE 310",
    "title": "Design of Structures and Mechanisms",
    "creditHours": 3,
    "maxCreditHours": 3,
    "requirement": "required",
    "termsOffered": [
      "Spring 2027",
      "Fall 2026",
      "Spring 2026",
      "Fall 2025",
      "Spring 2025",
      "Fall 2024"
    ],
    "genEds": [],
    "prerequisiteText": "CS 101 or CS 124, TAM 212, and TAM 251. Credit or concurrent enrollment in MATH 257 or MATH 415."
  },
  {
    "id": "SE 311",
    "title": "Engineering Design Analysis",
    "creditHours": 3,
    "maxCreditHours": 3,
    "requirement": "required",
    "termsOffered": [
      "Spring 2027",
      "Spring 2026",
      "Spring 2025"
    ],
    "genEds": [],
    "prerequisiteText": "SE 310; concurrent registration in SE 312."
  },
  {
    "id": "SE 312",
    "title": "Instrumentation and Test Lab",
    "creditHours": 1,
    "maxCreditHours": 1,
    "requirement": "required",
    "termsOffered": [
      "Spring 2027",
      "Spring 2026",
      "Spring 2025"
    ],
    "genEds": [],
    "prerequisiteText": "SE 310; concurrent registration in SE 311."
  },
  {
    "id": "SE 320",
    "title": "Control Systems",
    "creditHours": 4,
    "maxCreditHours": 4,
    "requirement": "required",
    "termsOffered": [
      "Spring 2027",
      "Fall 2026",
      "Spring 2026",
      "Fall 2025",
      "Fall 2024"
    ],
    "genEds": [],
    "prerequisiteText": "CS 101 or CS 124, MATH 285, and TAM 212; credit or concurrent registration in ECE 211."
  },
  {
    "id": "SE 424",
    "title": "State Space Design for Control",
    "creditHours": 3,
    "maxCreditHours": 3,
    "requirement": "required",
    "termsOffered": [
      "Spring 2027",
      "Spring 2026",
      "Spring 2025"
    ],
    "genEds": [],
    "prerequisiteText": "SE 320 and MATH 257 or MATH 415."
  },
  {
    "id": "STAT 107",
    "title": "Data Science Discovery",
    "creditHours": 4,
    "maxCreditHours": 4,
    "requirement": "required",
    "termsOffered": [
      "Spring 2027",
      "Fall 2026",
      "Spring 2026",
      "Fall 2025",
      "Spring 2025",
      "Fall 2024"
    ],
    "genEds": [
      "Quantitative Reasoning I"
    ],
    "prerequisiteText": ""
  },
  {
    "id": "STAT 207",
    "title": "Data Science Exploration",
    "creditHours": 4,
    "maxCreditHours": 4,
    "requirement": "required",
    "termsOffered": [
      "Spring 2027",
      "Fall 2026",
      "Spring 2026",
      "Fall 2025",
      "Spring 2025",
      "Fall 2024"
    ],
    "genEds": [
      "Quantitative Reasoning II"
    ],
    "prerequisiteText": "STAT 107."
  },
  {
    "id": "STAT 400",
    "title": "Statistics and Probability I",
    "creditHours": 4,
    "maxCreditHours": 4,
    "requirement": "required",
    "termsOffered": [
      "Spring 2027",
      "Fall 2026",
      "Summer 2026",
      "Spring 2026",
      "Fall 2025",
      "Summer 2025",
      "Spring 2025",
      "Fall 2024"
    ],
    "genEds": [],
    "prerequisiteText": "MATH 231. Not intended for first-time freshmen."
  },
  {
    "id": "TAM 195",
    "title": "Mechanics in the Modern World",
    "creditHours": 1,
    "maxCreditHours": 1,
    "requirement": "required",
    "termsOffered": [
      "Fall 2026",
      "Fall 2025",
      "Fall 2024"
    ],
    "genEds": [],
    "prerequisiteText": ""
  },
  {
    "id": "TAM 210",
    "title": "Introduction to Statics",
    "creditHours": 2,
    "maxCreditHours": 2,
    "requirement": "required",
    "termsOffered": [
      "Spring 2027",
      "Fall 2026",
      "Summer 2026",
      "Spring 2026",
      "Fall 2025",
      "Summer 2025",
      "Spring 2025",
      "Fall 2024"
    ],
    "genEds": [],
    "prerequisiteText": "PHYS 211; CS 101, CS 124, or ECE 220; credit or concurrent registration in either MATH 257 OR MATH 241."
  },
  {
    "id": "TAM 211",
    "title": "Statics",
    "creditHours": 3,
    "maxCreditHours": 3,
    "requirement": "required",
    "termsOffered": [
      "Spring 2027",
      "Fall 2026",
      "Summer 2026",
      "Spring 2026",
      "Fall 2025",
      "Summer 2025",
      "Spring 2025",
      "Fall 2024"
    ],
    "genEds": [],
    "prerequisiteText": "PHYS 211; CS 101, CS 124, or ECE 220; credit or concurrent registration in either MATH 257 or MATH 241."
  },
  {
    "id": "TAM 212",
    "title": "Introductory Dynamics",
    "creditHours": 3,
    "maxCreditHours": 3,
    "requirement": "required",
    "termsOffered": [
      "Spring 2027",
      "Fall 2026",
      "Summer 2026",
      "Spring 2026",
      "Fall 2025",
      "Summer 2025",
      "Spring 2025",
      "Fall 2024"
    ],
    "genEds": [],
    "prerequisiteText": "TAM 210 or TAM 211."
  },
  {
    "id": "TAM 251",
    "title": "Introductory Solid Mechanics",
    "creditHours": 3,
    "maxCreditHours": 3,
    "requirement": "required",
    "termsOffered": [
      "Spring 2027",
      "Fall 2026",
      "Summer 2026",
      "Spring 2026",
      "Fall 2025",
      "Summer 2025",
      "Spring 2025",
      "Fall 2024"
    ],
    "genEds": [],
    "prerequisiteText": "TAM 210 or TAM 211."
  },
  {
    "id": "TAM 252",
    "title": "Solid Mechanics Design",
    "creditHours": 1,
    "maxCreditHours": 1,
    "requirement": "required",
    "termsOffered": [
      "Spring 2027",
      "Spring 2026",
      "Spring 2025"
    ],
    "genEds": [],
    "prerequisiteText": "Credit or concurrent registration in TAM 251."
  },
  {
    "id": "TAM 270",
    "title": "Design for Manufacturability",
    "creditHours": 3,
    "maxCreditHours": 3,
    "requirement": "required",
    "termsOffered": [
      "Spring 2027",
      "Fall 2026",
      "Spring 2026",
      "Fall 2025",
      "Spring 2025",
      "Fall 2024"
    ],
    "genEds": [],
    "prerequisiteText": ""
  },
  {
    "id": "TAM 324",
    "title": "Behavior of Materials",
    "creditHours": 4,
    "maxCreditHours": 4,
    "requirement": "required",
    "termsOffered": [
      "Spring 2027",
      "Fall 2026",
      "Spring 2026",
      "Fall 2025",
      "Spring 2025",
      "Fall 2024"
    ],
    "genEds": [
      "Advanced Composition"
    ],
    "prerequisiteText": ""
  },
  {
    "id": "TAM 335",
    "title": "Introductory Fluid Mechanics",
    "creditHours": 4,
    "maxCreditHours": 4,
    "requirement": "required",
    "termsOffered": [
      "Spring 2027",
      "Fall 2026",
      "Summer 2026",
      "Spring 2026",
      "Fall 2025",
      "Summer 2025",
      "Spring 2025",
      "Fall 2024"
    ],
    "genEds": [],
    "prerequisiteText": "TAM 212 or PHYS 325."
  },
  {
    "id": "TAM 412",
    "title": "Intermediate Dynamics",
    "creditHours": 4,
    "maxCreditHours": 4,
    "requirement": "required",
    "termsOffered": [
      "Spring 2027",
      "Spring 2026",
      "Spring 2025"
    ],
    "genEds": [],
    "prerequisiteText": "MATH 225 or MATH 257 or MATH 415; MATH 285 or MATH 441; TAM 212."
  },
  {
    "id": "TAM 445",
    "title": "Continuum Mechanics",
    "creditHours": 4,
    "maxCreditHours": 4,
    "requirement": "required",
    "termsOffered": [
      "Spring 2027",
      "Spring 2026",
      "Spring 2025"
    ],
    "genEds": [],
    "prerequisiteText": "TAM 251."
  },
  {
    "id": "TAM 470",
    "title": "Computational Mechanics",
    "creditHours": 3,
    "maxCreditHours": 3,
    "requirement": "required",
    "termsOffered": [
      "Fall 2026",
      "Fall 2025",
      "Fall 2024"
    ],
    "genEds": [],
    "prerequisiteText": "CS 101 or CS 124 or ECE 220; MATH 285 or MATH 441."
  }
];
