import { Box } from "@mui/system";
import { useEffect, useState } from "react";
import {
  changeStatusInKitchenToFirestore,
  deleteOrderInKitchen,
  getDataFromFirestore,
} from "../../firebase/firestore";
import { OrderDetails } from "./OrderDetails";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash,faEye } from "@fortawesome/free-solid-svg-icons";
import { db } from "../../firebase/firebase-config";
import { collection, onSnapshot, orderBy, query } from "firebase/firestore";

export const KitchenOrder = () => {
  const [orders, setOrders] = useState([]);
  const [selectedId, setselectedId] = useState(null);

  // Obtener la data desde firestore
  useEffect(() => {
    const getOrders = async () => {
      const querySnapshot = await getDataFromFirestore();
      let ordersKitchen = [];
      querySnapshot.forEach((doc) => {
        let order = { id: doc.id, ...doc.data() };
        ordersKitchen.push(order);
      });
      setOrders(ordersKitchen);
      //console.log(ordersKitchen);
    };
    getOrders();
  }, []);

  // Ordenar los pedidos según orden de llegada
  useEffect(() => {
    const collectionRef = collection(db, "order");
    const q = query(collectionRef, orderBy("timestamp", "desc"));

    const unsub = onSnapshot(q, (snapshot) =>
      setOrders(snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
    );
    return unsub;
  }, []);

  // Función para eliminar una orden en cocina por el id
  const deleteOrder = (id) => {
    deleteOrderInKitchen(id);
    var elementsWithoutObjectDeleted = orders.filter(
      (order) => id !== order.id
    );
    setOrders(elementsWithoutObjectDeleted);
  };

  // Cambiar estados en cocina
  const changeStatusInKitchen = (e, id) => {
    const valueSelect = e.target.value;
    changeStatusInKitchenToFirestore(id, valueSelect)
  };

  //Seleccionar el id de cada doc para mostrar el detalle de la orden

  const getIdInOrderKitchen = (e, id) => {
    const foundId = orders.find(order => order.id === id);
    //console.log(foundId);
    setselectedId(foundId)
  }
  
  return (
    <>
      <div className="container-home-page">
        <Box sx={{ display: "flex", padding: 1 }}>
          <div className="container-kitchen">
            <div className="title-kitchen">
              <p> List of orders </p>
            </div>
            <div>
              <div className="table-orders">
                <p> Table n°</p>
                <p> Customer </p>
                <p> Grand total </p>
                <p> Status </p>
                <p> Change status </p>
                <p> Delete </p>
              </div>
            </div>
            {orders.map(
              ({ id, customer, totalPrice, tableNumber, status }, index) => (
                <div className="items-order-kitchen" key={index}>
                  <p> #{tableNumber}<button className="btn-eye" onClick={(e) => getIdInOrderKitchen(e,id)}><FontAwesomeIcon
                      icon={faEye}/></button> </p>
                  <p className="customer-order">{customer}</p>
                  <p> ${totalPrice}</p>
                  <p>{status}</p>
                  <select
                    className="select-status"
                    onChange={(e) => changeStatusInKitchen(e, id)}
                  >
                    <option value="Default"> </option>
                    <option value="In process"> In process ⏳</option>
                    <option value="Ready"> Ready ✅ </option>
                  </select>
                  <div className="btn-delete-order">
                    <FontAwesomeIcon
                      icon={faTrash}
                      onClick={() => deleteOrder(id)}
                    />
                  </div>
                </div>
              )
            )}
          </div>
          <OrderDetails order={selectedId}></OrderDetails>
        </Box>
      </div>
    </>
  );
};
