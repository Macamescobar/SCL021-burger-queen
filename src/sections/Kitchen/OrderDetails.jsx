import { Link } from "react-router-dom";

export const OrderDetails = ({orders}) => {

  
  return (
    <>
      <div className="order-section-container">
        <p className="title-order"> Order Details </p>
        {orders.map(({items}, index) => (
            <p key={index}> {items}</p>
        ))}
        <Link to="/">
          <button className="btn-back"> Back </button>
        </Link>
      </div>
    </>
  );
};
