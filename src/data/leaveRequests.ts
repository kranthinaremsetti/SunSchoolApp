export let leaveRequests = [];

export const addLeaveRequest = (
  studentId: number,
  reason: string,
  fromDate: string,
  toDate: string
) => {
  leaveRequests.push({
    id: Date.now(),
    studentId,
    reason,
    fromDate,
    toDate,
    status: "Pending",
  });
};