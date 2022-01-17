import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import {
  authReducer,
  authRegisterReducer,
} from "../components/Reducers/authReducer";
import {
  categoryReducer,
  createCategoryReducer,
} from "../components/Reducers/categoryReducer";
import {
  createOperationReducer,
  deleteOperationReducer,
  operationReducer,
  updateOperationReducer,
} from "../components/Reducers/operationReducer";
import { operationTypeReducer } from "../components/Reducers/operationTypeReducer";

const composeEnhancers =
  (typeof window !== "undefined" &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose;

const reducers = combineReducers({
  /* auth*/
  auth: authReducer,
  register: authRegisterReducer,
  /*operation*/
  getOperation: operationReducer,
  createOperation: createOperationReducer,
  updateOperation: updateOperationReducer,
  deleteOperation: deleteOperationReducer,

  /*category*/
  getCategory: categoryReducer,
  createCategory: createCategoryReducer,

  /*operationType*/
  getOperationType: operationTypeReducer,
});

export const store = createStore(
  reducers,
  composeEnhancers(applyMiddleware(thunk))
);
