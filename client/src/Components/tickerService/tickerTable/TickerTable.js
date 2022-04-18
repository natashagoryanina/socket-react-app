import React from 'react';
import TickerTableContainer from './TickerTableStyled';

const TickerTable = (props) => {

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
                <td>{props.receivedTicker.ticker}</td>
                <td>{props.receivedTicker.exchange}</td>
                <td>{props.receivedTicker.price}$</td>
                <td>{props.receivedTicker.change}</td>
                <td>{props.receivedTicker.changePercent}%</td>
                <td>{props.receivedTicker.divident}</td>
                <td>{props.receivedTicker.yield}</td>
                <td>{props.receivedTicker.last_trade_time}</td>
            </tr>
        </TickerTableContainer>
    );
};

export default TickerTable;