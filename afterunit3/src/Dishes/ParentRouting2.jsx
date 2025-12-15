import React from 'react'
import Home from '../Routing/Home';
import Dish from './Dish';
import { BrowserRouter , Route, Routes , Link , useNavigate } from "react-router-dom";
const ParentRouting2 = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
            <Route path='/' element={<Home></Home>}></Route>
            <Route path='/dishes' element={<Dish></Dish>}></Route>
        </Routes>

      </BrowserRouter>
    </div>
  )
}

export default ParentRouting2
