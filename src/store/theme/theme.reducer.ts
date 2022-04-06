import {
  ThemeActionUnion,
  ThemeActionKeys,
  ThemeOptions,
} from "./theme.actions";

export type ThemeReducerProps = {
  selectedTheme: ThemeOptions;
};

const initialState: ThemeReducerProps = {
  selectedTheme: "dark",
};

const themeReducer = (
  state = initialState,
  action: ThemeActionUnion
): ThemeReducerProps => {
  switch (action.type) {
    case ThemeActionKeys.SET_THEME:
      return {
        ...state,
        selectedTheme: state.selectedTheme === "dark" ? "light" : "dark",
      };

    case ThemeActionKeys.GET_THEME:
      return {
        ...state,
        selectedTheme: state.selectedTheme,
      };

    default: {
      return state;
    }
  }
};

export default themeReducer;
