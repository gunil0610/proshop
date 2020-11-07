import { combineReducers } from "redux";

import productListReducer from "./productList/productList.reducer";
import productDetailsReducer from "./productDetails/productDetails.reducer";

const rootReducer = combineReducers({
  productList: productListReducer,
  productDetails: productDetailsReducer,
});

export default rootReducer;
