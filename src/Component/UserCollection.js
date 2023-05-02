import './UserCollection.css';
import { useState } from 'react';

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

    window.onload = async () => {
        const getCollections = {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({flduserId: 1, numberRandomCollections: 8})
        };


        fetch('http://10.176.129.17:5001/api/Collections/GetRandomSetOfCollections', getCollections)
            .then(response => response.json())
            .then(data => {
                // Debug
                console.log(data);
                //CollectionArray = data;
                setCollectionArray(data);

            });
        console.log("aa");
    };


    return(
    <div style={{width: "100%", height: "400px"}} onContextMenu={event => {event.preventDefault(); console.log("rightu clicker")}}>
        <div id = "group">
        {Array.isArray(collectionArray) && collectionArray.map((map, index) => (
            <div class="collection">
                {index} {map.fldCollectionName}
            </div>
        ))}
        </div>
        <div>
            <div>
                <div>

                </div>

            </div>

        </div>

    </div>


    );


}

export default UserCollection;