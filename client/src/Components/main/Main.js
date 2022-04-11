import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from '../../pages/HomePage';
import { mainRoutes } from '../../routes/mainRoutes';

const Main = () => {
    return (
        <main>
            <Routes>
                {mainRoutes.map(({path, element, exact}) => (
                    <Route path={path} element={element} exact={exact}/>
                ))}
                <Route path="*" element={<HomePage/>}/>
            </Routes>
        </main>
    );
};

export default Main;