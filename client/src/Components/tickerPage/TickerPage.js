import React from 'react';

const TickerPage = ({receivedTicker}) => {
    return (
        <>
            <h1>Ticker</h1>
            <ul>
                {receivedTicker.map((item)=> <li>{item}</li>)}
            </ul>
        </>
    );
}

export default TickerPage;