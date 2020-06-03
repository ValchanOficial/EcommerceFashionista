import React from 'react';
import { connect } from 'react-redux';

import { ReactComponent as CartImg } from '../../assets/img/cart.svg'
import image from '../../assets/img/img_default.png';
import './style.css';
import { setAddToWishList, setRemoveFromWishList, setRemoveOneFromWishList } from '../../store/actions/action';

const Cart = ({list, total, setRemoveAll, setAddToCart, setRemoveOne}) => { 
    return (
        <div className="cart">
            <ul className="cart__list">
                <div className="list-div">
                    {list.length !== 0 ? list.map((product, index) => (
                        <li className="list" key={product.code_color+index}>
                            <div className="list__item">
                                <div className="list__item--image">
                                    <img className="list__image" 
                                        src={product.image ? product.image : image}
                                        alt={`Produto ${product.name}`}
                                        title={product.name}
                                    />
                                </div>
                                <div className="list__description">
                                    <strong>{product.name}</strong>
                                    <p className="list__description--size">Tam.: {product.size}</p>
                                    <div className="list__buttons">
                                        <button className="list__buttons--button" onClick={() => setRemoveOne(product, list)}>-</button>
                                        <strong className="list__buttons--count">{product.amount}</strong>
                                        <button className="list__buttons--button" onClick={() => setAddToCart(product, list)}>+</button>
                                    </div>
                                </div>
                                <div className="list__description--value">
                                    <strong>{product.price}</strong>
                                    <p className="list__description--installment">{product.installments}</p>
                                </div>
                            </div>
                            <button className="list__button--remove" onClick={() => setRemoveAll(product.code_color, list)}>Remover Item</button>
                        </li>
                    )) : (
                        <div className="list--not-found">
                            <p className="list--not-found-paragraph">Sua sacola está vazia</p>
                            <CartImg className="list--not-found-image"/>                            
                        </div>
                    )}
                </div>
            </ul>
            <div className="cart__subtotal">
                <strong>Subtotal - R$ {total}</strong>
            </div>
        </div>
    );
}

const mapStateToProps = state => {
    return {
        total: state.cart.total,
        list: state.cart.list
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        setAddToCart(product, list) {
            dispatch(setAddToWishList(product, list));
        },
        setRemoveOne(product, list) {
            dispatch(setRemoveOneFromWishList(product, list));
        },
        setRemoveAll(code_color, list) {
            dispatch(setRemoveFromWishList(code_color, list));
        }
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
