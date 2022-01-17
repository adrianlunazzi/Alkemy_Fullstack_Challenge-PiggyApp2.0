import { types } from "../Type/types";

export const categoryReducer = (state = {}, action) => {
  switch (action.type) {
    case types.getCategoryRequest:
      return { loading: true };
    case types.getCategorySuccess:
      return { loading: false, category: action.payload };
    case types.getCategoryFail:
      return { loading: false, error: action.payload };
    case types.logout:
      return {};

    default:
      return state;
  }
};

export const createCategoryReducer = (state = {}, action) => {
  switch (action.type) {
    case types.createCategoryRequest:
      return { loading: true };
    case types.createCategorySuccess:
      return { loading: false, category: action.payload };
    case types.createCategoryFail:
      return { loading: false, error: action.payload };
    case types.logout:
      return {};

    default:
      return state;
  }
};
