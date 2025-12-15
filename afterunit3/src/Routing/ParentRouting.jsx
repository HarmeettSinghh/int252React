// npm i react-router-dom install this
import React from 'react'
import Home from './Home'
import Contact from './Contact'
import About from './About'
import Data from './Data'
import DataFile from './DataFile'
import {BrowserRouter , Routes , Route , Link, useNavigate} from 'react-router-dom'

const NavigatePage = ()=>{
    const navigate = useNavigate();
    return(
      <div>
        <button onClick={()=>navigate(-1)}>Previous</button>
        <button onClick={()=>navigate(+1)}>Next</button>
      </div>
    )
  }
const ParentRouting = () => {
  const aboutData={
    compName: "Infosys",
    locationComp: "Banglore",
    work: "Full Stack"
  }
  
  return (
    <div>
      <BrowserRouter>
      <div><Link to = "/home">Home</Link></div>
      <div><Link to = "/about" state={aboutData}>About</Link></div>                 
      <div><Link to ="/contact?id=4">Contact</Link></div>
      <div><Link to ="/datafile?name=Harsh&regno=1234567">Data</Link></div>
      {<NavigatePage/>}
      <Routes>
        <Route path ="/home" element={<Home></Home>}></Route>
        <Route path = "/about" element={<About/>}></Route>
        <Route path ="/contact" element={<Contact/>}></Route>
        <Route path='/datafile' element={<DataFile/>}></Route>


      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default ParentRouting
