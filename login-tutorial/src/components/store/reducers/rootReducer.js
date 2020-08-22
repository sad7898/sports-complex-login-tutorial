import { combineReducers } from "redux"

const initialState = {
    isAuthorized:false,
    user: {}
}
    const authReducer = (state=initialState,action) => {
    switch(action.type){
        case('LOGIN'):
            return ({
                isAuthorized: true,
                user: action.user
            })
        case('LOGOUT'):
            return initialState
        default:
            return initialState
    }
}
export const rootReducer = combineReducers({
    auth : authReducer
})