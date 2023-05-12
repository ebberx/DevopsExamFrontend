import './CreateCollectionPage.css';
import Navigation from "../Navigation.js";
import {useState} from "react";
import UserCollectible from "../Component/UserCollectible.js";
import {useParams} from "react-router-dom";
import UserCollection from "../Component/UserCollection.js";

function AddCollectiblePage() {
    const elements = document.getElementsByClassName("grid-item");
    const {id} = useParams();
    const dosearch = (event) => {

        for (let value in elements){

        }
    };

    const AddCollectible = async () => {
        const getData = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json',
                "Access-Control-Allow-Headers": "*",
                "Access-Control-Allow-Origin": "*",
                "Access-Control-Allow-Methods": "*" },
            body: JSON.stringify({ fldCollectionId: id, fldAttributeName: "" })
        };

        fetch('http://10.176.88.60:5001/api/Attribute/CreateAttribute/', getData)
            .then(response=>response.text())
            .then(data => {
                // Debug
                console.log(data);
            });
    }

    return (
       <div>
           <div className="searchbardiv">
               <Navigation />
               <div >
                   <input id="searchbar" onChange={dosearch} type="text" placeholder="Search"></input>
                   <button onClick={AddCollectible} >Add collectible</button>
               </div>
           </div>
           <UserCollectible/>
       </div>
    );
}
export default AddCollectiblePage;