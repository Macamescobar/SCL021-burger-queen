import { Container } from "@mui/material";
import { useState } from "react";
import menu from "../../data/menu.json";
import OrderSection from "../OrderSection/OrderSection";
import handleAddProduct from "../OrderSection/OrderSection"


export default function FoodSection({ selected}) {
  //Encontrar según categoría seleccionada
  const option = menu.find((item) => item.category_name === selected);
  //console.log(option);

  // Acceder a la categoría y obtener items
  const menuItems = option.items;
  //console.log(menuItems)

  const [cartItems, setCartItems] = useState([]);

  const handleAddProduct = (product) => {
    //console.log(product);
    const ProductExist = cartItems.find((dish) => dish.item === product.item);
    if (ProductExist) {
      setCartItems(
        cartItems.map((dish) => 
          dish.item === product.item
            ? { ...ProductExist, quantity: ProductExist.quantity + 1 }
            : dish
        )
      );
    } else {
      setCartItems([...cartItems, { ...product, quantity: 1 }]);
    }
  }

  return (
    <>
      <Container
        sx={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          alignItems: "center",
          justifyContent: "center",
          gap: 1,
          width: "90vw",
          bgcolor: "#DEE8FF",
          boxShadow: "1px 3px 1px #9E9E9E",
          borderRadius: 10,
          height: "85vh",
        }}
      >
        {
        menuItems.map(({ item, price, description, picture }, index) => (
          <div className="cards-menu" key={index}>
            <img className="food-picture" alt="menu" src={picture} />
            <div className="item-title">
              <p key={index}>{item}</p>
            </div>
            <div className="description-item">
              <p>{description}</p>
            </div>
            <div className="price-item">
              <p>${price}.00</p>
            </div>
            <button className="btn-add" onClick={() => handleAddProduct({item, price})}>Add</button>
          </div>
        ))}
      </Container>
      <OrderSection selected={selected} cartItems={cartItems}></OrderSection>
    </>
  );
}
