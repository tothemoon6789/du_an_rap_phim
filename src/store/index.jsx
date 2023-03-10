import { combineReducers, createStore } from "redux";
import filmReducer from "./reducer/film";
import configReducer from "./reducer/config";
import userReducer from './reducer/user'
import adminReducer from "./reducer/admin";
const rootReducer = combineReducers({
    filmReducer,
    configReducer,
    userReducer,
    adminReducer,
})
const store = createStore(
    rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)
export default store