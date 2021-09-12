import {applyMiddleware, createStore} from 'redux';
import { save, load } from "redux-localstorage-simple";
import reducer from './reducers';
import thunk from "redux-thunk";

const createStoreWithMiddleware = applyMiddleware(
    thunk,
	save({ states: ['credentials', 'post', 'alert'] })
)(createStore);

//Aqui guardamos en el local-storage de RDX
const store = createStoreWithMiddleware(
    reducer,
    load({ states: ['credentials', 'post', 'alert'] }),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__({
        trace: true,
    })
);

export default store;

