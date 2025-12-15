import React, { useEffect, useState } from 'react';

const PracticeGet = () => {
  const [posts, setPosts] = useState([]);
 
  const fetchData = () => {
    fetch('https://dummyjson.com/users')
      .then(res => res.json())
      .then(data => {
        setPosts(data.users); // <-- only store the array
      })
      .catch(err => console.error(err));
  };

  return (
    <div>
      <button onClick={fetchData}>Load Users</button>

      <ul>
        {posts.map((item) => (
          <li key={item.id}>
            Name: {item.firstName} <br />
            Lastname: {item.lastName}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PracticeGet;
