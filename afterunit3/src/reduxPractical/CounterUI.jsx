import React, { useState } from 'react'
import {useSelector , useDispatch} from "react-redux"
import { decrement, increment, reset } from './CounterSlice';
const CounterUI = () => {
    const[value1, setValue1] = useState(0)
    const counterValue = useSelector(state=>state.counter.count)
    const dispatch = useDispatch();
  return (
    <div>
        <h2>Counter: {counterValue}</h2>
      <button onClick={()=>dispatch(increment())}>Increment</button>
      <button onClick={()=>dispatch(decrement())}>Decremen</button>
      
      <button onClick={()=>dispatch(reset())}>Reset</button>

      <input type="number" value={value1} onChange={(e)=>setValue1(e.target.value)}/>
      <button onClick={()=>{dispatch(addbyNum(value1))}}>Add by Num</button>
    </div>
  )
}

export default CounterUI
