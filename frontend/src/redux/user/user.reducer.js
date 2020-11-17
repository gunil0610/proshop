import UserActionType from "./user.types";

const INITIAL_STATE = {};

const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case UserActionType.USER_LOGIN_REQUEST:
    case UserActionType.USER_REGISTER_REQUEST:
    case UserActionType.USER_DETAILS_REQUEST:
    case UserActionType.USER_UPDATE_PROFILE_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case UserActionType.USER_LOGIN_SUCCESS:
    case UserActionType.USER_REGISTER_SUCCESS:
    case UserActionType.USER_DETAILS_SUCCESS:
      return {
        loading: false,
        userInfo: action.payload,
      };
    case UserActionType.USER_UPDATE_PROFILE_SUCCESS:
      return {
        loading: false,
        success: true,
        userInfo: action.payload,
      };
    case UserActionType.USER_LOGIN_FAIL:
    case UserActionType.USER_REGISTER_FAIL:
    case UserActionType.USER_DETAILS_FAIL:
    case UserActionType.USER_UPDATE_PROFILE_FAIL:
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

export const userListReducer = (state = { users: [] }, action) => {
  switch (action.type) {
    case UserActionType.USER_LIST_REQUEST:
      return {
        loading: true,
      };
    case UserActionType.USER_LIST_SUCCESS:
      return {
        loading: false,
        users: action.payload,
      };
    case UserActionType.USER_LIST_FAIL:
      return {
        loading: false,
        error: action.payload,
      };
    case UserActionType.USER_LIST_RESET:
      return { users: [] };
    default:
      return state;
  }
};

export const userDeleteReducer = (state = {}, action) => {
  switch (action.type) {
    case UserActionType.USER_DELETE_REQUEST:
      return {
        loading: true,
      };
    case UserActionType.USER_DELETE_SUCCESS:
      return {
        loading: false,
        success: true,
      };
    case UserActionType.USER_DELETE_FAIL:
      return {
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default userReducer;
