const SET_AUTH = "SET_AUTH"
const SET_USER = "SET_USER"
const SET_IS_LOADING = "SET_IS_LOADING"

const initialState = {
    isAuth: false,
    isLoading: false,
    user: ''
}

export default function authReducer(state = initialState, action) {
    switch (action.type) {
        case SET_AUTH:
            return {...state, isAuth: action.payload, isLoading: false}
        case SET_IS_LOADING:
            return {...state, isLoading: action.payload}
        case SET_USER:
            return {...state, user: action.payload}
        default:
            return state;
    }
}