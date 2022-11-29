import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import OrderSection from "../sections/OrderSection/OrderSection";
import { BrowserRouter as Router } from "react-router-dom";
import { getTotalPrice } from "../Utils/OrderSection";

//  Probar el envío de la data a firestore

describe("prueba sobre el componente OrderSection", () => {
  const mockFn = [
    '{item: "Simple Burger", price: 10, quantity: 1}',
    '{item: "Double Burger", price: 15, quantity: 1}',
  ];

  test("prueba para envío de formulario", async () => {
    render(
      <Router>
        {" "}
        <OrderSection cartItems={mockFn} />{" "}
      </Router>
    );

    const btnSubmit = screen.getByText(/Submit/i);

    userEvent.click(btnSubmit);
    await waitFor(() => {
      expect(
        screen.getByText(/Order create successfully/i)
      ).toBeInTheDocument();
    });
  });

  test("probar función totalPrice", async () => {

    const cartItems = [
      {item: "Simple Burger", price: 10, quantity: 1},
      {item: "Double Burger", price: 15, quantity: 1},
    ];

    const totalPrice = getTotalPrice(cartItems);
    
    expect(totalPrice).toBe(25);
  });
});



// Probar funcion para eliminar items del carrito de compras
