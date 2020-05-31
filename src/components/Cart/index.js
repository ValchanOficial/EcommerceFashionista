import React from 'react';
import { connect } from 'react-redux';
import { FaShoppingBag } from 'react-icons/fa';

import image from '../../assets/img/img_default.png';
import './style.css';

const Cart = ({list, total, number}) => {    
    return (
        <div className="cart">
            <ul className="cart__list">
                <div className="list-div">
                    {list && list.map((product, index) => (
                        <li className="list" key={index}>
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
                                        <button className="list__buttons--button">-</button>
                                        <strong className="list__buttons--count">{number}</strong>
                                        <button className="list__buttons--button">+</button>
                                    </div>
                                </div>
                                <div className="list__description--value">
                                    <strong>{product.on_sale ? product.actual_price : product.regular_price}</strong>
                                    <p className="list__description--installment">{product.installments}</p>
                                </div>
                            </div>
                            <button className="list__button--remove">Remover Item</button>
                        </li>
                    ))}
                    {list.length === 0 && (
                        <div className="list--not-found">
                            <FaShoppingBag className="list--not-found-icon"/>
                            <p className="list--not-found-paragraph">Sua sacola está vazia</p>
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
        number: state.cart.number,
        list: state.cart.list
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        // setRemove(item) {
        //     dispatch(setRemoveItem(item));
        // }
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
