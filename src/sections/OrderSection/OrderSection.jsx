import { Container } from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faArrowRight } from "@fortawesome/free-solid-svg-icons";


export default function OrderSection({ cartItems, setCartItems }) {
  //console.log(cartItems);

  // Borrar productos del carrito
  const deleteCartItem = (item) => {
    //console.log(item);
    setCartItems(cartItems.filter(productItem => productItem.item !== item))
    //console.log(cartItems.filter(productItem => productItem.item !== item))
  }

  //Calular el total del carrito
  const totalPrice = cartItems.reduce((price, item) => price + item.quantity * item.price, 0)

  // Función para agregar más productos desde la orden
  const handleAdd = (itemName) => {
    setCartItems(
      cartItems.map((dish) =>
        dish.item === itemName
          ? { ...dish, quantity: dish.quantity + 1 }
          : dish
      )
    );
  };

  // Función para remover productos desde la orden
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
            > - </button>
            <input
              type="number"
              className="input-number"
              value={quantity}
            ></input>
            <button
              className="btn-add-food"
              onClick={() => handleAdd(item)}
            > + </button>
          </div>
          <div className="price-order">${price * quantity}</div>
          <div className="icon-trash">
            <FontAwesomeIcon icon={faTrash} onClick={() => deleteCartItem(item)}/>
          </div>
        </div>
      ))}
      {<div className="total-price">
        <p>Total:</p>
        <div><p>${totalPrice}</p></div>
      </div>}
      {
        <div className="container-form-customer">
          <p> Customer </p>
          <input type="text"></input>
          <p> Table number </p>
          <input type="text"></input>
        </div>
      }
      {
        <div className="btn-order-customer">
          <button className="btn-submit">Submit</button>
          <div>
          <button className="btn-order" >Orders</button>
          <div className="icon-arrow"><FontAwesomeIcon icon={faArrowRight} /></div>
          </div>
          
        </div>
      }
    </Container>
  );
}
