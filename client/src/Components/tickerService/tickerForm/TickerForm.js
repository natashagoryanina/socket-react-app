import React from 'react';

const TickerForm = ({onFormChange, priceTicker, sendTicker}) => {

    return (
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
    );
};

export default TickerForm;