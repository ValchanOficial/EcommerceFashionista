import { createStore, combineReducers } from 'redux';
import catalog from './reducers/products';
import number from './reducers/number';

const reducers = combineReducers({
    catalog,
    number
});

const storeConfig = () => {
    return createStore(reducers);
}

export default storeConfig;