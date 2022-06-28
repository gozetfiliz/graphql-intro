import React, { useState } from "react";
import "./App.css";

function App() {
  const [users, setUsers] = useState([]);

  const handleOnAdd = () => {};
  const handleOnUpdate = () => {};
  const handleOnReset = () => {};
  const handleOnEdit = () => {};
  const handleOnDelete = () => {};

  return (
    <div className="parent">
      <div className="container">
        <h2>Users</h2>

        <div>
          <div className="add-update-area">
            <input
              className="input"
              // value={}
              placeholder="Id"
              onChange={() => {}}
            />
            <input
              className="input"
              // value={}
              placeholder="Name"
              onChange={() => {}}
            />
            <input
              className="input"
              // value={}
              placeholder="Age"
              onChange={() => {}}
            />
          </div>
          <div className="add-update-area">
            <button className="button" onClick={handleOnAdd}>
              Add
            </button>
            <button className="button" onClick={handleOnUpdate}>
              Update
            </button>
            <button className="button" onClick={handleOnReset}>
              Reset
            </button>
          </div>
        </div>

        {users?.map((user) => (
          <div
            key={`${user.id}-${user.name}`}
            className="user-card"
            onClick={handleOnEdit}
          >
            <div className="user-card-left">
              <p className="user-info">Id: {user.id}</p>
              <p className="user-info">Name: {user.name}</p>
              <p className="user-info">Age: {user.age}</p>
            </div>

            <div className="user-card-right">
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
    </div>
  );
}

export default App;
