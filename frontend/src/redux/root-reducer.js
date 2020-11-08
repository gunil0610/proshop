import { combineReducers } from "redux";

import productListReducer from "./productList/productList.reducer";
import productDetailsReducer from "./productDetails/productDetails.reducer";
import cartReducer from "./cart/cart.reducer";

const rootReducer = combineReducers({
  productList: productListReducer,
  productDetails: productDetailsReducer,
  cart: cartReducer,
});

export default rootReducer;
