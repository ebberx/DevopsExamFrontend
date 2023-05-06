import './RegisterPage.css';
import {Link} from "react-router-dom";
import React, { useState } from 'react';

function RegisterPage() {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');

    const RegisterUser = async () => {
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json',
                "Access-Control-Allow-Headers": "*",
                "Access-Control-Allow-Origin": "*",
                "Access-Control-Allow-Methods": "*" },
            body: JSON.stringify({ fldUsername: username, fldPassword: password, fldEmail: email })
        };
        fetch('http://10.176.88.54:5001/api/User/CreateNewUser', requestOptions)
            .then(response=> response.text())
            .then(data => {
                // Debug
                console.log(data);

                if(data === "NewUser Posted") {
                    alert("Successfully registered!");
                    window.location.href = "/";
                }
                else if(data === "Email ID already in DB") {
                    alert("Email already in use, use another email address, or login to continue.");
                }
                else if(data === "Invalid email") {
                    alert("Please enter a valid email.");
                    setEmail("");
                }
            })
    };

    return (
        <div className="RegisterPage">
            <form>
                <input id = "username" type="text" value={username} onChange={(event) => setUsername(event.target.value)} placeholder="Username"></input>
                <input id = "password" type="password" value={password} onChange={(event) => setPassword(event.target.value)} placeholder="Password"></input>
                <input id = "email" type="text" value={email} onChange={(event) => setEmail(event.target.value)} placeholder="Email"></input>
            </form>

            <button id="btnRegister" onClick={RegisterUser}>Register</button>
            <Link to="/">
                <button id="backToLogin">Go back to Login</button>
            </Link>
        </div>
    );
}
export default RegisterPage;