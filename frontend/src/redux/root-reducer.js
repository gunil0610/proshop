import { combineReducers } from "redux";

import productListReducer from "./productList/productList.reducer";
import productDetailsReducer from "./productDetails/productDetails.reducer";
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
