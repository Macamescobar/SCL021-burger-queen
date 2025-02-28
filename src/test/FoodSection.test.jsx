
import { BrowserRouter as Router } from "react-router-dom";
import { render, screen, within } from "@testing-library/react";
import OrderSection from "../sections/OrderSection/OrderSection";

//Probar agregar productos al carrito de compras

describe("prueba sobre el componente FoodSection", () => {
  const mockTest = [
    { item: "Simple Burger", price: 10 },
    { item: "Double Burger", price: 15 },
  ];
  
  test("prueba para envío de productos", async () => {

    render(<Router> <OrderSection cartItems={mockTest}/> </Router>)
    
 
    const { getByText } = within(screen.getByTestId('custom-element'))
    expect(getByText('Simple Burger')).toBeInTheDocument()
    
   
  });
});
