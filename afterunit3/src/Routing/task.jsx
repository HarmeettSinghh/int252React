import React, { useState } from "react";
import axios from "axios";

const TaskTable = () => {
  const [users, setUsers] = useState([]);
  const [userId, setUserId] = useState("");
  const [responseMessage, setResponseMessage] = useState('');
  const [errMessage, setErrMessage] = useState('');

  const fetchData = () => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((res) => setUsers(res.data))
      .catch((err) => console.log(err));
  };

  const postData = () => {
    const newUser = {
      name: "Barcelona",
      username: "Messi",
      email: "messi@barcelona.com",
    };

    axios
      .post("https://jsonplaceholder.typicode.com/users", newUser)
      .then((res) => {
        console.log(res.data);
        setResponseMessage("Post Added Successfully!");
        setErrMessage("");
      })
      .catch(() => {
        setErrMessage("Post is not added! There's a failure");
        setResponseMessage("");
      });
  };

  const putData = () => {
    const newUser = {
      name: "Barcelona",
      username: "Lamine",
      email: "lamine@barcelona.com",
    };

    axios
      .put("https://jsonplaceholder.typicode.com/users/1", newUser)
      .then((res) => {
        console.log(res.data);
        setResponseMessage("Put Request Successfull!");
        setErrMessage("");
      })
      .catch(() => {
        setErrMessage("Put Request Failed!! There's a failure");
        setResponseMessage("");
      });
  };

  const deleteData = (id) => {
    axios
      .delete(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then((res) => {
        console.log(res.data);
        setUsers(users.filter((user) => user.id !== id));
        setResponseMessage("Delete Request Successfull!");
        setErrMessage("");
      })
      .catch(() => {
        setErrMessage("Delete Request Failed!! There's a failure");
        setResponseMessage("");
      });
  };

  const fetchSingleData = () => {
    axios
      .get(`https://jsonplaceholder.typicode.com/users/${userId}`)
      .then((res) => setUsers([res.data]))
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <button onClick={fetchData}>Fetch All Users</button>
      <button onClick={postData}>Post Data</button>
      <button onClick={putData}>Put Data</button>
      <p className="text-green-600">{responseMessage}</p>
      <p className="text-red-600">{errMessage}</p>

      <br /><br />

      <input
        type="number"
        placeholder="Enter User ID"
        value={userId}
        onChange={(e) => setUserId(e.target.value)}
      />

      <button onClick={fetchSingleData}>Fetch User by ID</button>

      <br /><br />

      <table border="1" width="70%">
        <thead>
          <tr>
            <th>Sl No</th>
            <th>Name</th>
            <th>Email</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          {users.map((user, index) => (
            <tr key={user.id}>
              <td>{index + 1}</td>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>
                <button
                  style={{ color: "black" }}
                  onClick={() => deleteData(user.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TaskTable;