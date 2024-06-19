//if we have multiple reducers then we have to combine it to one reducer in rootReducer

import { combineReducers } from "redux";
import { cartData } from "./reducer";
import {productData} from './productReducer';

export default combineReducers({
    cartData,
    productData 
})