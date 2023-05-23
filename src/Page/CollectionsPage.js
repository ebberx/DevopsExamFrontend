import './CollectionsPage.css';
import UserCollection from "../Component/UserCollection.js";
import Navigation from "../Navigation.js";
import {Link} from "react-router-dom";


function CollectionsPage() {
    // Code goes here

    return (
        <div className="CollectionsPage">
            <div id="CollectionsBody">
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