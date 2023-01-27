import { CHANGE_DARK_THEME } from "./const";

export const changeDarkThemeAction = (payload) => {
    return {
        type: CHANGE_DARK_THEME,
        payload: payload,
    }
}