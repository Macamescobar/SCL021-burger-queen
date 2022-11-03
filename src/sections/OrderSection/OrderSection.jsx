import { Container } from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

export default function OrderSection({ cartItems, setCartItems }) {
  console.log(cartItems);

  const handleAdd = (itemName) => {
    setCartItems(
      cartItems.map((dish) =>
        dish.item === itemName
          ? { ...dish, quantity: dish.quantity + 1 }
          : dish
      )
    );
  };

  const handleLess = (itemName) => {
    setCartItems(
      cartItems.map((dish) =>
        dish.item === itemName
          ? { ...dish, quantity: dish.quantity - 1 < 1  ? 1 : dish.quantity -1}
          : dish
      )
    );
  };

  return (
    <Container
      sx={{
        width: "40vw",
        bgcolor: "#FFFFFF",
        boxShadow: "1px 3px 1px #9E9E9E",
        borderRadius: 10,
        fontSize: "1rem",
        fontWeight: "700",
        height: "85vh",
      }}
    >
      {<p className="title-order">Your order summary</p>}
      {cartItems.map(({ item, price, quantity }, index) => (
        <div className="container-order" key={index}>
          <div className="item-order-left">
            <p>{item}</p>
          </div>
          <div>
            <button
              className="btn-remove-food"
              onClick={() => handleLess(item)}
            >
              -
            </button>
            <input
              type="number"
              className="input-number"
              min="1"
              value={quantity}
            ></input>
            <button
              className="btn-add-food"
              onClick={() => handleAdd(item)}
            >
              {" "}
              +{" "}
            </button>
          </div>
          <div className="price-order">${price * quantity}</div>
          <div className="icon-trash">
            <FontAwesomeIcon icon={faTrash} />
          </div>
        </div>
      ))}
      {<p className="total-price">Total:</p>}
      {
        <div className="container-form-customer">
          <p className="customer-order"> Customer </p>
          <input type="text"></input>
          <p> Table Number </p>
          <input type="text"></input>
        </div>
      }
      {
        <div className="btn-order-customer">
          <button className="btn-submit">Submit</button>
          <button className="btn-order">Orders</button>
        </div>
      }
    </Container>
  );
}
