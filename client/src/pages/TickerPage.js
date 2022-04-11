import React from 'react';
import { useNavigate } from 'react-router-dom';
import TickerService from '../Components/tickerService/TickerService';

const TickerPage = () => {
    const navigate = useNavigate();

    const onHandleClick = () => {
        navigate("/");
    };
    
    return (
        <>
            <button onClick={onHandleClick}>Back</button>
            <TickerService/>
        </>
    );
};

export default TickerPage;