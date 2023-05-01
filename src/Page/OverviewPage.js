import './OverviewPage.css';
import UserCollection from "../Component/UserCollection.js";
import Navigation from "../Navigation.js";
import {Link} from "react-router-dom";
import Contextmenutest from "../Component/Contextmenutest.js";

function OverviewPage() {
    const selectElement = document.querySelector("#searchbar");
    const dosearch = (event) => {
        console.log(event.target.value);

    };
    return (
        <div className="OverviewPage">
            <Contextmenutest/>


            <div id="overviewBody">
                <Navigation />
                <input id="searchbar" onChange={dosearch} type="text" placeholder="Search"></input>

                <Link to="/overview/create">
                    <button id="btnAddCollection">Add Collection</button>
                </Link>
            </div>

            <UserCollection/>


        </div>


    );
}
export default OverviewPage;
