const defaultState = {
    user: null
}
// action = {type: "", payload: "?"}
const LOGIN_USER = "LOGIN_USER"
const LOGOUT_USER = "LOGOUT_USER"

export const userReducer = (state = defaultState, action) => {
    switch (action.type){
        case LOGIN_USER:
            return {...state, user: action.payload}
        case LOGOUT_USER:
            return {...state, user: null}
        default:
            return state
    }
}

export const loginUserAction = (payload) => ({type: LOGIN_USER, payload})
export const logoutUserAction = (payload) => ({type: LOGOUT_USER, payload})