export const addItemToCart = (cartItems, cartItemToAdd) => {
  const existItem = cartItems.find((x) => x.product === cartItemToAdd.product);

  if (existItem) {
    return cartItems.map((x) =>
      x.product === existItem.product ? cartItemToAdd : x
    );
  } else {
    return [...cartItems, cartItemToAdd];
  }
};
