import { combineReducers } from "redux";
import blogReducer from "./blogReducer";
import authReducer from "./authReducer";
const rootReducer = combineReducers({
    blog: blogReducer,
    auth: authReducer

})

export default rootReducer;