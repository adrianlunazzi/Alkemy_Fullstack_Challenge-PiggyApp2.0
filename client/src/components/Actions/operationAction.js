import { types } from "../Type/types";
import axios from "axios";
import { url_base } from "../../Helpers/url_base";

export const getListOperation = () => async (dispatch, getState) => {
  try {
    dispatch({ type: types.getOperationRequest });
    const {
      auth: { userInfo },
    } = getState();

    const config = {
      headers: {
        authorization: `Bearer ${userInfo.token}`,
      },
    };
    const { data } = await axios.get(`${url_base}/api/operation`, config);
    const operationByUser = data.filter((item) => item.userId === userInfo.id);
    dispatch({
      type: types.getOperationSuccess,
      payload: operationByUser,
    });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    dispatch({
      type: types.getOperationFail,
      payload: message,
    });
  }
};
export const createOperation =
  (name, amount, date, operationTypeId, userId, categoryId) =>
  async (dispatch, getState) => {
    try {
      dispatch({ type: types.createOperationRequest });
      const {
        auth: { userInfo },
      } = getState();
      const config = {
        headers: {
          authorization: `Bearer ${userInfo.token}`,
        },
      };
      const { data } = await axios.post(
        `${url_base}/api/operation`,
        {
          name,
          amount,
          date,
          operationTypeId,
          userId,
          categoryId,
        },
        config
      );
      dispatch({
        type: types.createOperationSuccess,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: types.createOperationFail,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };
export const deleteOperation = (id) => async (dispatch, getState) => {
  try {
    dispatch({ type: types.deleteOperationRequest });
    const {
      auth: { userInfo },
    } = getState();
    const config = {
      headers: {
        authorization: `Bearer ${userInfo.token}`,
      },
    };
    const { data } = await axios.delete(
      `${url_base}/api/operation/${id}`,

      config
    );
    dispatch({
      type: types.deleteOperationSuccess,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: types.deleteOperationFail,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
export const updateOperation =
  (id, name, amount, date, categoryId) => async (dispatch, getState) => {
    try {
      dispatch({ type: types.updateOperationRequest });
      const {
        auth: { userInfo },
      } = getState();
      const config = {
        headers: {
          authorization: `Bearer ${userInfo.token}`,
        },
      };
      const { data } = await axios.put(
        `${url_base}/api/operation/${id}`,
        {
          name,
          amount,
          date,
          categoryId,
        },
        config
      );
      dispatch({
        type: types.updateOperationSuccess,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: types.updateOperationFail,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };
