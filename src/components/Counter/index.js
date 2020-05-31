import React from 'react';

import './style.css';

const Counter = ({number = 0}) => {
    return (
        <sup className="counter">
            <span>{number}</span>
        </sup>
    );
}

export default Counter;
