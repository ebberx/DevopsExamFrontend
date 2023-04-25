import './RegisterPage.css';
import {Navigate} from "react-router-dom";
import Navigation from "./Navigation.js";

function RegisterPage() {
    return (
        <div className="RegisterPage">
            <Navigation />
            <form>
                <input type="text" placeholder="Username"></input>
                <input type="text" placeholder="Password"></input>
                <input type="text" placeholder="Email"></input>
            </form>


            <button class="btnclass" id="btnregister">Register</button>






        </div>
    );
}
export default RegisterPage;