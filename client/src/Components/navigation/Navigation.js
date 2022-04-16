import React from 'react';
import { NavLink } from "react-router-dom";
import NavigationContainer from './NavigationStyled';

const Navigation = ({routes}) => {
    return (
        <NavigationContainer>
            <ul className='nav-list'>
                {routes.map(({path, name})=> (
                    <li key={path} className='nav-list_item'>
                        <NavLink to={path} className='nav-link'>
                            {name}
                        </NavLink>
                    </li>
                ))}
            </ul>
        </NavigationContainer>
    );
};

export default Navigation;