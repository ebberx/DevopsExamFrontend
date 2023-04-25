import './RegisterPage.css';
import {Navigate} from "react-router-dom";
import Navigation from "../Navigation.js";

function RegisterPage() {
    return (
        <div className="RegisterPage">


            <form>
                <input type="text" placeholder="Nickname"></input>
                <input type="text" placeholder="Username"></input>
                <input type="text" placeholder="Password"></input>
                <input type="text" placeholder="Email"></input>
            </form>
            <button id="btnregister">Register</button>

        </div>
    );
}
export default RegisterPage;