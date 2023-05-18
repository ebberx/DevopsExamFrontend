import './UserCollectible.css';
import { useState } from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import GetBackendEndpoint from "../config.js";

function UserCollectible() {
    const [collectionArray, setCollectionArray] = useState();
    const {id} = useParams();
    const [filteredCollectionArray, setFilterCollectionArray] = useState();

    const dosearch = (event) => {
        let value = {
            fldAttributeId: event.target.value
        }
        /*
        let filteredArray = collectionArray.filter((elem)=> { return elem.fldAttributeId.includes(value.fldAttributeId) }, value)
        if(event.target.value.length !== 0) {
            setFilterCollectionArray(filteredArray)
        }
        else if(event.target.value.length === 0) {
            setFilterCollectionArray(collectionArray)
        }
        */
    };

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
                setCollectionArray(data)
                setFilterCollectionArray(data)
            });
    }, [id]);

    return(
        <div>
            <div id="SearchDiv">
                <input id="searchbar" onChange={dosearch} type="text" placeholder="Search"></input>
            </div>
            <br/>
            <div className="UserCollectible-grid-container" style={{width: "50%", margin: "auto"}}>
            {Array.isArray(filteredCollectionArray) && filteredCollectionArray.map((element, index) => (
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