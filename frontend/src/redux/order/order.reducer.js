import OrderActionTypes from "./order.types";

const INITIAL_STATE = {
  loading: true,
};

const orderReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case OrderActionTypes.ORDER_CREATE_REQUEST:
    case OrderActionTypes.ORDER_DETAILS_REQUEST:
      return { ...state, loading: true };
    case OrderActionTypes.ORDER_CREATE_SUCCESS:
    case OrderActionTypes.ORDER_DETAILS_SUCCESS:
      return { loading: false, success: true, order: action.payload };
    case OrderActionTypes.ORDER_CREATE_FAIL:
    case OrderActionTypes.ORDER_DETAILS_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export default orderReducer;
