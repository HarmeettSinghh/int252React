import React, { useRef, useState } from 'react'

export default function UncontrolledComponent() {
    const Ref1 = useRef(null);
    const Ref2 = useRef(null);
    const [selected,setSelected] = useState("")
    const handleSubmit = (e) =>{
        alert (`Welcome ${Ref1.current.value} ${Ref2.current.value}`)
        e.preventDefault();

    }
    const handleSelect = (e) =>{
        setSelected(e.target.value)


    }

  return (
    <div>
       <form action="" onSubmit={handleSubmit}>
        First Name: <input type="text" ref={Ref1} /> <br />
        Last Name: <input type="text" ref={Ref2}/> <br />
        <select name="" id="" value ={selected} onChange={handleSelect}>
            <option value="">Select an option</option>
            <option value="Student">Student</option>
            <option value="Teacher">Teacher</option>
            <option value="Other">Other</option>
        </select>
        <p>Selected Occupation : {selected}</p>

        
        <button type='submit'>Submit Form</button>
       </form>
    </div>
  )
}
