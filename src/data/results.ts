export let resultsData = [
  {
    studentId: 1,
    subject: "Mathematics",
    marks: 95,
  },
  {
    studentId: 1,
    subject: "Science",
    marks: 89,
  },
  {
    studentId: 1,
    subject: "English",
    marks: 91,
  },
  {
    studentId: 1,
    subject: "Social",
    marks: 87,
  },
  {
    studentId: 1,
    subject: "Computer",
    marks: 98,
  },
];

export const addResult = (
  studentId: number,
  subject: string,
  marks: number
) => {
  resultsData.push({
    studentId,
    subject,
    marks,
  });
};