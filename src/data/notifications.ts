export let notifications = [];

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