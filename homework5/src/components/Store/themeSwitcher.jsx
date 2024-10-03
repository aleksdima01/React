const SWITCH_THEME = 'SWITCH_THEME';
// const UPDATE_EMAIL = 'UPDATE_EMAIL';
// const UPDATE_NAME_AND_EMAIL = 'UPDATE_NAME_AND_EMAIL';

export const switchTheme = () => ({ type: SWITCH_THEME })
// export const updateEmail = (email) => ({ type: UPDATE_EMAIL, payload: email })
// export const updateNameAndEmail = ({ name, email }) => ({ type: UPDATE_NAME_AND_EMAIL, payload: { name, email } })
const initialState = {
    theme: 'light'
};

export const switchThemeReducer = (state = initialState, action) => {
    switch (action.type) {
        case SWITCH_THEME:
            return { ...state, theme: state.theme = "light" ? "dark" : "light" }
        // case UPDATE_NAME:
        //     return { ...state, name: action.payload }
        // case UPDATE_EMAIL:
        //     return { ...state, email: action.payload }
        default:
            return state;
    }
}