import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ControlledComponent from './FormHandling/ControlledComponent'
import UncontrolledComponent from './FormHandling/UncontrolledComponent'
import PracticeGet from './HTTPMethods/PracticeGet'
import HTTPReqComp from './HTTPMethods/HTTPReqComp'
import HTTPRequestAxios from './HTTPMethods/HTTPRequestAxios'
import ParentRouting from './Routing/ParentRouting'
import Task from './Routing/task'
import { store } from './store'
import CounterUI from './reduxPractical/CounterUI'
import TodoUI from './reduxPracticalToDo/TodoUI'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
        {/* // <ControlledComponent/>
        <UncontrolledComponent/> */}
        {/* <HTTPReqComp/> */}
        {/* <PracticeGet/> */}
        {/* <HTTPReqComp/> */}
        {/* <HTTPRequestAxios/> */}
        {/* <ParentRouting/> */}
        {/* <Task/> */}
        {/* <CounterUI></CounterUI> */}
        <TodoUI> </TodoUI>

        </>
  )
}

export default App
