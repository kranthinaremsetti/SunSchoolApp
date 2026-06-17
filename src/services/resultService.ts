import {
  collection,
  getDocs,
  addDoc,
} from "firebase/firestore";

import { db } from "../firebase/firebaseConfig";

export const getResults = async () => {
  const resultsRef =
    collection(db, "results");

  const snapshot =
    await getDocs(resultsRef);

  return snapshot.docs.map((doc) => ({
    studentId:
      doc.data().studentId,
    subject:
      doc.data().subject,
    marks:
      doc.data().marks,
  }));
};

export const saveResult = async (
  studentId: number,
  subject: string,
  marks: number
) => {
  await addDoc(
    collection(db, "results"),
    {
      studentId,
      subject,
      marks,
    }
  );
};