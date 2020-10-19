export const setCurrentUser = (userData) => {
    return {
        type: "LOGIN",
        user: userData
    }
}
export const setLogOut = () => {
    return {
        type: "LOGOUT"
    }
}