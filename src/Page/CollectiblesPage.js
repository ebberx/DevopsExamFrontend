import './CollectiblesPage.css';
import Navigation from "../Navigation.js";
import UserCollectible from "../Component/UserCollectible.js";
import {Link, useParams} from "react-router-dom";


function CollectiblesPage() {
    const {id} = useParams();

    return (
        <div className="CollectiblesPage">
            <div className="searchbardiv">
                <Navigation />
                <Link to={"/collection/"+id+"/add"}>
                    <button id="btnAddCollection">Add Collectible</button>
                </Link>
            </div>
            <UserCollectible/>
        </div>
    );
}
export default CollectiblesPage;