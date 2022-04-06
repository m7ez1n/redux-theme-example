import { combineReducers } from "redux";

import theme from "./theme/theme.reducer";
import { ThemeReducerProps } from "./theme/theme.reducer";

export type GlobalReducerState = {
  theme: ThemeReducerProps;
};

export const reducers = combineReducers({ theme });
