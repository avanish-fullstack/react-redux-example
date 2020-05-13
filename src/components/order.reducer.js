const OrderReducer = (state = {amount:0},action)=> {
    switch(action.type) {
        case "PLACE_ORDER":
            console.log(action.payload);
            console.log(state);
            return (
              {  ...state , 
                amount: action.payload.amount
              }
            );
            default :
             return ({...state});
    }
}

export default OrderReducer;