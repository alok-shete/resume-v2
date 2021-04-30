import changeRouteReducer from "./changeRoute";
import { combineReducers } from "redux";

const allReducers = combineReducers({
  chnageRoute: changeRouteReducer,
});

export default allReducers;
