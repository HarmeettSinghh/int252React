import { configureStore } from "@reduxjs/toolkit";
import React from 'react'
import getReducer from './reduxPracticalToDo/TdoSlicer'
export const store1 = configureStore({
    reducer:{
        todoReducer : getReducer

    }
})
