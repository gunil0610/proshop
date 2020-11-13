import CartActionTypes from "./cart.types";
import { addItemToCart } from "./cart.utils";

const INITIAL_STATE = {
  cartItems: [],
  shippingAddress: {},
};

const cartReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CartActionTypes.CART_ADD_ITEM:
      return {
        ...state,
        cartItems: addItemToCart(state.cartItems, action.payload),
      };
    case CartActionTypes.CART_REMOVE_ITEM:
      return {
        ...state,
        cartItems: state.cartItems.filter((x) => x.product !== action.payload),
      };
    case CartActionTypes.CART_SAVE_SHIPPING_ADDRESS:
      return {
        ...state,
        shippingAddress: action.payload,
      };
    default:
      return state;
  }
};

export default cartReducer;
