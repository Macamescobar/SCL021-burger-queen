import { collection, addDoc } from "firebase/firestore";
import { db } from "./firebase-config";

export const createOrder = async () => {
  try {
    const docRef = await addDoc(collection(db, "order"), {
      items: "hola",
      totalPrice: "Lovelace",
      customer: 1815,
      tableNumber: 1,
    });
    alert("Order create successfully 🎉")
    console.log("Document written with ID: ", docRef.id);
  } catch (e) {
    console.error("Error adding document: ", e);
  }
};
