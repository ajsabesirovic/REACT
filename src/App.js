import * as React from "react";
import Users from "./components/Users"
import Login from "./components/Login"
import Home from "./components/Home"
import {Routes,Route, useParams} from "react-router-dom"

export default function App()  {
    return (
        <div>
            <Home/>
        {/* //     <ul>
        // <li>
        //     <Link to = "/login">Login</Link>
        // </li>

        // <li>
        //     <Link to = "/users">Users</Link>
        // </li>
        //     </ul> */}

             <div>
    <Routes>
        <Route path="/users" element={<Users></Users>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/:id" element={<OneUser></OneUser>}></Route>
    </Routes>
            </div>
        </div>
    )
} 

export function OneUser(){
    let par = useParams();
    return(
        <div>
            <h2>User's id: {par.id}</h2>
        </div>
    )
}