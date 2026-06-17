import {
  collection,
  getDocs,
  addDoc,
} from "firebase/firestore";

import { db } from "../firebase/firebaseConfig";

export const getHomework = async () => {
  const homeworkRef =
    collection(db, "homework");

  const snapshot =
    await getDocs(homeworkRef);

  return snapshot.docs.map((doc) => ({
    firestoreId: doc.id,
    className:
      doc.data().className,
    subject:
      doc.data().subject,
    task:
      doc.data().task,
    dueDate:
      doc.data().dueDate,
  }));
};

export const saveHomework = async (
  className: string,
  subject: string,
  task: string,
  dueDate: string
) => {
  await addDoc(
    collection(db, "homework"),
    {
      className,
      subject,
      task,
      dueDate,
    }
  );
};