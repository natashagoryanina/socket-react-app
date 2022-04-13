import React from 'react';

const TickerForm = ({onFormChange, priceTicker, sendTicker}) => {

    return (
        <form>
            <label>
                Ticker:
                <select name='ticker' onChange={onFormChange}>
                    <option value="AAPL" defaultValue>AAPL</option>
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
                    type='number'
                    min="0"
                    value={priceTicker.exchange}
                    name='exchange'
                    onChange={onFormChange}
                    required
                />
            </label>
            <label>
                Price:
                <input
                    type='number'
                    min="0"
                    value={priceTicker.price}
                    name='price'
                    onChange={onFormChange}
                    required
                />
            </label>
            <label>
                Change:
                <input
                    type='number'
                    min="0"
                    max="1"
                    value={priceTicker.change}
                    name='change'
                    onChange={onFormChange}
                    required
                />
            </label>
            <label>
                Change percent:
                <input
                    type='number'
                    min="0"
                    max="1"
                    value={priceTicker.changePercent}
                    name='changePercent'
                    onChange={onFormChange}
                    required
                />
            </label>
            <label>
                Divident:
                <input
                    type='number'
                    min="0"
                    value={priceTicker.divident}
                    name='divident'
                    onChange={onFormChange}
                    required
                />
            </label>
            <label>
                Yield:
                <input
                    type='number'
                    min="0"
                    value={priceTicker.yield}
                    name='yield'
                    onChange={onFormChange}
                    required
                />
            </label>
            <button onClick={sendTicker}>Submit</button>
        </form>
    );
};

export default TickerForm;