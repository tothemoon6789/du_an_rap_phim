import { combineReducers, createStore } from "redux";
import filmReducer from "./reducer/film";
import configReducer from "./reducer/config";
const rootReducer = combineReducers({
    filmReducer,
    configReducer,
})
const store = createStore(
    rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)
export default store