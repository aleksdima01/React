const SWITCH_THEME = 'SWITCH_THEME';

export const switchTheme = () => ({ type: SWITCH_THEME })

const initialState = {
    theme: 'green'
};

export const switchThemeReducer = (state = initialState, action) => {
    switch (action.type) {
        case SWITCH_THEME:
            return { ...state, theme: state.theme === "green" ? "blue" : "green" }
        default:
            return state;
    }
}