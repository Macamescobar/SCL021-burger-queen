

export const getTotalPrice = (cartItems) => {
  return cartItems.reduce((price, item) => price + item.quantity * item.price, 0);
};
