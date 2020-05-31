import React from 'react';
import { connect } from 'react-redux';

import { setStatus, setType } from '../../store/actions/action';

import Counter from '../Counter';
import {ReactComponent as LogoSvg} from '../../assets/img/logo.svg';
import {ReactComponent as SearchSVG} from '../../assets/img/search.svg';
import {ReactComponent as CartSVG} from '../../assets/img/cart.svg';

import './style.css';

const Header = ({status, setOpen, number}) => {
    return (
        <header className="header">
            <div className="header__default">
                <a href="/">
                    <LogoSvg alt="Amaro"/>
                </a>
                <div className="header__icons">
                    <button className="header__icons--search" onClick={() => setOpen(!status, false)}>
                        <SearchSVG alt="Search"/>
                        <canvas height="0" width="0"></canvas>
                    </button>
                    <button className="header__icons--cart" onClick={() => setOpen(!status, true)}>
                        <CartSVG alt="Cart"/>
                        <Counter value={number}/>
                        <canvas height="0" width="0"></canvas>
                    </button>
                </div>
            </div>
        </header>
    )
}

const mapStateToProps = state => {
    return {
        status: state.drawer.status,
        search: state.drawer.search,
        number: state.cart.number
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        setOpen(status, type) {
            dispatch(setStatus(status));
            dispatch(setType(type));
        }
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);
