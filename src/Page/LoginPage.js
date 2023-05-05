import './LoginPage.css';
import {Navigate} from "react-router-dom";
import React, {useState} from "react";

function LoginPage() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    // Redirect check if logged in
    const loggedIn = localStorage.getItem('auth_token');
    if(loggedIn) {
        return <Navigate to="/overview" replace></Navigate>
    }

    const Login = async () => {
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ fldEmail: email, fldPassword: password })
        };

        fetch('http://10.176.129.17:5001/api/User/Login', requestOptions)
            .then(response => response.text())
            .then(data => {
                console.log(data);

                // Spot errors early
                if(data === "Invalid credentials entered") {
                    alert("Invalid email and password combination. Did you make a spelling mistake?");
                    return;
                }

                try {
                    // Parse data
                    const json = JSON.parse(data);

                    // Store data
                    localStorage.setItem("UserID", json.fldUserId);
                    localStorage.setItem("UserEmail", json.fldEmail);
                    localStorage.setItem("UserName", json.fldUsername);

                    // Success!
                    alert("Successfully logged in!");
                    window.location.href = "/overview";
                }
                catch { throw Error(data) }
            });
    };

    return (
        <div className="LoginPage">

            <form>
                <input type="text" value={email} onChange={(event) => setEmail(event.target.value)} placeholder="Email"></input>
                <input type="password" value={password} onChange={(event) => setPassword(event.target.value)} placeholder="Password"></input>
            </form>

            <a href="/#">
                <button id="btnLogin" onClick={Login}>Login</button>
            </a>
            <hr/>
            Don't have an account?
            <a href="/register">Register here</a>
        </div>
    );
}

export default LoginPage;