import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import configStore from './store/storeConfig';

import App from './components/App';

import './styles/normalize.css';
import './styles/variables.css';
import './styles/global.css';

const store = configStore();

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>, 
    document.getElementById('root')
);
