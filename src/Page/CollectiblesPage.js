import './CreateCollectionPage.css';
import Navigation from "../Navigation.js";
import UserCollectible from "../Component/UserCollectible.js";
import {Link, useParams} from "react-router-dom";


function CollectiblesPage() {
    const elements = document.getElementsByClassName("grid-item");
    const {id} = useParams();

    return (
        <div>
            <div className="searchbardiv">
                <Navigation />
                <div >
                    <Link to={"/collection/"+id+"/add"}>
                        <button id="btnAddCollection">Add Collectible</button>
                    </Link>

                </div>
            </div>
            <UserCollectible/>
        </div>
    );
}
export default CollectiblesPage;