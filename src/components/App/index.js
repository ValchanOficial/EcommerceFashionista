import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import Routes from '../../routes';

import Header from '../Header';
import Drawer from '../Drawer';

const App = () => {
    return (
        <BrowserRouter>
            <Header/>
            <Routes/>
            <Drawer/>
        </BrowserRouter>
    )
}

export default App;
