import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './App';
import * as serviceWorker from './serviceWorker';
import Counter from './Counter';
import ProductList from './ProductList';
import thunk from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import rootReducers from "./rootReducer";
import { BrowserRouter, HashRouter, Route, Routes } from 'react-router-dom'

// be careful, not hit the same type name of actions.js.
// because now the products and count sharing the same
// root reducers store.


const store = createStore(rootReducers, applyMiddleware(thunk));
//store.dispatch({ type: "INCREMENT" });  // this moves into component.
//store.dispatch({ type: "INCREMENT" });
//store.dispatch({ type: "DECREMENT" });
//store.dispatch({ type: "RESET" });


// here to hook up data store to component. data store is hooked up to
// rootReducers which contains reducer from counterReducer.js. Notice
// Provider is from react-redux.
const BaseApp = () => (
  <Provider store={store}>
    <Counter />
    <ProductList />
  </Provider>
);

function products() {
  let prods = [{ "id": "1",
              "name": "product1"},
            { "id": "2",
            "name": "product2"},
            { "id": "3",
            "name": "product3"} ];

  let array = [];
  for(let i = 0; i < prods.length; i++) {
    array.push(
      <li key={i} > {prods[i].name} </li>
    );
  }

  return (
      <div>
        <ul>
        {array}
        </ul>
      </div>
  );
};

const App = () =>(
   <HashRouter>
    <Routes>
      <Route index path='/' element={ <BaseApp /> } />
      <Route path='/products' element={ products() } />
    </Routes>
   </HashRouter>
);

//export default RootApp;
ReactDOM.render(<App />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
