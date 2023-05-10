import './UserCollection.css';
import { useState } from 'react';
import { useEffect } from 'react';
import {json, useLocation} from 'react-router-dom';

function UserCollection() {

    const CollectionArrayInit = [
        {
            "fldCollectionId":5,
            "fldUserId":1,
            "fldCollectionName":"123",
            "fldCollectionDescription":"123",
            "fldCollectionThumbnail":"",
            "fldIsPrivate":null
        },
        {
            "fldCollectionId":6,
            "fldUserId":1,
            "fldCollectionName":"FIX",
            "fldCollectionDescription":"THE",
            "fldCollectionThumbnail":"",
            "fldIsPrivate":null
        }];
    const [collectionArray, setCollectionArray] = useState(CollectionArrayInit);
    const location = useLocation();

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

        fetch('http://10.176.88.60:5001/api/Collections/GetRandomSetOfCollections', getCollections)
            .then(response => response.json())
            .then(data => {
                // Debug
                console.log(data);
                //CollectionArray = data;
                setCollectionArray(data);
            });
    }, [location]);

    return(

    <div style={{width: "100%"}}>
        <div id="group">
        {Array.isArray(collectionArray) && collectionArray.map((element, index) => (
            <a href={"overview/collections/" + element.fldCollectionId}  className="collection">

            <div key={index} >
                {element.fldCollectionName}
                    <br/>
                {element.fldCollectionThumbnail !== "" ? (<img src={element.fldCollectionThumbnail} alt="" style={{width: "100%"}}></img>) : ("no image attached")}
            </div>
            </a>

        ))}
        </div>

    </div>
    );
}

export default UserCollection;