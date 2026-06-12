import {
  collection,
  getDocs,
  addDoc,
} from "firebase/firestore";

import { db } from "../firebase/config";

export const getAttendanceRecords =
  async () => {
    const attendanceRef =
      collection(db, "attendance");

    const snapshot =
      await getDocs(attendanceRef);

    return snapshot.docs.map((doc) => ({
      studentId:
        doc.data().studentId,
      date:
        doc.data().date,
      status:
        doc.data().status,
    }));
  };

export const saveAttendance =
  async (
    studentId: number,
    date: string,
    status: string
  ) => {
    await addDoc(
      collection(db, "attendance"),
      {
        studentId,
        date,
        status,
      }
    );
  };