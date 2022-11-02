import { Container } from "@mui/material";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'

export default function OrderSection({ cartItems }) {
  //console.log(cartItems);
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
      {cartItems.map(({ item, price }, index) => (
        <div className="container-order" key={index}>
          <div className="item-order-left">
            <p>{item}</p>
          </div>
          <div>
            <button className="btn-remove-food">-</button>
            <input className="input-number" type="number" min="1"></input>
            <button className="btn-add-food">+</button>
          </div>
          <div className="price-order">${price}</div>
          <div className="icon-trash"> <FontAwesomeIcon icon={faTrash} /></div>
        </div>
      ))}
    </Container>
  );
}

