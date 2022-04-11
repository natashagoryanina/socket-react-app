import React from 'react';
import { mainRoutes } from '../../routes/mainRoutes';
import Navigation from '../navigation/Navigation';
import { Link } from "react-router-dom";

const Header = () => {
    return (
        <header>
            <Link to="/">The Price Ticker Service</Link>
            <h2>Header</h2>
            <Navigation routes={mainRoutes}/>
        </header>
    );
};

export default Header;