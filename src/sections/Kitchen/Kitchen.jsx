import { Box } from "@mui/system";
import { useEffect, useState } from "react";
import { getDataFromFirestore } from "../../firebase/firestore";
import { OrderDetails } from "./OrderDetails";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

export const KitchenOrder = () => {
  const [orders, setOrders] = useState([]);

  //const [IsGetOrderAvailable, setIsGetOrderAvailable] = useState(false)

  useEffect(() => {
    const getOrders = async () => {
      const querySnapshot = await getDataFromFirestore();
      let ordersKitchen = [];
      querySnapshot.forEach((doc) => {
        let order = { id: doc.id, ...doc.data() };
        ordersKitchen.push(order);
      });
      setOrders(ordersKitchen);
      console.log(ordersKitchen);
      //setIsGetOrderAvailable(true)
    };
    getOrders();
  }, []);

  return (
    <>
      <div className="container-home-page">
        <Box sx={{ display: "flex", padding: 1 }}>
          <div className="container-kitchen">
            <div className="title-kitchen">
              <p> List of orders </p>
            </div>
            <div className="table-orders">
              <p> Table n°</p>
              <p> Customer </p>
              <p> Grand total </p>
              <p> Status </p>
              <p> Delete </p>
            </div>
            {orders.map(({ customer, totalPrice, tableNumber }, index) => (
              <div className="items-order-kitchen" key={index}>
                <p> #{tableNumber} </p>
                <p>{customer}</p>
                <p>{totalPrice}</p>
                <p>Satus</p>
                <div className="btn-delete-order"> <FontAwesomeIcon icon={faTrash}/></div>
              </div>
            ))}
          </div>
          <OrderDetails></OrderDetails>
        </Box>
      </div>
    </>
  );
};
