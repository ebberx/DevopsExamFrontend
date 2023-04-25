import './LoginPage.css';
import AppRoutes from './Routes.js';
import {Link} from "react-router-dom";

function LoginPage() {
  return (
    <div className="LoginPage">

        <form>
            <input type="text" placeholder="Username"></input>
            <input type="password" placeholder="Password"></input>
        </form>
        <Link to="/register">
            <button id="btncreate">Create</button>
        </Link>

        <button id="btnlogin">Login</button>
    </div>
  );
}

export default LoginPage;
