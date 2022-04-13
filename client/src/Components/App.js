import React, { lazy, Suspense, useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import PropagateLoader from "react-spinners/PropagateLoader";

const HomePage = lazy(() => import('../pages/HomePage' /* webpackChunkName: 'home-page' */));
const TickerPage = lazy(() => import('../pages/TickerPage' /* webpackChunkName: 'ticker-page' */));
const Header = lazy(() => import('./header/Header' /* webpackChunkName: 'header' */));

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
      <Suspense fallback={<PropagateLoader color={'#D0024A'} loading={loading} size={15} />}>
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

//styled components
//redux
//test
//toaster
//form validation +
//loading +
//lazy +
//webpackchunks +
//ticker page +
//routes +