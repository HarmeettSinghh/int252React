import React from 'react'
import { useState } from 'react'
import ComponentX from './ComponentX';
export const snameContext = React.createContext();
export const marksContext = React.createContext();

const ProviderComp = () => {
    const [sname, setSname] = useState("Aman");
    const [marks, setMarks] = useState(90);
  return (
    <div>
      <snameContext.Provider value = {sname}>
        <marksContext.Provider value = {marks}>
            <ComponentX/>

        </marksContext.Provider>
      </snameContext.Provider>
    </div>
  )
}

export default ProviderComp
