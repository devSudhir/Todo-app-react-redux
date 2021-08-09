import { createStore } from "redux";
import { TodosReducer } from "./reducer.js";

export const store = createStore(TodosReducer);
