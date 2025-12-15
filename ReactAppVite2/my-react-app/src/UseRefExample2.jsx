import React, { useEffect, useState , useRef } from 'react'

const UseRefExample2 = () => {
    const [val,setVal] = useState('');
    const preRef = useRef('');
    const renderValue = useRef(0);
    useEffect(()=>{
        preRef.current = val;
        renderValue.current = renderValue.current + 1;
    },[val]);
  return (
    <div>
      <input type="text" ref={preRef} value = {val} onChange={(a)=>setVal(a.target.val)} />
      <h2>Current Value: {val}</h2>
      <h2>Previous Value: {preRef.current}</h2>
      <h2>Rendering number: {renderValue.current}</h2>
    </div>
  )
}

export default UseRefExample2

