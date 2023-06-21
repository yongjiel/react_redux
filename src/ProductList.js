// Reference https://daveceddia.com/where-fetch-data-redux/

import React from "react";
import { connect } from "react-redux";
import { fetchProducts } from "./productActions";

class ProductList extends React.Component {
  componentDidMount() {
    this.props.dispatch(fetchProducts());
  }

  render() {
    const { products, loading, error } = this.props;

    if (error) {
      return <div>Error! {error.message}</div>;
    }

    if (loading) {
      return <div>Loading...</div>;
    }
    let array = [];
    if (typeof products != 'undefined' ){
      array = products.map(product =>
        <li key={product.id}>{product.name}</li>
      );
    }
    return (
      <div>
      <div> <h2>Here products go:</h2></div>
      <ul>
        {array}
      </ul>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    products: state.productReducer.items,
    loading: state.productReducer.loading,
    error: state.productReducer.error
  };
};

export default connect(mapStateToProps)(ProductList);