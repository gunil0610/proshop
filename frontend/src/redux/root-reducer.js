import { combineReducers } from "redux";

import {
  productListReducer,
  productDetailsReducer,
  productDeleteReducer,
  productCreateReducer,
  productUpdateReducer,
} from "./product/product.reducer";
import cartReducer from "./cart/cart.reducer";
import userReducer, {
  userDetailsReducer,
  userListReducer,
  userDeleteReducer,
  userUpdateReducer,
} from "./user/user.reducer";
import orderReducer, {
  orderDetailsReducer,
  orderPayReducer,
  orderListMyReducer,
} from "./order/order.reducer";

const rootReducer = combineReducers({
  productList: productListReducer,
  productDetails: productDetailsReducer,
  productDelete: productDeleteReducer,
  productCreate: productCreateReducer,
  productUpdate: productUpdateReducer,
  cart: cartReducer,
  user: userReducer,
  userDetails: userDetailsReducer,
  userList: userListReducer,
  userDelete: userDeleteReducer,
  userUpdate: userUpdateReducer,
  order: orderReducer,
  orderDetails: orderDetailsReducer,
  orderPay: orderPayReducer,
  orderListMy: orderListMyReducer,
});

export default rootReducer;
