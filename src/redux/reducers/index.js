import { combineReducers } from "redux";
import taskReducer from "./taskReducer";

const allReducers = combineReducers({
    // counter : CounterReducer,
    // isLogged : LoggedReducer,
    // floor : floorReducer
    // CounterReducer,
    // floorReducer
    taskReducer
});
export default allReducers