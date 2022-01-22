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
        setUser((prevState) => {
          return {
            ...prevState,
            [e.target.name]:e.target.value
          };
        });
      };
    const login =async () => { 
      let res = await axios.post("https://serene-fortress-45917.herokuapp.com/auth/login", {
        email: user.email,
        password: user.password,
      })
      console.log(res.data.data)
        setUser({
            email: "",
            password: ""
          });

          const d = new Date();
          d.setTime(d.getTime() + 2000);
          let expires = "expires="+ d.toUTCString();
       
      localStorage.setItem('access_token',JSON.stringify(res.data.data.access_token))
      localStorage.setItem('refresh_token',JSON.stringify(res.data.data.refresh_token))
      sessionStorage.setItem('access_token',JSON.stringify(res.data.data.access_token))
      sessionStorage.setItem('refresh_token',JSON.stringify(res.data.data.refresh_token))
      document.cookie = `access_token=${JSON.stringify(res.data.data.access_token)}`;
      document.cookie = `refresh_token=${JSON.stringify(res.data.data.refresh_token)}; ${expires}`;
    }

    const logout = () => {
      localStorage.removeItem('access_token')
      localStorage.removeItem('refresh_token')
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
        <button onClick={logout} type="submit">Logout</button>

        <button>
            <Link to={"/"}>Go to home</Link>
        </button>

        <p>{JSON.parse(localStorage.getItem('refresh_token'))}</p>
)}
        </div>
    )
}