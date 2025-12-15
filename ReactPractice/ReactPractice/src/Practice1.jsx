import React, { useState } from "react";


function Practice1(){
const [cars,setcars] = useState([]);
 
const[carYear,setCarYear] = useState(new Date().getFullYear());
const [carMake, setCarMake] = useState("");
const [carModel, setCarModel] = useState("")
const handleAddCar=()=>{
   const newCar = {year: carYear,
                 make: carMake,
                 model: carModel};
    setcars(cars => [...cars,newCar]);
    setCarMake("");
    setCarModel("");
    
}
const handleRemoveCar=(index)=>{
    setcars(cars => cars.filter((element,i)=> i!== index));

}
const handleCarYear=(e)=>{
  setCarYear(e.target.value)
}
const handleCarMake=(e)=>{
 setCarMake(e.target.value)
}
const handleCarModel=(e)=>{
 setCarModel(e.target.value)
}

    return(
        <div>
            <h2>List of Car Objects </h2>
            <ul>
                {cars.map((car,index) =>
                    <li key={index} onClick={()=>handleRemoveCar(index)}>
                        {car.year} {car.make} {car.model}
                    </li>
                )}
            </ul>

            <input type="number" value={carYear} name="" id="" onChange={handleCarYear} /> <br />
            <input type="text" value={carMake}placeholder="Enter car make" onChange={handleCarMake} /><br />
            <input type="text" value= {carModel} placeholder="Enter car model" onChange={handleCarModel}/><br />
            <button onClick={handleAddCar}>Add Car</button>
        </div>
    )
}
export default Practice1
