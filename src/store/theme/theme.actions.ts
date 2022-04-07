import {
  ActionsUnion,
  createAction,
  Action,
} from "../../helpers/action-helper";

export type ThemeOptions = "light" | "dark";

export enum ThemeActionKeys {
  SET_THEME = "SET_THEME",
}

export const ThemeActions = {
  setTheme: (): SetThemeAction => createAction(ThemeActionKeys.SET_THEME),
};

export type ThemeActionUnion = ActionsUnion<typeof ThemeActions>;

export type SetThemeAction = Action<ThemeActionKeys.SET_THEME>;
