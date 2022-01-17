import { types } from "../Type/types";
import axios from "axios";
import { url_base } from "../../Helpers/url_base";

export const getListCategories = () => async (dispatch, getState) => {
  try {
    dispatch({ type: types.getCategoryRequest });
    const {
      auth: { userInfo },
    } = getState();
    const config = {
      headers: {
        authorization: `Bearer ${userInfo.token}`,
      },
    };
    const { data } = await axios.get(`${url_base}/api/category`, config);
    const categoryByUser = data.filter((item) => item.userId === userInfo.id);
    dispatch({
      type: types.getCategorySuccess,
      payload: categoryByUser,
    });
  } catch (error) {
    dispatch({
      type: types.getCategoryFail,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const createCategories =
  (name, operationTypeId, userId) => async (dispatch, getState) => {
    try {
      dispatch({ type: types.createCategoryRequest });
      const {
        auth: { userInfo },
      } = getState();
      const config = {
        headers: {
          authorization: `Bearer ${userInfo.token}`,
        },
      };
      const { data } = await axios.post(
        `${url_base}/api/category`,
        {
          name,
          operationTypeId,
          userId,
        },
        config
      );
      dispatch({
        type: types.createCategorySuccess,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: types.createCategoryFail,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };
