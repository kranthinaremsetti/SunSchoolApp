import {
  collection,
  getDocs,
} from "firebase/firestore";

import { db } from "../firebase/config";

export const getFees = async () => {
  const feesRef =
    collection(db, "fees");

  const snapshot =
    await getDocs(feesRef);
  console.log(
  "Fee Docs:",
  snapshot.docs.length
);
  return snapshot.docs.map((doc) => ({
    firestoreId: doc.id,
    studentId:
      doc.data().studentId,
    totalFee:
      doc.data().totalFee,
    paidAmount:
      doc.data().paidAmount,
    dueAmount:
      doc.data().dueAmount,
    dueDate:
      doc.data().dueDate,
  }));
};