export let homeworkData = [
  {
    id: 1,
    className: "5th Class",
    subject: "Mathematics",
    task: "Complete Exercise 4.2",
    dueDate: "2026-06-10",
  },
  {
    id: 2,
    className: "5th Class",
    subject: "Science",
    task: "Read Chapter 3 and write notes",
    dueDate: "2026-06-11",
  },
  {
    id: 3,
    className: "5th Class",
    subject: "English",
    task: "Write an essay on My School",
    dueDate: "2026-06-12",
  },
];

export const addHomework = (
  className: string,
  subject: string,
  task: string,
  dueDate: string
) => {
  homeworkData.push({
    id: Date.now(),
    className,
    subject,
    task,
    dueDate,
  });
};