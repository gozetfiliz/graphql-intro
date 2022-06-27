import React, { useState } from "react";
import "./App.css";

function App() {
  const [users, setUsers] = useState([]);

  const handleOnAdd = () => {}
  const handleOnUpdate = () => {}
  const handleOnReset = () => {}
  const handleOnEdit = () => {}
  const handleOnDelete = () => {}

  return (
    <div className="container">
      <h2>Users</h2>

      <div className="add-update-area">
        <input
          // value={}
          placeholder="Id"
          onChange={() => {}}
        />
        <input
          // value={}
          placeholder="Name"
          onChange={() => {}}
        />
        <input
          // value={}
          placeholder="Age"
          onChange={() => {}}
        />
        <button onClick={handleOnAdd}>Add</button>
        <button onClick={handleOnUpdate}>Update</button>
        <button onClick={handleOnReset}>Reset</button>
      </div>

      {users?.map((user) => (
        <div key={`${user.userId}-${user.name}`} className="user-card">
          <div className="user-card-left">
            <p className="user-info">Id: {user.id}</p>
            <p className="user-info">Name: {user.name}</p>
            <p className="user-info">Age: {user.age}</p>
          </div>

          <div className="user-card-right">
            <span
              className="material-icons md-18 orange600"
              onClick={handleOnEdit}
            >
              edit
            </span>
            <span
              className="material-icons md-18 red600"
              onClick={handleOnDelete}
            >
              delete
            </span>
          </div>
        </div>
      ))}
    </div>
  );
}

export default App;
