import './UserCollection.css';
import { useState } from 'react';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import GetBackendEndpoint from "../config.js";

function UserCollection() {


    const CollectionArrayInit = [
        {
            "fldCollectionId":5,
            "fldUserId":1,
            "fldCollectionName":"123",
            "fldCollectionDescription":"123",
            "fldCollectionThumbnail":"https://i.imgur.com/kaI2iEj.jpeg",
            "fldIsPrivate":null
        },
        {
            "fldCollectionId":6,
            "fldUserId":1,
            "fldCollectionName":"FIX",
            "fldCollectionDescription":"THE",
            "fldCollectionThumbnail":"https://i.imgur.com/kaI2iEj.jpeg",
            "fldIsPrivate":null
        },
        {
            "fldCollectionId":7,
            "fldUserId":1,
            "fldCollectionName":"fw",
            "fldCollectionDescription":"THE",
            "fldCollectionThumbnail":"https://i.imgur.com/UeBufFG.png",
            "fldIsPrivate":null
        },
        {
            "fldCollectionId":8,
            "fldUserId":1,
            "fldCollectionName":"ca",
            "fldCollectionDescription":"THE",
            "fldCollectionThumbnail":"https://i.imgur.com/kaI2iEj.jpeg",
            "fldIsPrivate":null
        },
        {
            "fldCollectionId":9,
            "fldUserId":1,
            "fldCollectionName":"de",
            "fldCollectionDescription":"THE",
            "fldCollectionThumbnail":"https://i.imgur.com/kaI2iEj.jpeg",
            "fldIsPrivate":null
        },
        {
            "fldCollectionId":10,
            "fldUserId":1,
            "fldCollectionName":"as",
            "fldCollectionDescription":"THE",
            "fldCollectionThumbnail":"https://i.imgur.com/kaI2iEj.jpeg",
            "fldIsPrivate":null
        }
        ];
    const [collectionArray, setCollectionArray] = useState(CollectionArrayInit);
    const [filterArray, setfilterArray] = useState(CollectionArrayInit);

    const location = useLocation();


    const dosearch = (event) => {
        console.log("this is the event target value: "+event.target.value);




    };


    useEffect(() => {
        const userID = Number(localStorage.getItem("UserID"));
        const getCollections = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json',
                "Access-Control-Allow-Headers": "*",
                "Access-Control-Allow-Origin": "*",
                "Access-Control-Allow-Methods": "*" },
            body: JSON.stringify({flduserId: userID, numberRandomCollections: 32})
        }

        fetch(GetBackendEndpoint() + '/api/Collections/GetRandomSetOfCollections', getCollections)
            .then(response => response.json())
            .then(data => {
                // Debug
                console.log(data);
                //CollectionArray = data;
                setCollectionArray(data);
            });
    }, [location]);

    return(

    <div>
        <input id="searchbar" onChange={dosearch} type="text" placeholder="Search"></input>
        <div className="UserCollection-grid-container" style={{width: "50%", margin: "auto"}}>
        {Array.isArray(collectionArray) && collectionArray.map((element, index) => (
            <a key={index} href={"collection/" + element.fldCollectionId}  className="collection">
                <div className="UserCollection-grid-item">
                    {element.fldCollectionName}
                        <br/>
                    {element.fldCollectionThumbnail !== "" ? (<img src={element.fldCollectionThumbnail} alt="" style={{maxWidth: "100%", maxHeight: "100%", width: "100px", height: "110px"}}></img>) : ("no image attached")}
                </div>
            </a>
        ))}
        </div>

    </div>
    );
}

export default UserCollection;