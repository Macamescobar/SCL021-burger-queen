import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { createOrder } from "../../firebase/firestore";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function OrderSection({ cartItems, setCartItems }) {
  const [customerName, setCustomer] = useState("");
  const [tableNumberVal, setTableNumberVal] = useState(1);
  const [showAlert, setShowAlert] = useState(false);
  const [waitressNotes, setwaitressNotes] = useState("");


  // Función que guarda el nombre del cliente
  function handleChange(e) {
    setCustomer(e.target.value);
  }

  //Función que guarda el número de mesa
  const tableNumber = (e) => {
    setTableNumberVal(e.target.value);
  };

  // Función que guarda notas del pedido
  const notes = (e) => {
    setwaitressNotes(e.target.value);
    console.log(e.target.value);
  };

  // Borrar productos del carrito
  const deleteCartItem = (item) => {
    //console.log(item);
    setCartItems(cartItems.filter((productItem) => productItem.item !== item));
  }; 

  //Calular el total del carrito
  const totalPrice = cartItems.reduce(
    (price, item) => price + item.quantity * item.price,
    0
  );

  // Función para agregar más productos desde la orden
  const handleAdd = (itemName) => {
    setCartItems(
      cartItems.map((dish) =>
        dish.item === itemName ? { ...dish, quantity: dish.quantity + 1 } : dish
      )
    );
  };

  // Función para remover productos desde la orden
  const handleLess = (itemName) => {
    setCartItems(
      cartItems.map((dish) =>
        dish.item === itemName
          ? { ...dish, quantity: dish.quantity - 1 < 1 ? 1 : dish.quantity - 1 }
          : dish
      )
    );
  };
  // Alerta de orden exitosa
  const generateAndCreateOrder = async () => {
    const saveOrder = await createOrder(
      customerName,
      totalPrice,
      tableNumberVal,
      cartItems,
      waitressNotes
    );
    if (saveOrder) {
      setShowAlert(true);
      setTimeout(() => setShowAlert(false), 3000);
    }
  };

  return (
    <div className="order-section-container">
      {<p className="title-order">Your order summary</p>}
      {/* Mapear cada elemeno dentro del menu */}
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
              {" "}
              -{" "}
            </button>
            <input
              type="number"
              className="input-number"
              value={quantity}
            ></input>
            <button className="btn-add-food" onClick={() => handleAdd(item)}>
              {" "}
              +{" "}
            </button>
          </div>
          <div className="price-order">${price * quantity}</div>
          <div className="icon-trash">x
            <FontAwesomeIcon
              icon={faTrash}
              onClick={() => deleteCartItem(item)}
            />
          </div>
        </div>
      ))}
      {
        <div className="total-price">
          <p>Total:</p>
          <div>
            <p>${totalPrice}</p>
          </div>
        </div>
      }
      {
        <div className="container-form-customer">
          <div>
            <p> Customer </p>
            <input type="text" onChange={handleChange}></input>
          </div>
          <div>
            {" "}
            <p> Table number </p>
            <input type="text" onChange={tableNumber}></input>
          </div>
        </div>
      }
      {
        <div className="notes">
          <p> Notes </p>
          <textarea type="text" onChange={notes}></textarea>
        </div>
      }
      {
        <div className="btn-order-customer">
          <button
            className="btn-submit"
            onClick={() => generateAndCreateOrder()}
          >
            Submit
          </button>
          <div>
            <Link to="/kitchen">
              <button className="btn-order">Orders</button>
            </Link>
            <div className="icon-arrow">
              <FontAwesomeIcon icon={faArrowRight} />
            </div>
          </div>
        </div>
      }
      {
        <div className="container-alert">
          {showAlert ? (
            <div className="alert-order"> Order create successfully </div>
          ) : null}
        </div>
      }
    </div>
  );
}
