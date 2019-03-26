import { combineReducers } from "redux";
import productReducer from "./productReducer";
import reducer from "./counterReducer";

const rootReducers =  combineReducers({
  reducer,
  productReducer   // https://daveceddia.com/where-fetch-data-redux/
});

export default rootReducers;