import React, { useEffect, useState } from 'react';
import io from 'socket.io-client';
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


const App = () => {
  const [message, setMessage] = useState("");
  const [receivedMessage, setReceivedMessage] = useState("");
  const [priceTicker, setPriceTicker] = useState(initialState);
  const [receivedTicker, setReceivedTicker] = useState("");

  useEffect(() => {
    socket.on("receive_message", (data) => {
      setReceivedMessage(data.message);
    });
    socket.on("receive_ticker", (data) => {
      setReceivedTicker(data.priceTicker);
    });
  }, [socket]);

  const sendMessage = () => {
    socket.emit("send_message", { message });
  };

  const onHandleChange = (event) => {
    const { value } = event.target;
    setMessage(value);
  };

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
    <div>
      <form>
        <label>
          Ticker:
          <input
            type='text'
            value={priceTicker.ticker}
            name='ticker'
            onChange={onFormChange}
          />
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
      <h1>Ticker</h1>
      {receivedTicker}
      <input placeholder="Message" onChange={onHandleChange}/>
      <button onClick={sendMessage}>Send Message</button>
      <h1>Message:</h1>
      {receivedMessage}
    </div>
  );
};

export default App;
