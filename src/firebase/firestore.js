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

// Función para obtener toda la colacción desde firestore
export const getDataFromFirestore = async () => {
  const querySnapshot = await getDocs(collection(db, "order"));
  querySnapshot.forEach((doc) => {
    // doc.data() is never undefined for query doc snapshots
    console.log(doc.id, " => ", doc.data())
  })
};

getDataFromFirestore()
