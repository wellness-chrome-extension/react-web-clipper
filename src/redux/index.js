import { combineReducers } from "redux";
import storageReducer from "./storageInfo";


const appReducer = combineReducers({
    storageInfo: storageReducer,
});

export default appReducer;