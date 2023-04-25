import './RegisterPage.css';
import {Link, Navigate} from "react-router-dom";
import Navigation from "../Navigation.js";

function RegisterPage() {

    const RegisterUser = () => {

    };

    return (
        <div className="RegisterPage">
            <form>
                <input type="text" placeholder="Nickname"></input>
                <input type="text" placeholder="Username"></input>
                <input type="text" placeholder="Password"></input>
                <input type="text" placeholder="Email"></input>
            </form>

            <button id="btnRegister" onClick={RegisterUser}>Register</button>
            <Link to="/">
                <button id="backToLogin">Go back to Login</button>
            </Link>
        </div>
    );
}
export default RegisterPage;