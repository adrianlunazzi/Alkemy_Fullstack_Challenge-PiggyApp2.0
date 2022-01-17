import { types } from "../Type/types";

export const authReducer = (state = {}, action) => {
  switch (action.type) {
    case types.loginRequest:
      return { loading: true, islogged: false };
    case types.loginSuccess:
      return { loading: false, userInfo: action.payload, isLogged: true };
    case types.loginFail:
      return { loading: false, error: action.payload, islogged: false };
    case types.logout:
      return {};

    default:
      return state;
  }
};

export const authRegisterReducer = (state = {}, action) => {
  switch (action.type) {
    case types.registerRequest:
      return { loading: true };
    case types.registerSuccess:
      return { loading: false, userInfo: action.payload };
    case types.registerFail:
      return { loading: false, error: action.payload };

    default:
      return state;
  }
};
