import {
  collection,
  getDocs,
  addDoc,
} from "firebase/firestore";

import { db } from "../firebase/firebaseConfig";
export const saveStudent = async (
  name: string,
  className: string,
  rollNo: number,
  parentId: number
) => {
  console.log("Saving student...");

  const students =
    await getStudents();

  const nextId =
    students.length + 1;

  console.log(
    "Next Student ID:",
    nextId
  );

  await addDoc(
    collection(db, "students"),
    {
      id: nextId,
      name,
      className,
      rollNo,
      parentId,
    }
  );

  console.log(
    "Student Saved Successfully"
  );
};
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