import './UserCollectible.css';
import { useState } from 'react';
import { useEffect } from 'react';
import { useLocation, useParams } from 'react-router-dom';


function UserCollectible() {
    const CollectionArrayInit = [
        {
            "fldAttributeId":5,
            "fldValue":1
        },
        {
            "fldAttributeId":5,
            "fldValue":1
        },
        {
            "fldAttributeId":5,
            "fldValue":1
        },
        {
            "fldAttributeId":5,
            "fldValue":1
        },
        {
            "fldAttributeId":5,
            "fldValue":1
        },
        {
            "fldAttributeId":5,
            "fldValue":1
        },
        {
            "fldAttributeId":5,
            "fldValue":1
        },

        {
            "fldAttributeId":6,
            "fldValue":6
        }];
    const [collectionArray, setCollectionArray] = useState(CollectionArrayInit);
    const {id} = useParams();
    let attributeid = {id}.id

    const location = useLocation();
    useEffect(() => {
        const getData = {
            method: 'GET',
            headers: { 'Content-Type': 'application/json',
                "Access-Control-Allow-Headers": "*",
                "Access-Control-Allow-Origin": "*",
                "Access-Control-Allow-Methods": "*" },
        };

        fetch('http://10.176.88.60:5001/api/AttributeValues/GetAllAttributeValuesForCollection/' + attributeid, getData)
            .then(response=>response.json())
            .then(data => {
                // Debug
                setCollectionArray(data);
                console.log(collectionArray.length)
            });
    }, [attributeid, collectionArray.length, id, location]);

    return(

    <div>
        <br/>
        <div className="grid-container" style={{width: "50%", margin: "auto"}}>
        {Array.isArray(collectionArray) && collectionArray.map((element, index) => (
            <div key={index} className="grid-item">
                {element.fldAttributeId}
                    <br/>
                {element.fldValue}
            </div>
        ))}
        </div>
    </div>
    );
}

export default UserCollectible;