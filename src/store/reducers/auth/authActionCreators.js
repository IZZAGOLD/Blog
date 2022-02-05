const SET_AUTH = "SET_AUTH"
const SET_USER = "SET_USER"
const SET_IS_LOADING = "SET_IS_LOADING"

export const AuthActionCreators = {
    setIsAuth: (auth) => ({type:SET_AUTH, payload: auth}),
    setIsLoading: (payload) => ({type: SET_IS_LOADING, payload}),
    setUser: (user) => ({type: SET_USER, payload: user}),
    login: (username) => async (dispatch) => {
            const user = JSON.stringify(username)
            dispatch(AuthActionCreators.setIsLoading(true))
            setTimeout(() => {
                localStorage.setItem('auth', 'true')
                localStorage.setItem('user', user)
                dispatch(AuthActionCreators.setUser(username))
                dispatch(AuthActionCreators.setIsAuth(true))
            }, 1000)

    },
    logout: () => async (dispatch) => {
        dispatch(AuthActionCreators.setIsLoading(true))
        setTimeout(() => {
            localStorage.removeItem('auth')
            localStorage.removeItem('user')
            dispatch(AuthActionCreators.setUser(''))
            dispatch(AuthActionCreators.setIsAuth(false))
        },1000)
    }
}