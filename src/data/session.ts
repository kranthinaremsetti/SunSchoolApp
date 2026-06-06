export let currentStudentId: number | null = null;
export const setCurrentStudentId = (
  id: number
) => {
  currentStudentId = id;
};