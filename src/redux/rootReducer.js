import { combineReducers } from "redux";
import { bookReducer } from "./books/reducers";

const rootReducer = combineReducers({
  books: bookReducer,
});

export default rootReducer;
