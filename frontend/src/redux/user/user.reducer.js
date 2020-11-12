import UserActionType from "./user.types";

const INITIAL_STATE = {};

const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case UserActionType.USER_LOGIN_REQUEST:
    case UserActionType.USER_REGISTER_REQUEST:
      return {
        loading: true,
      };
    case UserActionType.USER_LOGIN_SUCCESS:
    case UserActionType.USER_REGISTER_SUCCESS:
      return {
        loading: false,
        userInfo: action.payload,
      };
    case UserActionType.USER_LOGIN_FAIL:
    case UserActionType.USER_REGISTER_FAIL:
      return {
        loading: false,
        error: action.payload,
      };
    case UserActionType.USER_LOGOUT:
      return {};
    default:
      return state;
  }
};

export default userReducer;
