import {
  collection,
  addDoc,
  getDocs,
  doc,
  deleteDoc,
  serverTimestamp, updateDoc
} from "firebase/firestore";
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
      status: "New...",
      timestamp: serverTimestamp()
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

//Función para borrar documentos de la lista de órdenes
export const deleteOrderInKitchen = async (id) => {
  await deleteDoc(doc(db, "order", id));
};

// Función para cambiar el status de orden

export const changeStatusInKitchenToFirestore = async (id,statusValue) => {
  const docRef = doc(db, "order", id);
  updateDoc(docRef, {status: statusValue})
  .then(docRef => {
    console.log("Document Field has been updated successfully")
  })
  .catch(error => {
    console.log(error);
  })
}

