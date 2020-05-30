import React from 'react';

import './style.css';

const Counter = ({value}) => {
    return (
        <sup className="counter">
            <span>{value ? value : 0}</span>
        </sup>
    );
}

export default Counter;