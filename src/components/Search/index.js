import React, { useState } from 'react';
import image from '../../assets/img/img_default.png';
import './style.css';

const Search = ({number=0},{products=[]}) => {
    const [list, setList] = useState([]);
    
    const filterByName = (name, list) => list.filter(product => product.name.toLowerCase().includes(name.toLowerCase()));
    const handleTyping = (value) => setList(filterByName(value, products));

    return (
        <div className="search">
            <div className="search__form">
                <input className="search__input" type="text" placeholder="Buscar por produto..."
                    onChange={e => handleTyping(e.target.value)}
                    onPaste={e => handleTyping(e.target.value)}
                />
            </div>
            <ul className="search__list">
                <div className="list-div">
                    {list && list.map(product =>  (
                        <li className="list">
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
                </div>
            </ul>            
        </div>
    );
}

export default Search;