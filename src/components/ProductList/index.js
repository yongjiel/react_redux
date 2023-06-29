// Reference https://daveceddia.com/where-fetch-data-redux/

import React from "react";
import { connect } from "react-redux";
import { fetchProducts } from "./productActions";
import './ProductList.scss';


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
      array = products.map(p =>
        <tr key={"tr_"+p.id}><td key={"id_" + p.id} style={{width: w, color: c}}>{p.id}</td>
        <td  key={"title_"+ p.id}>{p.title}</td></tr>
      );
    }
    //  has to pass down all lays of key={} , or console will complain.
    return (
      <div>
      <div> <h2>Here products go:</h2></div>
        <table>
          <tbody key="tb_1">
        <tr key={'trh_0'}><th key="th_0" style={{width: w, color: c, fontStyle: "italic", textAlign: "left"}}>ID</th><th  key="th_1" style={{fontStyle: "italic", textAlign: "left"}}>TITLE</th></tr>
        </tbody>
        <tbody  key="tb_2">
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