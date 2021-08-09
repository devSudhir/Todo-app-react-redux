import { createStore } from "react-redux";
import { authReducer } from "./Auth/reducer";
export const store = createStore(
  authReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

const logger1 = (state) => (next) => (action) {
  
}