import React from 'react';

const TickerTable = ({receivedTicker}) => {
    return (
        <ul>
            {receivedTicker.map((item)=> (<li key={item}>{item}</li>))}
        </ul>
    );
};

export default TickerTable;