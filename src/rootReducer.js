import { combineReducers } from "redux";
import productReducer from "./productReducer";
import reducer from "./counterReducer";

const rootReducers =  combineReducers({
  reducer,
  productReducer
});

export default rootReducers;