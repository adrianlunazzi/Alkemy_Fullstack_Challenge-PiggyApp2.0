import { types } from "../Type/types";

export const operationReducer = (state = {}, action) => {
  switch (action.type) {
    case types.getOperationRequest:
      return { loading: true };
    case types.getOperationSuccess:
      return { loading: false, operation: action.payload };
    case types.getOperationFail:
      return { loading: false, error: action.payload };
    case types.logout:
      return {};

    default:
      return state;
  }
};

export const createOperationReducer = (state = {}, action) => {
  switch (action.type) {
    case types.createOperationRequest:
      return { loading: true };
    case types.createOperationSuccess:
      return { loading: false, operation: action.payload };
    case types.createOperationFail:
      return { loading: false, error: action.payload };
    case types.logout:
      return {};

    default:
      return state;
  }
};

export const deleteOperationReducer = (state = {}, action) => {
  switch (action.type) {
    case types.deleteOperationRequest:
      return { loading: true };
    case types.deleteOperationSuccess:
      return { loading: false, operation: action.payload };
    case types.deleteOperationFail:
      return { loading: false, error: action.payload };
    case types.logout:
      return {};

    default:
      return state;
  }
};
export const updateOperationReducer = (state = {}, action) => {
  switch (action.type) {
    case types.updateOperationRequest:
      return { loading: true };
    case types.updateOperationSuccess:
      return { loading: false, operation: action.payload };
    case types.updateOperationFail:
      return { loading: false, error: action.payload };
    case types.logout:
      return {};

    default:
      return state;
  }
};
