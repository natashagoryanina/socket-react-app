import { createReducer } from '@reduxjs/toolkit';
import { addTicker } from './tickerActions';

const tickerReducer = createReducer([], {
    [addTicker]: (state, action) => [...state, action.payload],
});

export default tickerReducer;