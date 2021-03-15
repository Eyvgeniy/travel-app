import { combineReducers } from "redux";
import countries from "./countries";
import user from "./user";
import lang from "./lang";

export default combineReducers({
  countries,
  user,
  lang,
});
