import React from 'react';
import './style.css';

const Cart = () => {

    const total = 769.50;
    const number = 0;
    
    return (
        <div className="cart">
            <ul className="cart__list">
                <div className="list-div">
                    <li className="list">
                        <div className="list__item">
                            <div className="list__item--image">
                                <img className="list__image" src="https://viniciusvinna.netlify.app/assets/api-fashionista/20002570_029_catalog_1.jpg" alt=""/>
                            </div>
                            <div className="list__description">
                                <strong>Top Cropped Suede</strong>
                                <p className="list__description--size">Tam.: G</p>
                                <div className="list__buttons">
                                    <button className="list__buttons--button">-</button>
                                    <strong className="list__buttons--count">{number}</strong>
                                    <button className="list__buttons--button">+</button>
                                </div>
                            </div>
                            <div className="list__description--value">
                                <strong>R$ 129,90</strong>
                                <p className="list__description--installment">3x R$ 43,30</p>
                            </div>
                        </div>
                        <button className="list__button--remove">Remover Item</button>
                    </li>
                    <li className="list">
                        <div className="list__item">
                            <div className="list__item--image">
                                <img className="list__image" src="https://viniciusvinna.netlify.app/assets/api-fashionista/20002570_029_catalog_1.jpg" alt=""/>
                            </div>
                            <div className="list__description">
                                <strong>Top Cropped Suede</strong>
                                <p className="list__description--size">Tam.: G</p>
                                <div className="list__buttons">
                                    <button className="list__buttons--button">-</button>
                                    <strong className="list__buttons--count">{number}</strong>
                                    <button className="list__buttons--button">+</button>
                                </div>
                            </div>
                            <div className="list__description--value">
                                <strong>R$ 129,90</strong>
                                <p className="list__description--installment">3x R$ 43,30</p>
                            </div>
                        </div>
                        <button className="list__button--remove">Remover Item</button>
                    </li>
                    <li className="list">
                        <div className="list__item">
                            <div className="list__item--image">
                                <img className="list__image" src="https://viniciusvinna.netlify.app/assets/api-fashionista/20002570_029_catalog_1.jpg" alt=""/>
                            </div>
                            <div className="list__description">
                                <strong>Top Cropped Suede</strong>
                                <p className="list__description--size">Tam.: G</p>
                                <div className="list__buttons">
                                    <button className="list__buttons--button">-</button>
                                    <strong className="list__buttons--count">{number}</strong>
                                    <button className="list__buttons--button">+</button>
                                </div>
                            </div>
                            <div className="list__description--value">
                                <strong>R$ 129,90</strong>
                                <p className="list__description--installment">3x R$ 43,30</p>
                            </div>
                        </div>
                        <button className="list__button--remove">Remover Item</button>
                    </li>
                    <li className="list">
                        <div className="list__item">
                            <div className="list__item--image">
                                <img className="list__image" src="https://viniciusvinna.netlify.app/assets/api-fashionista/20002570_029_catalog_1.jpg" alt=""/>
                            </div>
                            <div className="list__description">
                                <strong>Top Cropped Suede</strong>
                                <p className="list__description--size">Tam.: G</p>
                                <div className="list__buttons">
                                    <button className="list__buttons--button">-</button>
                                    <strong className="list__buttons--count">{number}</strong>
                                    <button className="list__buttons--button">+</button>
                                </div>
                            </div>
                            <div className="list__description--value">
                                <strong>R$ 129,90</strong>
                                <p className="list__description--installment">3x R$ 43,30</p>
                            </div>
                        </div>
                        <button className="list__button--remove">Remover Item</button>
                    </li>
                    <li className="list">
                        <div className="list__item">
                            <div className="list__item--image">
                                <img className="list__image" src="https://viniciusvinna.netlify.app/assets/api-fashionista/20002570_029_catalog_1.jpg" alt=""/>
                            </div>
                            <div className="list__description">
                                <strong>Top Cropped Suede</strong>
                                <p className="list__description--size">Tam.: G</p>
                                <div className="list__buttons">
                                    <button className="list__buttons--button">-</button>
                                    <strong className="list__buttons--count">{number}</strong>
                                    <button className="list__buttons--button">+</button>
                                </div>
                            </div>
                            <div className="list__description--value">
                                <strong>R$ 129,90</strong>
                                <p className="list__description--installment">3x R$ 43,30</p>
                            </div>
                        </div>
                        <button className="list__button--remove">Remover Item</button>
                    </li>
                    
                </div>
            </ul>
            <div className="cart__subtotal">
                <strong>Subtotal - R$ {total}</strong>
            </div>          
        </div>
    )
}

export default Cart;