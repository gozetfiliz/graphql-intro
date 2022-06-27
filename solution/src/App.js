import { useLazyQuery, useMutation, useQuery } from "@apollo/client";
import { useState } from "react";
import {
  ADD_USER,
  GET_USER,
  GET_USERS,
  REMOVE_USER,
  UPDATE_USER,
} from "./apollo/queries/users";
import "./App.css";

function App() {
  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [age, setAge] = useState("");

  const { data } = useQuery(GET_USERS, {
    onError: (e) => {
      console.error(`Bir hata meydana geldi. Hata: ${JSON.stringify(e)}`);
      window.alert(e.graphQLErrors[0].message);
    }
  });

  const [getUser] = useLazyQuery(GET_USER, {
    fetchPolicy: "no-cache",
    onCompleted: (data) => {
      setId(data.user.id);
      setName(data.user.name);
      setAge(data.user.age);
    },
    onError: (e) => {
      console.error(`Bir hata meydana geldi. Hata: ${JSON.stringify(e)}`);
      window.alert(e.graphQLErrors[0]?.message);
    },
  });

  const [addUser] = useMutation(ADD_USER, {
    refetchQueries: [{ query: GET_USERS }, "GetUsers"],
    onError: (e) => {
      console.error(`Bir hata meydana geldi. Hata: ${JSON.stringify(e)}`);
      window.alert(e.graphQLErrors[0]?.message);
    },
  });

  const [updateUser] = useMutation(UPDATE_USER, {
    refetchQueries: [{ query: GET_USERS }, "GetUsers"],
    onError: (e) => {
      console.error(`Bir hata meydana geldi. Hata: ${JSON.stringify(e)}`);
      window.alert(e.graphQLErrors[0]?.message);
    },
  });

  const [removeUser] = useMutation(REMOVE_USER, {
    refetchQueries: [{ query: GET_USERS }, "GetUsers"],
    onError: (e) => {
      console.error(`Bir hata meydana geldi. Hata: ${JSON.stringify(e)}`);
      window.alert(e.graphQLErrors[0]?.message);
    },
  });

  function handleOnAdd() {
    addUser({
      variables: { createUserInput: { id, name, age: parseInt(age) } },
    });
    handleOnReset();
  }

  function handleOnUpdate() {
    updateUser({
      variables: { updateUserInput: { id, name, age: parseInt(age) } },
    });
  }

  function handleOnReset() {
    setId("");
    setName("");
    setAge("");
  }

  function handleCardEdit(id) {
    getUser({
      variables: {
        id,
      },
    });
  }

  function handleOnDelete(id) {
    removeUser({
      variables: { id },
    });
  }

  return (
    <div className="parent">
      <div className="container">
        <h2>Users</h2>

        <div>
          <div className="add-update-area">
            <input
              className="input"
              value={id}
              placeholder="Id"
              onChange={(e) => setId(e.target.value)}
            />
            <input
              className="input"
              value={name}
              placeholder="Name"
              onChange={(e) => setName(e.target.value)}
            />
            <input
              className="input"
              value={age}
              placeholder="Age"
              onChange={(e) => setAge(e.target.value)}
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

        {data?.users?.map((user) => (
          <div
            key={`${user.id}-${user.name}`}
            className="user-card"
            onClick={() => handleCardEdit(user.id)}
          >
            <div className="user-card-left">
              <p className="user-info">Id: {user.id}</p>
              <p className="user-info">Name: {user.name}</p>
              <p className="user-info">Age: {user.age}</p>
            </div>

            <div className="user-card-right">
              <span
                className="material-icons md-18 red600"
                onClick={() => handleOnDelete(user.id)}
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
