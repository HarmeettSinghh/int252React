// import React, {useState, useEffect} from 'react'
// //jsonplaceholder API 
// const HTTPRequestComp = () => {
//     const [posts,setPosts] = React.useState([]);
// useEffect(()=>{
//         fetch('https://jsonplaceholder.typicode.com/posts')
//         .then(res => res.json())
//         .then(data => {
//             console.log(data);
//             setPosts(data);
//     })
// },[]);

//   return (
//     <div>
//         <ul>
//             {
//                 posts.map(post => {
//                     return <li key={post.id}>TITLE: {post.title} <br/> 
//                     BODY: {post.body} <br/> 
//                     User ID: {post.userId}
//                     </li>

//                 })
//             }
//         </ul>
//     </div>
//   )
// }

// export default HTTPRequestComp


import React, { useState } from 'react';

const HTTPRequestComp1 = () => {

  const [posts, setPosts] = useState([]);
  const [responeMsg, setResponseMsg] = useState('');
  const [errorMsg, setErrorMsg] = useState('');

  // Fetching data from the API
  // Using dummyjson API to fetch users
  // Using jsonplaceholder API to post data

  const handleFetch = () => {
    fetch('https://dummyjson.com/users')
      .then(res => res.json())
      .then(data => {
        console.log(data.users);
        setPosts(data.users);
      });
  };

  const handlePost = () =>{
    const newUser ={
        firstName: "John",
        LastName: "Dixit",
        age: 30,
        gender: "Male",
        email: "johndix123@gmail.com",
        phone: "1234567890"
    }
    fetch('https://jsonplaceholder.typicode.com/posts', {
        method : 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(newUser)
    })
    .then(res => {
        if(!res.ok){
            throw new Error("Network response was not ok");
        }
        return res;
    })
    .then(res => res.json())
    .then(data => {
        console.log("New User Added: ", data);
        setResponseMsg("Post Added Successfully");
        setErrorMsg('');
    })
    .catch(() => {
        setErrorMsg("Error in Posting Data");
        setResponseMsg('');
    })
  }
  const handlePut = () =>{
    const updatedUser ={
        firstName: "Jane",
        LastName: "Dixit",
        age: 28,
        gender: "Female",
        email: "janedix1234@gmail.com"
    }
    fetch('https://jsonplaceholder.typicode.com/posts/1', {
        method : 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(updatedUser)
    })
    .then(res => {
        if(!res.ok){
            throw new Error("Network response was not ok");
        }
        return res;
    })
    .then(res => res.json())
    .then(data => {
        console.log("User Updated: ", data);
        setResponseMsg("Put Request Successful");
        setErrorMsg('');
    })
    .catch(() => {
        setErrorMsg("Error in Put Request");
        setResponseMsg('');
    })
    }
    const handleDelete = () =>{
        fetch('https://jsonplaceholder.typicode.com/posts/1', {
            method : 'DELETE'
        })
        .then(res => {
            if(!res.ok){
                throw new Error("Network response was not ok");
            }
            return res;
        })
        .then(() => {
            console.log("User Deleted");
            setResponseMsg("Delete Request Successful");
            setErrorMsg('');
        })
        .catch(() => {
            setErrorMsg("Error in Delete Request");
            setResponseMsg('');
        })
    }
    

  return (
    <div>
      <button onClick={handleFetch}>Fetch Users</button>
      <button onClick={handlePost}>Post Data</button>
      <button onClick={handlePut}>Put Data</button>
      <button onClick={handleDelete}>Delete Data</button>
      <p>{responeMsg}</p> 
      <p>{errorMsg}</p>
      <ul>
        {posts.map(user => (
          <li key={user.id}>
            First Name: {user.firstName}<br />
            Last Name: {user.lastName}<br />
            Age: {user.age}<br />
            Gender: {user.gender}<br />
            Email: {user.email}<br />
            Phone: {user.phone}<br /><br />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default HTTPRequestComp1;