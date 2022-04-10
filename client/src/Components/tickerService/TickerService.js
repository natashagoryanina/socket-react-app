import React, { useEffect, useState } from 'react';
import io from 'socket.io-client';
import TickerForm from './tickerForm/TickerForm';
import TickerTable from './tickerTable/TickerTable';
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

const TickerService = () => {
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
            <TickerForm 
                priceTicker={priceTicker}
                onFormChange={onFormChange} 
                sendTicker={sendTicker}
            />
            <TickerTable receivedTicker={receivedTicker}/>
        </>
    );
};

export default TickerService;