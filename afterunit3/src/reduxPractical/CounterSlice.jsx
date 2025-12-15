import { createSlice } from '@reduxjs/toolkit';
// 1 -> name, 2 -> initialState, 3 -> reducers
// dispacth -> store -> updation -> UI 

export const CounterSlice = createSlice({
  name: 'CounterExample',
  initialState: { count: 0 },
  reducers: {
    increment: (state) => {
      state.count += 1;
    },
    decrement: (state) => {
      state.count -= 1;
    },
    reset: (state) => {
      state.count = 0;
    },
    addbyNum: (state, action) => {
      state.count += action.payload;
    }
  }
});

// export actions
export const { increment, decrement, reset, addbyNum } = CounterSlice.actions;

// export reducer
export default CounterSlice.reducer;
