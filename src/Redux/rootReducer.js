import { combineReducers } from "redux";
import shopreducer from "./Shop/shop-reducers";

const rootReducer = combineReducers({
    shop: shopreducer
});

export default rootReducer;