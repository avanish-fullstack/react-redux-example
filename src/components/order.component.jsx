import React from "react";
import {connect} from "react-redux";
import PlaceOrder from "./order.action";

const Order = ({placeOrder}) => {

    const handleChange =(event) => {
        //code to disptach  action to reducer
        placeOrder( {
            amount: event.target.value
        });
    }

    return(<div>Order Component
        <input type="text" onChange={handleChange}/>
    </div>);
}

const mapDispatchToProps = (dispatch) =>({
    placeOrder: (order) => dispatch(PlaceOrder(order))
});

export default connect(null, mapDispatchToProps)(Order);