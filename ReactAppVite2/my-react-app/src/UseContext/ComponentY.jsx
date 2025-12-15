import React from 'react'
import { useContext } from 'react'
import { snameContext , marksContext } from './ProviderComp';

const ComponentY = () => {
    const sname = useContext(snameContext);
    const marks = useContext(marksContext);
  return (
    <div>
      <h2>Welcome to Component</h2>
      <h2>The name is : {sname} and marks are {marks} </h2>
    </div>
  )
}

export default ComponentY
