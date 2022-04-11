import React from 'react';
import { NavLink } from "react-router-dom";

const Navigation = ({routes}) => {
    return (
        <nav>
            <h2>Navigation</h2>
            <ul>
                {routes.map(({path, name})=> (
                    <li key={path}>
                        <NavLink to={path}>
                            {name}
                        </NavLink>
                    </li>
                ))}
            </ul>
        </nav>
    );
};

export default Navigation;