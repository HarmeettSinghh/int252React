import React, { useState } from 'react'
import axios from "axios"

const HTTPRequestAxios = () => {
  const [users, setUsers] = useState([]);
  const [singleUser, setSingleUser] = useState(null);
  const [errorMessage , setErrorMessage] = useState("");
  const [resMessage, setResMessage] = useState("");

  const fetchData = () => {
    axios.get("https://jsonplaceholder.typicode.com/users")
      .then(res => setUsers(res.data))
      .catch(err => console.log(err));
  };

  const fetchSingleData = () => {
    axios.get("https://jsonplaceholder.typicode.com/users/1")
      .then(res => setSingleUser(res.data))
      .catch(err => console.log(err));
  };

  const postData = () =>{
    const newData = {
      name:"Aman",
      username: "aman23232",
      email: "aman232323@gmail.com"
    }

    axios.post("https://jsonplaceholder.typicode.com/users" , newData)
      .then(res=>{
        console.log(res.data);
        setResMessage("User created successfully");
        setErrorMessage("");
        
      })
      .catch((err)=>{
        console.log(err);
        setErrorMessage("User not created successfully");
        setResMessage("");
      })
  }

  return (
    <div>
      <button onClick={fetchData}>Fetch All Users</button>

      <ul>
        {users.map(user => (
          <li key={user.id}>
            Name: {user.name}<br />
            Username: {user.username}<br />
            Email: {user.email}<br /><br />
          </li>
        ))}
      </ul>

      <button onClick={fetchSingleData}>Fetch Single User</button>
      <button onClick={postData}>Post Data</button>

      {resMessage && (
        <p style={{color: "green"}}>{resMessage}</p>
      )}

      {errorMessage && (
        <p style={{color: "red"}}>{errorMessage}</p>
      )}

      {singleUser && (
        <div style={{ marginTop: "20px", padding: "10px", border: "1px solid gray" }}>
          <h3>Single User Data</h3>
          Name: {singleUser.name}<br />
          Username: {singleUser.username}<br />
          Email: {singleUser.email}<br />
        </div>
      )}
      {/* put and delete is left  complete it */} 
    </div>
  );
};

export default HTTPRequestAxios;
