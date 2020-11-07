import { combineReducers } from "redux";

import productListReducer from "./productList/productList.reducer";

const rootReducer = combineReducers({
  productList: productListReducer,
});

export default rootReducer;
