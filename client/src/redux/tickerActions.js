import { ADDTICKER } from "./tickerTypes";
import { createAction } from '@reduxjs/toolkit';

const addTicker = createAction(ADDTICKER);

export { addTicker };