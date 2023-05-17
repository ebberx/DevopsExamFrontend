import './UserCollectible.css';
import { useState } from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import GetBackendEndpoint from "../config.js";

function UserCollectible() {
    const CollectionArrayInit = [{
            "fldAttributeId":5,
            "fldValue":1 }, {
            "fldAttributeId":5,
            "fldValue":1 }, {
            "fldAttributeId":5,
            "fldValue":1 }, {
            "fldAttributeId":5,
            "fldValue":1 }, {
            "fldAttributeId":5,
            "fldValue":1 }, {
            "fldAttributeId":5,
            "fldValue":1 }, {
            "fldAttributeId":5,
            "fldValue":1 }, {
            "fldAttributeId":6,
            "fldValue":6 }
    ];
    const [collectionArray, setCollectionArray] = useState(CollectionArrayInit);
    const {id} = useParams();

    ///////////////////////////////////
    // THIS GETS RUN TWICE ON PAGE LOAD
    ///////////////////////////////////
    useEffect(() => {
        const getData = {
            method: 'GET',
            headers: { 'Content-Type': 'application/json',
                "Access-Control-Allow-Headers": "*",
                "Access-Control-Allow-Origin": "*",
                "Access-Control-Allow-Methods": "*" },
        };

        fetch(GetBackendEndpoint() + '/api/AttributeValues/GetAllAttributeValuesForCollection/' + id, getData)
            .then(response=>response.json())
            .then(data => {
                // Debug
                setCollectionArray(data);
            });
    }, [collectionArray.length, id]);

    return(
        <div>
            <br/>
            <div className="UserCollectible-grid-container" style={{width: "50%", margin: "auto"}}>
            {Array.isArray(collectionArray) && collectionArray.map((element, index) => (
                <div key={index} className="UserCollectible-grid-item">
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