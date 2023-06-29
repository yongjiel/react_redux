// be careful, not hit the same type name of actions.js.
// because now the products and count sharing the same
// root reducers store.

import { combineReducers } from "redux";
import productReducer from "./components/ProductList/productReducer";
import reducer from "./components/Counter/counterReducer";

const rootReducers =  combineReducers({
  reducer,
  productReducer   // https://daveceddia.com/where-fetch-data-redux/
});

export default rootReducers;