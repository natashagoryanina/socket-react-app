import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { composeWithDevTools } from '@redux-devtools/extension';
import tickerReducer from './tickerReducers';

const rootReducer = combineReducers({
    ticker: tickerReducer
});

const store = configureStore({ 
    reducer: rootReducer,
}, composeWithDevTools());
console.log(store.getState())
export default store;