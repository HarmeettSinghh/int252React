import React, { useState } from 'react'
import List from './List';

export default function ArrayinState() {
    const[foods,setFoods] = useState(["Array" , "Orange" , "Banana"]);
    const handleAddFood=()=>{
        const newFood = document.getElementById("foodInput").value;
        document.getElementById("foodInput").value = ""; //.value takes the value not the id
        setFoods(f=>[...f, newFood]) //f represents the previous state
    }
    const handleRemoveFood = (index) =>{
        setFoods(foods=>foods.filter((_,i)=>i!==index))
    }
  return (
    <div>
      <h2>List of Food</h2>
      <ul>
        {foods.map((food,index)=> 
        <li key = {index} onClick={()=>{handleRemoveFood(index)}}>
            {food}</li>)}
      </ul>
      <input type="text" id="foodInput" placeholder='Enter Food Name' />
      <button onClick={handleAddFood} >Add Food</button>
    </div>
  )
}
