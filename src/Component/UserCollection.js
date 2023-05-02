import './UserCollection.css';
import { useState } from 'react';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

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
        console.log("loaded page");
        const getCollections = {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({flduserId: 1, numberRandomCollections: 8})
        }

        fetch('http://10.176.129.17:5001/api/Collections/GetRandomSetOfCollections', getCollections)
            .then(response => response.json())
            .then(data => {
                // Debug
                console.log(data);
                //CollectionArray = data;
                setCollectionArray(data);

            });


    }, [location]);






    return(
    <div style={{width: "100%", height: "400px"}} onContextMenu={event => {event.preventDefault(); console.log("rightu clicker")}}>
        <div id = "group">
        {Array.isArray(collectionArray) && collectionArray.map((map, index) => (
            <div class="collection">
                {index} {map.fldCollectionName}
                {map.fldCollectionDescription}
                {map.fldCollectionThumbnail}
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