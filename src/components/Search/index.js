import React from 'react';
import { connect } from 'react-redux';
import { FaTshirt } from 'react-icons/fa';

import { filterList } from '../../store/actions/action';

import image from '../../assets/img/img_default.png';
import './style.css';

const Search = ({products, list, setList}) => {
    return (
        <div className="search">
            <div className="search__form">
                <input className="search__input" type="text" placeholder="Buscar por produto..."
                    onChange={e => setList(e.target.value, products)}
                    onPaste={e => setList(e.target.value, products)}
                />
            </div>
            <ul className="search__list">
                <div className="list-div">
                    {list && list.map((product, index) =>  (
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
                                </div>
                                <div className="list__description--value">
                                    <strong>{product.on_sale ? product.actual_price : product.regular_price}</strong>
                                    <p className="list__description--installment">{product.installments}</p>
                                </div>
                            </div>
                        </li>
                    ))}
                    {list.length === 0 && (
                        <div className="list--not-found">
                            <FaTshirt className="list--not-found-icon"/>
                            Nenhum item encontrado
                            <p className="list--not-found-paragraph">Verifique se você digitou as palavras corretamente</p>
                        </div>
                    )}
                </div>
            </ul>
        </div>
    );
}

const mapStateToProps = state => {
    return {
        products: state.catalog.products,
        list: state.catalog.list
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        setList(name, list) {
            dispatch(filterList(name, list));
        }
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Search);
