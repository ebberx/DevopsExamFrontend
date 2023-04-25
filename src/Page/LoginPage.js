import './LoginPage.css';
import AppRoutes from '../Routes.js';
import {Link, Navigate} from "react-router-dom";
import React from "react";

function LoginPage() {

    const loggedIn = localStorage.getItem('auth_token');

    if(loggedIn) {
        return <Navigate to="/overview" replace></Navigate>
    }

    return (
        <div className="LoginPage">

            <form>
                <input type="text" placeholder="Email"></input>
                <input type="password" placeholder="Password"></input>
            </form>

            <a>
                <button id="btnLogin">Login</button>
            </a>
            <hr/>
            Don't have an account?
            <a href="/register">Register here</a>
        </div>
    );
}

export default LoginPage;
