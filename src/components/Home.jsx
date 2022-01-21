import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
    return (
        <div>
            <h2>Home</h2>
            <nav>
                <ul>
                    <li>
                        <Link to='/login'>Login</Link>
                    </li>
                    <li>
                        <Link to='/users'>Users</Link>
                    </li>
                </ul>
            </nav>
        </div>
    )
}