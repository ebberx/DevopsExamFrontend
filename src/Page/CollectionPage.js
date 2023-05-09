import './CreateCollectionPage.css';
import Navigation from "../Navigation.js";
import {useState} from "react";
import {useParams} from "react-router-dom";

function CollectionPage() {
    const {id} = useParams();

    const GetCollectibles = async () => {

        const userID = Number(localStorage.getItem("UserID"));
        const getData = {
            method: 'GET',
            headers: { 'Content-Type': 'application/json',
                "Access-Control-Allow-Headers": "*",
                "Access-Control-Allow-Origin": "*",
                "Access-Control-Allow-Methods": "*" },
            body: JSON.stringify({ flduserId: userID, fldCollectionId: 2 })
        };

        /*
        fetch('http://10.176.88.54:5001/api/Collections/CreateCollection', getData)
            .then(response=>response.text())
            .then(data => {
                // Debug
                console.log(data);
            });
         */
    }

    return (
       <div>
           <h1>:^D</h1>
           <p>id: {id}</p>
       </div>
    );
}
export default CollectionPage;