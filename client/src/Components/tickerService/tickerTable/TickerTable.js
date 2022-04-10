import React from 'react';

const TickerTable = ({receivedTicker}) => {
    return (
        <ul>
            {receivedTicker.map((item)=> (<li>{item}</li>))}
        </ul>
    );
};

export default TickerTable;