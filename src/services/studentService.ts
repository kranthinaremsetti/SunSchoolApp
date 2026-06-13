import {
  collection,
  getDocs,
} from "firebase/firestore";

import { db } from "../firebase/config";

export const getStudents = async () => {
  const studentsRef =
    collection(db, "students");

  const snapshot =
    await getDocs(studentsRef);
  console.log(
  "Student Docs:",
  snapshot.docs.length
);
  return snapshot.docs.map((doc) => ({
    id: doc.data().id,
    name: doc.data().name,
    className:
      doc.data().className,
    rollNo: doc.data().rollNo,
    parentId:
      doc.data().parentId,
  }));
};