import React from 'react'
import { useState } from 'react'

const WithoutUseContext = () => {
    const [subject , setSubject] = useState("React");
    
  return (
    <div>
      <h2>This is First Component and passing the subject as prop to C</h2>
      <ComponentA subject = {subject}/>
    </div>
  )
}
const ComponentA = () =>{
    return(
        <div>
        <h2>This is Component A and recieving the prop from first componentB</h2>
        <ComponentB subject = {subject}/>
        </div>
    )
}
const ComponentB = ({subject}) =>{
    return(
        <div>
            <h2>This is component B And recieving the value from  </h2>
        </div>
    )
}
//crop drilling
export default WithoutUseContext
