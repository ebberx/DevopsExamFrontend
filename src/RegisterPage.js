import './RegisterPage.css';
import LoginPage from "./LoginPage";

function RegisterPage() {
    return (
        <div className="RegisterPage">
            <form>
                <input type="text" placeholder="Username"></input>
                <input type="text" placeholder="Password"></input>
                <input type="text" placeholder="Email"></input>
            </form>


            <button class="btnclass" id="btncreate">Create</button>






        </div>
    );
}
export default RegisterPage;