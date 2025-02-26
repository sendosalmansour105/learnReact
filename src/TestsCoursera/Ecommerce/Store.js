import { configureStore } from "@reduxjs/toolkit";

import CounterReducer from './CounterSlice'

const store2= configureStore ({reducer:{ counter : CounterReducer}})

export default store2