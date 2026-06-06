export let attendanceRecords = [];

export const addAttendanceRecord = (
  studentId: number,
  date: string,
  status: string
) => {
  attendanceRecords.push({
    studentId,
    date,
    status,
  });
};