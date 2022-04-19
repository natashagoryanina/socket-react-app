import React, { lazy, Suspense, useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import PropagateLoader from "react-spinners/PropagateLoader";
import GlobalStyles from '../styles/globalStyles';
import { css } from "@emotion/react";

const HomePage = lazy(() => import('../pages/HomePage' /* webpackChunkName: 'home-page' */));
const TickerPage = lazy(() => import('../pages/TickerPage' /* webpackChunkName: 'ticker-page' */));
const Header = lazy(() => import('./header/Header' /* webpackChunkName: 'header' */));

const override = css` 
  display: block;
  margin-left: 500px;
  margin-top: 500px;
`;

const App = () => {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 5000)
  },[]);

  return (
    <main>
      <GlobalStyles/>
      <Suspense fallback={<PropagateLoader color={'#fff'} loading={loading} size={15} css={override}/>}>
        <Header/>
        <Routes>
            <Route path="/" element={<HomePage/>} exact/>
            <Route path="/ticker" element={<TickerPage/>} />
            <Route path="*" element={<HomePage/>}/>
        </Routes>
      </Suspense>
    </main>
  );
};

export default App;
