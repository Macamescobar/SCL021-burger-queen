import { collection, addDoc, getDocs } from "firebase/firestore";
import { db } from "./firebase-config";

// Función que envía la orden a firestore
export const createOrder = async (
  customerName,
  totalPrice,
  tableNumber,
  cartItems
) => {
  try {
    const docRef = await addDoc(collection(db, "order"), {
      items: cartItems,
      totalPrice: totalPrice,
      customer: customerName,
      tableNumber: tableNumber,
    });
    return docRef;
    // console.log("Document written with ID: ", docRef.id);
  } catch (e) {
    console.error("Error adding document: ", e);
  }
};

// Función para obtener toda la colección desde firestore
export const getDataFromFirestore = async () => {
  
  const querySnapshot = await getDocs(collection(db, "order"));
  return querySnapshot;
};

