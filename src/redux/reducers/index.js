import { combineReducers } from "redux";
import courses from "./courseReducer";
import authors from "./authorReducers";
import apiCallsInProgress from "./apiStatusReducer";

const rootReducers = combineReducers({
  courses,
  authors,
  apiCallsInProgress,
});

export default rootReducers;
