import FoodSection from "../sections/FoodSection/FoodSection";
import { BrowserRouter as Router } from "react-router-dom";
import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

//Probar agregar productos al carrito de compras

describe("prueba sobre el componente FoodSection", () => {
  // const mockTest = [
  //   { item: "Simple Burger", price: 10 },
  //   { item: "Double Burger", price: 15 },
  // ];
  
  test("prueba para envío de productos", async () => {

    render(<Router> <FoodSection selected="burgers"/> </Router>)
    
    const btnAdd = screen.getByTestId("custom-element");
 
    userEvent.click(btnAdd);
    

    await waitFor(() => {
      expect(screen.getByText(/Double Burger/i)).toBeInTheDocument();
    });
  });
});
