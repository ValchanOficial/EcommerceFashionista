import React, { useState } from 'react';

import Search from '../Search';
import Cart from '../Cart';

import './style.css';

const Drawer = ({search=true, number=0}) => {
    const [close, setClose] = useState(false);
    
    const handleClose = () => setClose(true);

    return (
        <div className={`drawer ${close === false && 'drawer--is-visible'}`}>
            <header className="drawer__header">
                <button className={`drawer__button--close ${close === false && 'drawer__button--close--is-visible'}`} onClick={handleClose}>&times;</button>
                {search ? 'Buscar Produtos': `Sacola (${number})`}
            </header>
            {search ? <Search/> : <Cart/>}
        </div>
    )
}

export default Drawer;