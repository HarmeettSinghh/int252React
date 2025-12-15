import {configureStore} from "@reduxjs/toolkit";
import counterReducer from './reduxPractical/CounterSlice'
export const store = configureStore({
    reducer:{
        counter:counterReducer
    },
});