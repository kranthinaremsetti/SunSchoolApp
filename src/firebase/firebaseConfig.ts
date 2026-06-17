import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAx7lEEYb7cBdh_VCl5Mq9IzikdfZ8rqmg",
  authDomain: "sunschoolmanagement.firebaseapp.com",
  projectId: "sunschoolmanagement",
  storageBucket: "sunschoolmanagement.firebasestorage.app",
  messagingSenderId: "568314154094",
  appId: "1:568314154094:web:6e39c1e771acbc9aefaa7f",
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);