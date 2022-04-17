import { configureStore, combineReducers } from '@reduxjs/toolkit';
import tickerReducer from './tickerReducers';

const rootReducer = combineReducers({
    ticker: tickerReducer
});

const store = configureStore({ reducer: rootReducer });

export default store;