import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { getProduct } from '../../store/actions/action';

import image from '../../assets/img/img_default.png';
import './style.css';

const Product = ({product, setProduct}) => {
    return (
        <div className="products__box">
            <Link to={`/products/${product.code_color}`} onClick={() => setProduct(product.code_color)}>
                <figure className="product__image">
                    {product.on_sale && <span className="badge badge--discount">{`-${product.discount_percentage}`}</span>}
                    <img src={product.image ? product.image : image}
                        alt={`Produto ${product.name}`}
                        title={product.name}/>
                </figure>
                <h3 className="product__name">{product.name}</h3>
                <div className="product__pricing">
                {product.on_sale && <span className="product__price product__price--from">{product.regular_price}</span>}
                {product.on_sale ? 
                <span className="product__price product__price--to">{product.actual_price}</span> : 
                <span className="product__price product__price--to">{product.regular_price}</span>}
                </div>
            </Link>
        </div>
    )
}

const mapStateToProps = state => {
    return {}
}


const mapDispatchToProps = (dispatch) => {
    return {
        setProduct(code_color) {
            dispatch(getProduct(code_color));
        }
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Product);
