import React, { useEffect, useState } from 'react';
import io from 'socket.io-client';
import { useNavigate } from 'react-router-dom';
import TickerForm from './tickerForm/TickerForm';
import TickerTable from './tickerTable/TickerTable';
import TickerServiceContainer from './TickerServiceStyled';

import { addTicker } from '../../redux/tickerActions';
import { connect } from 'react-redux';

const socket = io.connect("http://localhost:4000");

const initialState = {
    ticker: '',
    exchange: '',
    price: '',
    change: '',
    changePercent: '',
    divident: '',
    yield: '',
    last_trade_time: ''
};

const TickerService = (props) => {
    const [priceTicker, setPriceTicker] = useState(initialState);
    const [receivedTicker, setReceivedTicker] = useState({});
    const [table, setTable] = useState(false);
   
    useEffect(() => {
        socket.on("receive_ticker", (data) => {
          setReceivedTicker(data.priceTicker);
          setTable((prev) => (!prev));
        });
    }, [socket]);

    const sendTicker = () => {
        socket.emit("send_ticker", { priceTicker });
        props.addTicker(priceTicker);
    };
    
    const onFormChange = (e) => {
        const { name, value } = e.target;
        setPriceTicker((prev) => ({...prev, [name]: value}));
    };

    const navigate = useNavigate();

    const onHandleClick = () => {
        navigate("/");
    };

    return (
        <TickerServiceContainer>
            <button 
                type='button'
                onClick={onHandleClick}
                className="back-btn"
            >
                Back
            </button>
            <TickerForm 
                priceTicker={priceTicker}
                onFormChange={onFormChange} 
                sendTicker={sendTicker}
            />
            {table && <TickerTable receivedTicker={receivedTicker}/>}
        </TickerServiceContainer>
    );
};

const mapDispatchToProps = {
    addTicker
};

export default connect(null, mapDispatchToProps)(TickerService);