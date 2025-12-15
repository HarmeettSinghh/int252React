import React from 'react'

export default function Button2() {
     const handleclick = (e)=>{e.target.textContent = "Ouch! 😵"}
  return (
   
    <div>
      <button onClick={(e)=>handleclick(e)}>Click me 😄</button>
    </div>
  )
}
