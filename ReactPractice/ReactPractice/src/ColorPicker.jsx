import React, { useState } from 'react'

export default function ColorPicker() {
    const [color , setcolor] = useState("white")
    const handlecolorchange=(e)=>{
        setcolor(e.target.value)

    }
  return (
    <div className='color-picker-container'>
      <h1 className='colorheading'>Color Picker</h1>
      <div className='color-display' style={{backgroundColor:color}}>
      <p>Selected Color: {color}</p>
      </div>
      <label htmlFor="">Select a color</label>
      <input type="color" name="" id="" value={color} onChange={handlecolorchange} className='inputcolor'/>
    </div>
  )
}
