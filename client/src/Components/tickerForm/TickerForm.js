import React, { useEffect, useState } from 'react';
import io from 'socket.io-client';
import TickerPage from '../tickerPage/TickerPage';
const socket = io.connect("http://localhost:4000");

const initialState = {
    ticker: '',
    exchange: '',
    price: '',
    change: '',
    changePercent: '',
    divident: '',
    yield: '',
  };

const TickerForm = () => {
    const [priceTicker, setPriceTicker] = useState(initialState);
    const [receivedTicker, setReceivedTicker] = useState([]);

    useEffect(() => {
        socket.on("receive_ticker", (data) => {
          const newData = Object.values(data.priceTicker)
          setReceivedTicker(newData);
        });
    }, [socket]);

    const sendTicker = () => {
        socket.emit("send_ticker", { priceTicker });
    };
    
      const onFormChange = (e) => {
        const { name, value } = e.target;
        console.log(priceTicker)
        setPriceTicker((prev) => ({...prev, [name]: value}));
        console.log(priceTicker)
    };

    return (
        <>
        <form>
            <label>
                Ticker:
                <select name='ticker' onChange={onFormChange}>
                    <option value="AAPL" selected>AAPL</option>
                    <option value="GOOGL">GOOGL</option>
                    <option value="MSFT">MSFT</option>
                    <option value="AMZN">AMZN</option>
                    <option value="FB">FB</option>
                    <option value="TSLA">TSLA</option>
                </select>
            </label>
            <label>
                Exchange:
                <input
                    type='text'
                    value={priceTicker.exchange}
                    name='exchange'
                    onChange={onFormChange}
                />
            </label>
            <label>
                Price:
                <input
                    type='text'
                    value={priceTicker.price}
                    name='price'
                    onChange={onFormChange}
                />
            </label>
            <label>
                Change:
                <input
                    type='text'
                    value={priceTicker.change}
                    name='change'
                    onChange={onFormChange}
                />
            </label>
            <label>
                Change percent:
                <input
                    type='text'
                    value={priceTicker.changePercent}
                    name='changePercent'
                    onChange={onFormChange}
                />
            </label>
            <label>
                Divident:
                <input
                    type='text'
                    value={priceTicker.divident}
                    name='divident'
                    onChange={onFormChange}
                />
            </label>
            <label>
                Yield:
                <input
                    type='text'
                    value={priceTicker.yield}
                    name='yield'
                    onChange={onFormChange}
                />
            </label>
            <button onClick={sendTicker}>Submit</button>
      </form>
      <TickerPage receivedTicker={receivedTicker}/>
      </>
    );
};

export default TickerForm;