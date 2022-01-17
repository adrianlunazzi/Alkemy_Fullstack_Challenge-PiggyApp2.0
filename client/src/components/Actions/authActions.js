import { types } from "../Type/types";
import axios from "axios";
import { url_base } from "../../Helpers/url_base";

export const login = (email, password) => async (dispatch) => {
  try {
    dispatch({ type: types.loginRequest });
    const config = {
      headers: {
        "Content-type": "application/json",
      },
    };

    const { data } = await axios.post(
      `${url_base}`,
      {
        email,
        password,
      },
      config
    );
    dispatch({ type: types.loginSuccess, payload: data });
    localStorage.setItem("userInfo", JSON.stringify(data));
  } catch (error) {
    dispatch({
      type: types.loginFail,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const logout = () => async (dispatch) => {
  localStorage.removeItem("userInfo");
  dispatch({ type: types.logout });
};

export const register = (name, email, password) => async (dispatch) => {
  try {
    dispatch({ type: types.registerRequest });
    const config = {
      headers: {
        "Content-type": "application/json",
      },
    };
    const { data } = await axios.post(
      `${url_base}/register`,
      {
        name,
        email,
        password,
      },
      config
    );
    dispatch({ type: types.registerSuccess });
    localStorage.setItem("userInfo", JSON.stringify(data));
  } catch (error) {
    dispatch({
      type: types.registerFail,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
