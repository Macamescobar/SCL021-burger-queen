import { collection, addDoc } from "firebase/firestore";
import { db } from "./firebase-config";


export const createOrder = async (customerName,totalPrice,tableNumber,cartItems )=> {
  try {
    const docRef = await addDoc(collection(db, "order"), {
      items: cartItems,
      totalPrice: totalPrice,
      customer: customerName,
      tableNumber: tableNumber,
    });
    return docRef
    // console.log("Document written with ID: ", docRef.id);
  } catch (e) {
    console.error("Error adding document: ", e);
  }
};

