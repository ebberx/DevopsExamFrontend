import './LoginPage.css';
import AppRoutes from './Routes.js';

function LoginPage() {
  return (
    <div className="LoginPage">

        <form>
            <input type="text" placeholder="Username"></input>
            <input type="text" placeholder="Password"></input>
        </form>
        <button class="btnclass" id="btncreate">Create</button>
        <button className="btnclass" id="btnlogin">Login</button>
    </div>
  );
}

export default LoginPage;
