import React, { useState } from 'react'

export default function Usestateex1() {
    const [age,setAge] = useState(0);
    const [name,setname] = useState('Harmeet')
    const[emp, tog] = useState(false)
    const updatename=()=>{
        setname("Harmeet Singh")
    }
    const incrementage = () =>{
        setAge(age+1)
    }
    const decrementage = () =>{
        setAge(age-1)
    }
    const togg = () =>{
        tog(!emp)

    }
  return (
    <div>
        <p>Name: {name} </p>
        <button onClick={updatename}>Change Name</button>
        <br /><br />
        <p>Age: {age}</p>
        <button onClick={incrementage}>Increment Age</button>
        <button onClick={decrementage}>Decrement Age</button>
        <p>Is Employed:  {emp ? "Yes" : "No"} </p>
        <button onClick={togg}>Toggle</button>
      
    </div>
  )
}
