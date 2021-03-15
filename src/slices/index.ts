import { combineReducers } from "redux";
import countries from "./countries";
import user from "./user";

export default combineReducers({
  countries,
  user
});
