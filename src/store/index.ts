import { reducers } from "./reducers";
import { createStore } from "redux";

const configureStore = () => {
  const localStorage = createStore(reducers);

  return localStorage;
};

export const store = configureStore();
