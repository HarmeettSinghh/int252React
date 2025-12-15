//handling events
import React from 'react'

export default function Button1() {
    let count = 0;
    const handleclick = (name)=>{
        if(count<3){
            count++;
            console.log(`${name} you clicked me ${count} times`)
        }
        else{
            console.log(`${name} Stop Clicking me` )
        }
    }
  return (
    <div>
      <button onClick={()=>handleclick("Bro")}>Click Me</button>
    </div>
  )
}
