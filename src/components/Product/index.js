import React from 'react';
import image from '../../assets/img/img_default.png';
import './style.css';

const Product = (product) => {
    return (
        <div className="products__box">
            <a href="/">
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
            </a>
        </div>
    )
}

export default Product;