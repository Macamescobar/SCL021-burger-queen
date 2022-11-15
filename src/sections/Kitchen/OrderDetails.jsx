import { Link } from "react-router-dom";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const OrderDetails = ({ order }) => {
  return (
    <>
      <div className="order-section-container">
        <p className="title-order"> Order Details </p>
        
        <div className="container-description">
          <div className="item-description"> Item </div>
          <div> Quantity </div>
          <div> Price </div>
        </div>
        {order && (
          <>
            {order.items.map((item, index) => (
              <div className="order-details">
                <div key={index}> {item.item} </div>
                <div> {item.quantity} </div>
                <div className="price-order-details"> ${item.price} </div>
              </div>
            ))}
            <div className="customer-order-details"> Customer: {order.customer} </div>
          </>
          
        )}
        <Link to="/">
          <button className="btn-back"> <FontAwesomeIcon icon={faArrowLeft}/> Back  </button>
        </Link>
      </div>
    </>
  );
};
