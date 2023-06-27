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
    const w = 100;  // check out how to use this w in line 25;
    const c = "rgb(2, 78, 38)";
    if (error) {
      return <div>Error! {error.message}</div>;
    }

    if (loading) {
      return <div>Loading...</div>;
    }
    let array = [];
    if ( !!products ){
      array = products.map(product =>
        <tr key={product.id}><td style={{width: w, color: c}}>{product.id}</td><td>{product.title}</td></tr>
      );
    }
    return (
      <div>
      <div> <h2>Here products go:</h2></div>
        <table>
          <tbody>
        <tr key="table_0"><th style={{width: w, color: c, fontStyle: "italic", textAlign: "left"}}>ID</th><th  style={{fontStyle: "italic", textAlign: "left"}}>TITLE</th></tr>
        </tbody>
        <tbody>
          {array}
        </tbody>
        </table>
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