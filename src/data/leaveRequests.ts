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

export const updateLeaveStatus = (
  id: number,
  status: string
) => {
  const leave = leaveRequests.find(
    (item) => item.id === id
  );

  if (leave) {
    leave.status = status;
  }
};