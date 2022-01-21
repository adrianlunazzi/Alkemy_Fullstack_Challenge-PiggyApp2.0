import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
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
const persistConfig = {
  key: "main-root",
  storage,
};

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
const persistedReducer = persistReducer(persistConfig, reducers);

export const store = createStore(
  persistedReducer,
  composeEnhancers(applyMiddleware(thunk))
);
export const Persistor = persistStore(store);
