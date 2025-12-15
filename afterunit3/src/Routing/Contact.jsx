import React, { useEffect, useState } from 'react'
import axios from 'axios';
const Contact = () => {
  const qparam = new URLSearchParams(window.location.search);
  const id = qparam.get('id');
  const[users , setUsers] = useState({}); //response is object
 useEffect(()=>{
  axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)
  .then(res=>setUsers(res.data))
  .catch(err=>console.log(err))
},[]);
  return (
    <div>
      <p>This is contact page</p>
      <p>Name: {users.name}</p>
      <p>Username: {users.username}</p>
      <p>Email: {users.email}</p>
    </div>
  )
}

export default Contact
