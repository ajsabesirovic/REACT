import axios from "axios";
import React, { useEffect, useState } from "react";
import "./App.css";
import User from "./components/User";

function AppCRUD() {
  const [users, setUsers] = useState([]);
  const [user, setUser] = useState({
    name: "",
    username: "",
    email: "",
    password: "",
    phone_number: "",
  });
  const [addEdit, setAddEdit] = useState(1);

  const getUsersData = async () => {
    try {
      let response = await axios.get(
        "https://centarnitbe.herokuapp.com/user/all"
      );
      setUsers(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const getActiveUsers = async () => {
    try {
      let response = await axios.get(
        "https://centarnitbe.herokuapp.com/user/all/active"
      );
      setUsers(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const addUser = () => {
    let newUser = axios
      .post("https://centarnitbe.herokuapp.com/user/", {
        name: user.name,
        email: user.email,
        username: user.username,
        password: user.password,
      })
      setUsers((prevState) => {

       return [...prevState, newUser]
      })
    //   .then(getUsersData());
    // setUser({
    //   name: "",
    //   username: "",
    //   email: "",
    //   password: "",
    //   phone_number: "",
    // });
  };
  const removeUser = (uId) => {
    axios.delete(`https://centarnitbe.herokuapp.com/user/hard_delete/${uId}`)
    .then(
      getUsersData()
    )
  };
  const fillForm = (uId) => {
    let editedUser = {};
    users.forEach((u) => {
      if (uId === u.id) {
        editedUser = u;
      }
    });
    setUser(editedUser);
    setAddEdit(2);
  };

  const saveEditedUser = (uId) => {
    axios
      .put(`https://centarnitbe.herokuapp.com/user/${uId}`, {
        name: user.name,
        email: user.email,
        username: user.username,
        phone_number: user.phone_number,
      })
      .then((r) => {
        getUsersData();
      });
  };

  const inputHandler = (e) => {
    e.preventDefault();
    setUser((prevState) => {
      return {
        ...prevState,
        [e.target.name]: e.target.value,
      };
    });
  };

  const cancelEditForm = () => {
    setUser({
      name: "",
      username: "",
      email: "",
      password: "",
    });
    setAddEdit(1);
  };

  useEffect(() => {
    getUsersData();
  }, []);

  return (
    <div className="container">
      <div className="form-container">
        <label htmlFor="name">Name</label>
        <input
          type="text"
          name="name"
          value={user.name}
          onChange={(e) => {
            inputHandler(e);
          }}
        />
        <label htmlFor="username">Username</label>
        <input
          type="text"
          name="username"
          value={user.username}
          onChange={(e) => {
            inputHandler(e);
          }}
        />
        <label htmlFor="email">Email</label>
        <input
          type="text"
          name="email"
          value={user.email}
          onChange={(e) => {
            inputHandler(e);
          }}
        />
        {addEdit === 1 && (
          <>
            <label htmlFor="password">Password</label>
            <input
              type="text"
              name="password"
              value={user.password}
              onChange={(e) => {
                inputHandler(e);
              }}
            ></input>
          </>
        )}
        {addEdit === 2 && (
          <>
            <label htmlFor="number">Number</label>
            <input
              type="text"
              name="phone_number"
              value={user.phone_number}
              onChange={(e) => {
                inputHandler(e);
              }}
            />
          </>
        )}

        {addEdit === 1 && <button onClick={addUser}>Add user</button>}
        {addEdit === 2 && (
          <div>
            <button
              onClick={() => {
                saveEditedUser(user.id);
              }}
            >
              Save
            </button>
            <button onClick={cancelEditForm}>Cancel</button>
          </div>
        )}
      </div>
      <table className="user-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Username</th>
            <th>Email</th>
            <th>Active</th>
            <th>Options</th>
          </tr>
        </thead>
        <tbody>
          {users.map((u) => {
            return (
              <User key={u.id} usr={u} rmUser={removeUser} editUsr={fillForm} />
            );
          })}
        </tbody>
      </table>
      <button onClick={getActiveUsers}>Show only active users</button>
    </div>
  );
}

export default AppCRUD;


