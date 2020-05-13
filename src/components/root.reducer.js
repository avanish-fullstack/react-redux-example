import  {combineReducers} from "redux"
import  OrderReducer from "./order.reducer";


export default combineReducers({
    order: OrderReducer
});