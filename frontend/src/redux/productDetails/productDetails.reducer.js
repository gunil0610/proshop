import ProductDetailsActionTypes from "./productDetails.types";

const INITIAL_STATE = {
  product: {
    reviews: [],
  },
};

const productDetailsReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ProductDetailsActionTypes.PRODUCT_DETAILS_REQUEST:
      return { loading: true, ...state };
    case ProductDetailsActionTypes.PRODUCT_DETAILS_SUCCESS:
      return { loading: false, product: action.payload };
    case ProductDetailsActionTypes.PRODUCT_DETAILS_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export default productDetailsReducer;
