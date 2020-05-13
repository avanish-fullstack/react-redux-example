import React from "react";
import {connect } from "react-redux";

const Cart =({amount}) => {
    console.log("cart rendered");
    return (<div>CART - {amount} </div>);
}

const mapStatetoProps = (state) => ({
   amount: state.order.amount
});

export default connect(mapStatetoProps)(Cart);