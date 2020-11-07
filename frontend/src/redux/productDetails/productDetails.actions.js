import axios from "axios";

import ProductDetailsActionTypes from "./productDetails.types";

export const listProductDetails = (id) => async (dispatch) => {
  try {
    dispatch({ type: ProductDetailsActionTypes.PRODUCT_DETAILS_REQUEST });

    const { data } = await axios.get(`/api/products/${id}`);

    dispatch({
      type: ProductDetailsActionTypes.PRODUCT_DETAILS_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: ProductDetailsActionTypes.PRODUCT_DETAILS_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
