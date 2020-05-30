import React from 'react';

import Counter from '../Counter';
import {ReactComponent as LogoSvg} from '../../assets/img/logo.svg';
import {ReactComponent as SearchSVG} from '../../assets/img/search.svg';
import {ReactComponent as CartSVG} from '../../assets/img/cart.svg';

import './style.css';

const Header = ({value}) => {

    const openSearch = () => {
       // todo
    }

    return (
        <header className="header">
            <div className="header__default">
                <a href="/">
                    <LogoSvg alt="Amaro"/>
                </a>
                <div className="header__icons">
                    <button className="header__icons--search" onClick={openSearch}>
                        <SearchSVG alt="Search"/>
                        <canvas height="0" width="0"></canvas>
                    </button>
                    <button className="header__icons--cart">
                        <CartSVG alt="Cart"/>
                        <Counter value={value}/>
                        <canvas height="0" width="0"></canvas>
                    </button>
                </div>
            </div>
        </header>
    )
}

export default Header;