import { createStore, combineReducers } from 'redux';
import catalog from './reducers/products';
import cart from './reducers/cart';
import drawer from './reducers/drawer';

const reducers = combineReducers({
    catalog,
    cart,
    drawer
});

const storeConfig = () => createStore(reducers); 

export default storeConfig;
