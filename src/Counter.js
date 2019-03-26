import React from 'react';
import { createSelector } from 'reselect';
import { connect } from 'react-redux';
import { increment, decrement, reset } from './actions';

/*
const getProducts = state => state.products.itemsById;
const getCartItemIds = state => state.currentUser.shoppingCart.itemIds;

export const selectShoppingCartItems = createSelector(
  getProducts,
  getCartItemIds,
  (products, itemIds) => itemIds.map(id => products[id])
);

function mapStateToProps(state) {
  return {
    items: selectShoppingCartItems(state)
  }
}
*/


class Counter extends React.Component {
  componentDidMount() {
    this.props.reset(); // from the last line . reset is from action.js
  }
  
  increment = () => {
    this.props.increment();
  }

  decrement = () => {
    this.props.decrement();
  }

  reset = () => {
    this.props.reset();
  }

  render() {
    console.log("$$$$$$$$");
    console.log(this.props);
    return (
      <div>
        <h2>Counter</h2>
        <div>
          <button onClick={this.decrement}>-</button>
          <span>{this.props.count}</span>
          <button onClick={this.increment}>+</button>
          <button onClick={this.reset}>Reset</button>
        </div>
      </div>
    )
  }
}

/*
function mapStateToProps(state) {
  return {
    count: state.count
  };
}
*/

// see how to hook up to state which from data store in index.js.
const mapStateToProps = state => {
  return {
    //count: state.count,
    // after change to multi-reducers store.
    // has to change the above line to the 
    // following line. The state will look like
    // thus:
    // {
      // reducer: { // ... reducer of counter.},
      // productReducer: { // ... reducer of productReducer }
      //}
    count: state.reducer.count
  };
};

// in this object, keys become prop names,
// and values should be action creator functions.
// They get bound to `dispatch`. 
// see how to hook up the actions.js. So reducer's
// action will match here.
const mapDispatchToProps = {
  increment,  // from actions.js
  decrement,
  reset
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);