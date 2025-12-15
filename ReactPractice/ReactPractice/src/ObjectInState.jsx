import React, { useState } from 'react'

export default function ObjectInState() {
    const [car, setCar] = useState({year:2024,
                                    make: "Ford",
                                    model:  "Mustang"});
const handleYearchange=(e)=>{
  setCar( c => ({...car,year:e.target.value})) //updater function used arrow function 
  //and used first letter of the variable name
}
const handleMakeChange=(e) =>{
   setCar({...car,make:e.target.value})
}
const handleModelChange=(e) =>{
  setCar({...car,model:e.target.value})
}
  return (
    <div>
      <p>Your favourite car is {car.year} {car.make} {car.model}</p>
      <input type="number" value={car.year} onChange={handleYearchange}/>
      <input type="text" value={car.make} onChange={handleMakeChange}/>
      <input type="text" value={car.model} onChange={handleModelChange} />

    </div>
  )
}
