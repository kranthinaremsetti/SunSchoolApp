export let notifications = [
  {
    id: 1,
    studentId: 1,
    title: "Welcome",
    message: "Welcome to Sun School App",
  },
];

export const addNotification = (
  studentId: number,
  title: string,
  message: string
) => {
  notifications.push({
    id: Date.now(),
    studentId,
    title,
    message,
  });
};