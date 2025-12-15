import React, { useState } from 'react'
//rafc shotcut
const UsedState2 = () => {
    const [Led,setLed] = useState({
        brand:"Samsung",
        color:"Black",
        price:"25K"
});
const changeColor = () =>{
    setLed((preState)=>{
        return({...preState,color:"silver"})
    })
}

    
  return (
    <div>
      <h2>My Led is of brand {Led.brand} and color is {Led.color}
        <br />
        <button onClick={changeColor}>change Color</button>

      </h2>
    </div>
  )
}

export default UsedState2
