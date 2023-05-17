import './CollectionsPage.css';
import UserCollection from "../Component/UserCollection.js";
import Navigation from "../Navigation.js";
import {Link} from "react-router-dom";
import Contextmenutest from "../Component/Contextmenutest.js";

function CollectionsPage() {

    const elements = document.getElementsByClassName("UserCollection-grid-item");

    const dosearch = (event) => {
        console.log("this is the event target value: "+event.target.value);
        for (let value in elements){
            console.log("this is the value: "+value)
            console.log(elements.item(1).attributes)

        }
    };
    return (
        <div className="OverviewPage">
            <Contextmenutest/>

            <div id="overviewBody">
                <Navigation />

                <Link to="/collection/create">
                    <button id="btnAddCollection">Add Collection</button>
                </Link>
            </div>

            <UserCollection/>

        </div>
    );
}
export default CollectionsPage;