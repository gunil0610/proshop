import ProductListActionTypes from "./productList.types";

const INITIAL_STATE = {
  products: [],
};

const productListReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ProductListActionTypes.PRODUCT_LIST_REQUEST:
      return { loading: true, products: [] };
    case ProductListActionTypes.PRODUCT_LIST_SUCCESS:
      return { loading: false, products: action.payload };
    case ProductListActionTypes.PRODUCT_LIST_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export default productListReducer;
