import changeRouteReducer from "./changeRoute";
import { combineReducers } from "redux";

const allReducers = combineReducers({
  changeRoute: changeRouteReducer,
});

export default allReducers;
