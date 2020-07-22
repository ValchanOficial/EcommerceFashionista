import React from 'react';
import { connect } from 'react-redux';

import Product from '../Product';
import './style.css';

const Products = ({products: { products }}) => {
    const totalProducts = products.length;
    return (
        <section className="products">
            <div className="app_container">
                <div className="header__title">{totalProducts > 1 ? `${totalProducts} items` : `${totalProducts} item`}</div>
                <div className="products__grid">
                    {products && products.map((product, index) => (
                        <Product product={product} key={index}/>
                    ))}
                </div>
            </div>
        </section>
    )
}

const mapStateToProps = state => {
    return {
        products: state.catalog.products
    }
}

export default connect(mapStateToProps)(Products);
