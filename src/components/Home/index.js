import React from 'react';
import { connect } from 'react-redux';

import { setProducts } from '../../store/actions/action';

import Api from '../../services/api';

import './style.css';

import Products from '../Products';
import Loading from '../Loading';

const Home = ({ products }) => {
    return (
        <div className="app">
            {products.length === 0 
            ? <Loading/>
            : <Products/>}
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

export default connect(mapStateToProps, mapDispatchToProps)(Home);
