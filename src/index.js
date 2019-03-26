import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './App';
import * as serviceWorker from './serviceWorker';
import Counter from './Counter'
import thunk from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import rootReducers from "./rootReducer";
import reducer from "./counterReducer";


const store = createStore(rootReducers, applyMiddleware(thunk));
//store.dispatch({ type: "INCREMENT" });
//store.dispatch({ type: "INCREMENT" });
//store.dispatch({ type: "DECREMENT" });
//store.dispatch({ type: "RESET" });

const App = () => (
  <Provider store={store}>
    <Counter/>
  </Provider>
);



ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
