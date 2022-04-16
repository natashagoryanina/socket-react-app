import React from 'react';
import { mainRoutes } from '../../routes/mainRoutes';
import Navigation from '../navigation/Navigation';
import { Link } from "react-router-dom";
import HeaderContainer from './HeaderStyled';

const Header = () => {
    return (
        <HeaderContainer>
            <Link 
                to="/" 
                className="header-link"
                activeClassName='header-link_ctive'
            >
                The Price Ticker Service
            </Link>
            <Navigation routes={mainRoutes}/>
        </HeaderContainer>
    );
};

export default Header;