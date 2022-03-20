import { combineReducers } from "redux";
import courses from "./courseReducer";
import authors from "./authorReducers";

const rootReducers = combineReducers({
  courses,
  authors,
});

export default rootReducers;
