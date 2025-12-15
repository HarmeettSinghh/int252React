import React, { useState } from 'react'

export default function Onchange () {
    const [name, setname] = useState("")
    const [value , setValue] = useState(0);
    const [payment,setPayment] = useState("")
    const[del , setDel] = useState("")
    const handlenamechange=(e)=>{
        setname(e.target.value) //targets the input
    }
    const handleValueChange = (e) =>{
        setValue(e.target.value)
    }
    const handlePaymentChange = (e) =>{
        setPayment(e.target.value)
    }
    const handleDeleivery = (e) =>{
      setDel(e.target.value)
    }
    
    

  return (
    <div>
      <input type="text"  value={name} onChange={handlenamechange}/>
      <p>Name: {name}</p>
      <input type="number" value={value} onChange={handleValueChange} />
      <p>Quantity: {value}</p>
      <select name="" id="" value={payment} onChange={handlePaymentChange}>
        <option value="">Select an Option</option>
        <option value="Visa">Visa</option>
        <option value="Mastercard">Mastercard</option>
        <option value="Giftcard">Giftcard</option>

      </select>
      <p>Payment : {payment}</p>
      <label >
        <input type="radio" value= "Delievery"
        onChange={handleDeleivery}/>
        Delivery
      </label>
      <label htmlFor="">
        <input type="radio" value="Pickup"
        onChange={handleDeleivery}/>
        Pickup
      </label>
      <p>Shipping: {del}R</p>
      
    </div>
  )
}
