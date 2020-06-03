import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { useRouteMatch } from 'react-router-dom';

import { getProduct, setAddToWishList } from '../../store/actions/action';

import Loading from '../Loading';
import image from '../../assets/img/img_default.png';
import './style.css';

const ProductSelected = ({product, list, setAddToCart, setProduct}) => {
    const { params: { code_color } } = useRouteMatch();

    useEffect(() => {
        setProduct(code_color);
    }, [code_color, setProduct])

    return (
        <div className="product__selected">
            {product.name !== undefined ? (
                <>
                    <img
                        className="product__selected__img" 
                        src={product.image ? product.image : image} 
                        alt={product.name}
                    />
                    <div className="product__selected__description">
                        <strong className="product__selected__title">{product.name.toUpperCase()}</strong>
                        <p className="product__selected__price">
                            <strong>{product.on_sale ? product.actual_price : product.regular_price}</strong> em até {product.installments}
                        </p>
                        <p className="product__selected__size">Escolha o tamanho</p>
                        <div className="product__selected__buttons">
                            {product.sizes && product.sizes.map(({size, sku, available}) => {
                                if(available === true) {
                                    return (
                                        <button key={sku} className="product__selected__button">{size}</button>
                                    )
                                }
                                return null;
                            })}
                        </div>
                        <button className="product__selected__button--add" 
                            onClick={() => setAddToCart(product, list)}
                        >Adicionar à Sacola</button>
                    </div>
                </>
            ): (
                <Loading/>
            )}
        </div>
    )
}

const mapStateToProps = state => {
    return {
        product: state.catalog.product,
        list: state.cart.list
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        setAddToCart(product, list) {
            dispatch(setAddToWishList(product, list));
        },
        setProduct(code_color) {
            dispatch(getProduct(code_color));
        }
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductSelected);
