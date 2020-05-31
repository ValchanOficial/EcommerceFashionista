import React from 'react';
import { FaStroopwafel } from 'react-icons/fa';

import './style.css';

const Loading = () => {
    return (
        <div className="loading">
            <p>Carregando</p>
            <FaStroopwafel className="svg"/>
        </div>
    )
}

export default Loading;
