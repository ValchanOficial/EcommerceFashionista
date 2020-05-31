import React from 'react';
import { connect } from 'react-redux';

import { setProducts } from '../../store/actions/action';

import Api from '../../services/api';

import './style.css';

import Header from '../Header';
import Products from '../Products';
import Drawer from '../Drawer';
import Loading from '../Loading';

const App = ({ products }) => {
    return (
        <div className="app">
            <Header/>
            {products.length === 0 
            ? <Loading/>
            : <Products/>}
            <Drawer/>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        products: state.catalog.products
    }
}

const mapDispatchToProps = (dispatch) => {
    Api.getCatalog().then(res =>{
        dispatch(setProducts(res));
    });
    return {};
}

export default connect(mapStateToProps, mapDispatchToProps)(App);