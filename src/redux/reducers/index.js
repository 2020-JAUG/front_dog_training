import { combineReducers } from "redux";
import credentials from './credentials-reducer';
import data from './data-reducer';
import alert from './alert-reducer';


const rootReducer = combineReducers({
    //Here imposrt all reducers
    credentials,
    data,
    alert
});

export default rootReducer;