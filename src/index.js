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
import { useParams } from "react-router-dom";
import { BrowserRouter, HashRouter, Route, Routes } from 'react-router-dom';
import NoPage from './nopage';
import './my_sass.scss';

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
const BaseApp = () => {
  const second_url = "/products/abc";
  const url_404 = "/productssssssssss";
  // be careful, in route /products. it is the hyperlink http://localhost:3001/#/products
  return (
      <>
      <a href={second_url} rel="noreferrer">
        /products route matches {second_url}, be careful of diff of BrowserRouter and HashRouter. <br/>
        HashRouter is with /#/. <br/>
        BrowserRouter without /#/
      </a><br/><br/>
      <a href={url_404} rel="noreferrer"> 404 no page</a>
      <Provider store={store}>
        <Counter />
        <ProductList />
      </Provider>
      </>);
};

const Products = () => {
  let { name } = useParams();
  let prods = [{ "id": "1",
              "name": "product1"},
            { "id": "2",
            "name": "product2"},
            { "id": "3",
            "name": "product3"} ];

  let array = [];
  console.log("llllllll "+ name);
  if (name) {
    array.push(<li key="pname" > {name} </li>);
  } else {
    array.push(<li key="pname" > name param is empty </li>);
  }
  for(let i = 0; i < prods.length; i++) {
    array.push(
      <li key={i} > {prods[i].name} </li>
    );
  }

  return (
      <div>
        <a href="/" rel="noreferrer">Home</a><br/><br/>
        <a href="/productsssssssss" rel="noreferrer"> 404 no page</a><br/>
        <h2> 3 Products | {name? "With URL param var": "With No param var"} </h2>
        <ul>
        {array}
        </ul>
      </div>
  );
};
// be careful of diff of BrowserRouter and HashRouter. HashRouter is with /#/
// BrowserRouter without /#/, chatGPT : react-router-dom why there is /#/?
const App = () =>(
   <BrowserRouter basename='/' exact>
    <Routes>
      <Route >
         <Route index path='/'element={<BaseApp />} exact />
         <Route path='/products' element={ <Products /> } exact />
         <Route path='/products/:name' element={ <Products /> } exact />
         <Route path="*" element={<NoPage url={window.location.href} />} status={404} />
      </Route>
    </Routes>
   </BrowserRouter>
);

//export default RootApp;
ReactDOM.render(<App />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
