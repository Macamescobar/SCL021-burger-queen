import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


//  Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC-MXyzwBvDf0RuGLWVH47DOWy8daWrvYo",
  authDomain: "burger-queen-bcbdb.firebaseapp.com",
  projectId: "burger-queen-bcbdb",
  storageBucket: "burger-queen-bcbdb.appspot.com",
  messagingSenderId: "987896168300",
  appId: "1:987896168300:web:0d2be94fdeac87f63a7d49"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);