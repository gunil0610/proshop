import OrderActionTypes from "./order.types";

const INITIAL_STATE = {
  loading: true,
};

const orderReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case OrderActionTypes.ORDER_CREATE_REQUEST:
      return { ...state, loading: true };
    case OrderActionTypes.ORDER_CREATE_SUCCESS:
      return { loading: false, success: true, order: action.payload };
    case OrderActionTypes.ORDER_CREATE_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const orderDetailsReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case OrderActionTypes.ORDER_DETAILS_REQUEST:
      return { ...state, loading: true };
    case OrderActionTypes.ORDER_DETAILS_SUCCESS:
      return { loading: false, order: action.payload };
    case OrderActionTypes.ORDER_DETAILS_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const orderPayReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case OrderActionTypes.ORDER_PAY_REQUEST:
      return { loading: true };
    case OrderActionTypes.ORDER_PAY_SUCCESS:
      return { loading: false, success: true };
    case OrderActionTypes.ORDER_PAY_FAIL:
      return { loading: false, error: action.payload };
    case OrderActionTypes.ORDER_PAY_RESET:
      return {};
    default:
      return state;
  }
};

export const orderListMyReducer = (state = { orders: [] }, action) => {
  switch (action.type) {
    case OrderActionTypes.ORDER_LIST_MY_REQUEST:
      return { loading: true };
    case OrderActionTypes.ORDER_LIST_MY_SUCCESS:
      return { loading: false, orders: action.payload };
    case OrderActionTypes.ORDER_LIST_MY_FAIL:
      return { loading: false, error: action.payload };
    case OrderActionTypes.ORDER_LIST_MY_RESET:
      return { orders: [] };
    default:
      return state;
  }
};

export default orderReducer;
