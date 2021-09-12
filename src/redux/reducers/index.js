import { combineReducers } from "redux";
import credentials from './credentials-reducer';
import post from './post-reducer';
import alert from './alert-reducer';


const rootReducer = combineReducers({
    // aquí importaremos todos los reducers:
    credentials,
    post,
    alert
});

export default rootReducer;