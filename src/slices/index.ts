import { combineReducers } from "redux";
import countries from "./countries";
import lang from "./lang";

export default combineReducers({
  countries,
  lang,
});
