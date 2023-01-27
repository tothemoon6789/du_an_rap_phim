import { CHANGE_DARK_THEME } from "./const"
const initConfig = {
    darkTheme: false,
}

const configReducer = (state=initConfig,action) => {
    switch (action.type) {
        case CHANGE_DARK_THEME:
            if (action.payload) {
                return {
                    ...state,
                    darkTheme:true,
                }
            } else {
                return {
                    ...state,
                    darkTheme:false
                }
            }
        default:
            return {...state}
    } 
}
export default configReducer