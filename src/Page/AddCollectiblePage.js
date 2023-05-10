import './CreateCollectionPage.css';
import Navigation from "../Navigation.js";
import {useState} from "react";
import UserCollectible from "../Component/UserCollectible.js";
import {useParams} from "react-router-dom";
import UserCollection from "../Component/UserCollection.js";

function AddCollectiblePage() {
    const {id} = useParams();

    return (
       <div>

           <UserCollectible/>
       </div>


    );
}
export default AddCollectiblePage;