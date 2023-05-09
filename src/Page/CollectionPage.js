import './CreateCollectionPage.css';
import Navigation from "../Navigation.js";
import {useState} from "react";

function CollectionPage() {

    const GetCollectibles = async () => {
        const userID = Number(localStorage.getItem("UserID"));

        const getData = {
            method: 'GET',
            headers: { 'Content-Type': 'application/json',
                "Access-Control-Allow-Headers": "*",
                "Access-Control-Allow-Origin": "*",
                "Access-Control-Allow-Methods": "*" },
            body: JSON.stringify({ flduserId: userID, fldCollectionId:  })
        };

        fetch('http://10.176.88.54:5001/api/Collections/CreateCollection', getData)
            .then(response=>response.text())
            .then(data => {
                // Debug
                console.log(data);
            });
    }

    return (
       <h1>:(</h1>
    );
}
export default CollectionPage;