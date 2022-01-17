import { types } from "../Type/types";
import axios from "axios";
import { url_base } from "../../Helpers/url_base";

export const getOperationType = () => async (dispatch, getState) => {
  try {
    dispatch({ type: types.getOperationTypeRequest });
    const {
      auth: { userInfo },
    } = getState();

    const config = {
      headers: {
        authorization: `Bearer ${userInfo.token}`,
      },
    };
    const { data } = await axios.get(`${url_base}/api/operationType`, config);
    dispatch({
      type: types.getOperationTypeSuccess,
      payload: data,
    });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    dispatch({
      type: types.getOperationTypeFail,
      payload: message,
    });
  }
};
