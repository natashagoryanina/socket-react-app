import React from 'react';
import TickerTableContainer from './TickerTableStyled';

const TickerTable = ({receivedTicker}) => {
    return (
        <TickerTableContainer>
            <tr>
                <th>Ticker</th>
                <th>Exchange</th>
                <th>Price</th>
                <th>Change</th>
                <th>Change Percent</th>
                <th>Divident</th>
                <th>Yield</th>
                <th>Last trade time</th>
            </tr>
            <tr>
                <td>{receivedTicker.ticker}</td>
                <td>{receivedTicker.exchange}</td>
                <td>{receivedTicker.price}$</td>
                <td>{receivedTicker.change}</td>
                <td>{receivedTicker.changePercent}%</td>
                <td>{receivedTicker.divident}</td>
                <td>{receivedTicker.yield}</td>
                <td>{receivedTicker.last_trade_time}</td>
            </tr>
        </TickerTableContainer>
    );
};

export default TickerTable;