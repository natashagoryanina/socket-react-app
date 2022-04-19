import React from 'react';
import TickerFormContainer from './TickerFormStyled';

const TickerForm = ({onFormChange, priceTicker, sendTicker}) => {
    
    return (
        <TickerFormContainer>
            <form className='form'>
            <label className='form-label'>
                Ticker:
                <select 
                    name='ticker' 
                    onChange={onFormChange}
                    className='form-select'
                    autoFocus
                    required
                >
                    <option value="AAPL">AAPL</option>
                    <option value="GOOGL">GOOGL</option>
                    <option value="MSFT">MSFT</option>
                    <option value="AMZN">AMZN</option>
                    <option value="FB">FB</option>
                    <option value="TSLA">TSLA</option>
                </select>
            </label>
            <label className='form-label'>
                Exchange:
                <input
                    type='number'
                    min="0"
                    value={priceTicker.exchange}
                    name='exchange'
                    onChange={onFormChange}
                    className='form-input'
                    required
                />
            </label>
            <label className='form-label'>
                Price:
                <input
                    type='number'
                    min="0"
                    value={priceTicker.price}
                    name='price'
                    onChange={onFormChange}
                    className='form-input'
                    required
                />
            </label>
            <label className='form-label'>
                Change:
                <input
                    type='number'
                    min="0"
                    max="100"
                    value={priceTicker.change}
                    name='change'
                    onChange={onFormChange}
                    className='form-input'
                    required
                />
            </label>
            <label className='form-label'>
                Change percent:
                <input
                    type='number'
                    min="0"
                    max="100"
                    value={priceTicker.changePercent}
                    name='changePercent'
                    onChange={onFormChange}
                    className='form-input'
                    required
                />
            </label>
            <label className='form-label'>
                Divident:
                <input
                    type='number'
                    min="0"
                    value={priceTicker.divident}
                    name='divident'
                    onChange={onFormChange}
                    className='form-input'
                    required
                />
            </label>
            <label className='form-label'>
                Yield:
                <input
                    type='number'
                    min="0"
                    value={priceTicker.yield}
                    name='yield'
                    onChange={onFormChange}
                    className='form-input'
                    required
                />
            </label>
            <label className='form-label'>
                Last trade time:
                <input
                    type='date'
                    value={priceTicker.last_trade_time}
                    name='last_trade_time'
                    onChange={onFormChange}
                    className='form-input'
                    required
                />
            </label>
            </form>
            <button 
                type='button'
                onClick={sendTicker}
                className='submit-btn'
            >
                Submit
            </button>
        </TickerFormContainer>
    );
};

export default TickerForm;