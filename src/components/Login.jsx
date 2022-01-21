import React,{ useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

export default function Login() {
    const [user, setUser] = useState({
        email: "",
        password: ""
      });

      const inputHandler = (e) => {
        e.preventDefault();
        console.log(e)
        // console.log()
        // setUser((prevState) => {
        //   return {
        //     ...prevState,
        //     [e.target.name]:e.target.value
        //   };
        // });
      };
    const login = () => {axios
      .post("https://serene-fortress-45917.herokuapp.com/auth/login", {
        email: user.email,
        password: user.password,
      })
        setUser({
            email: "",
            password: ""
          });
    }
     return (
        <div>
        
        <h1>LOGIN</h1>
        
        <input onChange={(e) => {
            inputHandler(e);
          }} placeholder="email" name="email" type='email' value={user.email} ></input>
        
        <input onChange={(e) => {
            inputHandler(e);
          }}  placeholder="password" name="password" type='password' value={user.password}></input>
        
        <button onClick={login} type="submit">Login</button>

        <button>
            <Link to={"/"}>Go to home</Link>
        </button>
        </div>
    )
}