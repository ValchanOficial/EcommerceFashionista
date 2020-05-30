import React, {useState, useEffect} from 'react';
import Api from '../../services/api';
import './style.css';

import Header from '../Header';
import Products from '../Products';
import Drawer from '../Drawer';
import Loading from '../Loading';

const App = () => {
    const [catalog, setCatalog] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const value = await Api.getCatalog();
            await setCatalog(value);
        }
        fetchData();
    }, []);

    return (
        <div className="app">
            <Header/>
            {catalog.length === 0 
            ? <Loading/>
            : <Products products={catalog}/>}
            <Drawer/>
        </div>
    )
}

export default App;