import React from 'react';
import { connect } from 'react-redux';
import { FaSearch, FaShoppingBag } from 'react-icons/fa';
import {ReactComponent as LogoSvg} from '../../assets/img/logo.svg';

import { setStatus, setType } from '../../store/actions/action';

import Counter from '../Counter';

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
                        <FaSearch alt="Search"/>
                    </button>
                    <button className="header__icons--cart" onClick={() => setOpen(!status, true)}>
                        <FaShoppingBag alt="Cart"/>
                        <Counter value={number}/>
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
