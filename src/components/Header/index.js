import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { FaSearch, FaShoppingBag } from 'react-icons/fa';

import { setStatus, setType } from '../../store/actions/action';

import {ReactComponent as LogoSvg} from '../../assets/img/logo.svg';

import Counter from '../Counter';

import './style.css';

const Header = ({status, setOpen, number}) => {
    return (
        <header className="header">
            <Link to="/" className="header__logo">
                <LogoSvg alt="Amaro"/>
            </Link>
            <div className="header__icons">
                <button className="header__icons--search" onClick={() => setOpen(!status, false)}>
                    <FaSearch alt="Search"/>
                </button>
                <button className="header__icons--cart" onClick={() => setOpen(!status, true)}>
                    <FaShoppingBag alt="Cart"/>
                    <Counter value={number}/>
                </button>
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
