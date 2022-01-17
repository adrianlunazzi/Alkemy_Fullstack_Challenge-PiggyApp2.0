import { types } from "../Type/types";

export const operationTypeReducer = (state = {}, action) => {
  switch (action.type) {
    case types.getOperationTypeRequest:
      return { loading: true };
    case types.getOperationTypeSuccess:
      return { loading: false, operationType: action.payload };
    case types.getOperationTypeFail:
      return { loading: false, error: action.payload };
    case types.logout:
      return {};

    default:
      return state;
  }
};
