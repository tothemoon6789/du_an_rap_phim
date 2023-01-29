import { ADD_USER_ACCESS_TOKEN, ADD_USER_INFORMATION, LOG_OUT } from "./const";


const initUser = {
    accessToken: '',
    userInfo: {},
}

const userReducer = (state = initUser, action) => {
    switch (action.type) {
        case ADD_USER_ACCESS_TOKEN:
            return {
                ...state,
                accessToken: action.payload,
            }
        case ADD_USER_INFORMATION:
            return {
                ...state,
                userInfo: action.payload
            }
        case LOG_OUT:
            return {
                ...state,
                accessToken: '',
                userInfo: {}
            }
        default:
            return { ...state }
    }
}
export default userReducer