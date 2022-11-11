import { Box } from "@mui/system";
import { useEffect, useState } from "react";
import { getDataFromFirestore } from "../../firebase/firestore";
import { OrderDetails } from "./OrderDetails";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

export const KitchenOrder = () => {
  const [orders, setOrders] = useState([]);


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

  // const changeOrderStatusInKitchen = (e) => {
    
  // }
 

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
            {orders.map(({ customer, totalPrice, tableNumber, status}, index) => (
              <div className="items-order-kitchen" key={index}>
                <p> #{tableNumber} </p>
                <p className="customer-order">{customer}</p>
                <p> ${totalPrice}</p>
                <p>{status}</p>
                <select className="select-status">
                  <option value="Default"> </option>
                  <option value="In process"> In process⏳</option>
                  <option value="Ready"> Ready✅ </option>
                </select>
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
