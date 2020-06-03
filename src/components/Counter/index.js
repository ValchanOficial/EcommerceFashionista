import React from 'react';
import { connect } from 'react-redux';

import './style.css';

const Counter = ({number = 0}) => {
    return (
        <sup className="counter">
            <span>{number}</span>
        </sup>
    );
}

const mapStateToProps = state => {
    return {
        number: state.cart.number
    }
}

export default connect(mapStateToProps)(Counter);
