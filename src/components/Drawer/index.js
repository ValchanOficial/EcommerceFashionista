import React from 'react';
import { connect } from 'react-redux';

import { setStatus } from '../../store/actions/action';

import Search from '../Search';
import Cart from '../Cart';

import './style.css';

const Drawer = ({status, setClose, number, search}) => {
    return (
        <>
            <div className={`drawer ${status === true ? 'drawer--is-visible' : ''}`}>  
                <header className="drawer__header">
                    <button 
                        className={`drawer__button--close ${status && 'drawer__button--close--is-visible'}`} 
                        onClick={() => setClose(!status)}>&times;
                    </button>
                    {search ? 'Buscar Produtos': `Sacola (${number})`}
                </header>
                {search === true ? <Search/> : <Cart/>}
            </div>
        </>
    );
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
        setClose(status) {
            dispatch(setStatus(status));
        }
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Drawer);
