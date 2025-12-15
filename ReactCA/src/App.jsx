import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Employees from './Employees'

function App() {
   const employees = [
    {id:1 , name: "Amit" , role:"Developer",city:"Pune"},
    {id:2 , name: "Sakshi" , role:"Designer",city:"Delhi"},
    {id:3 , name: "Rohan" , role:"Tester",city:"Mumbai"}
   ]

  return (
    <>
    <Employees details = {employees}/>
      
    </>
  )
}

export default App
