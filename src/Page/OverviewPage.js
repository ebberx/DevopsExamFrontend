import './OverviewPage.css';

import Navigation from "../Navigation.js";
import {Link} from "react-router-dom";

function OverviewPage() {
    const selectElement = document.querySelector("#searchbar");
    const dosearch = (event) => {
        console.log(event.target.value);
    };
    return (
        <div className="OverviewPage">
            <Navigation />

            <div id="overviewBody">
                <input id="searchbar" onChange={dosearch} type="text" placeholder="Search"></input>

                <Link to="/overview/create">
                    <button id="btnAddCollection">Add Collection</button>
                </Link>
            </div>

        </div>
    );
}
export default OverviewPage;
