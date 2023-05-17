import './UserCollection.css';
import { useState } from 'react';
import { useEffect } from 'react';
import GetBackendEndpoint from "../config.js";

function UserCollection() {
    const [collectionArray, setCollectionArray] = useState();
    const [filteredCollectionArray, setFilterCollectionArray] = useState();

    const dosearch = (event) => {
        let value = {
            fldCollectionName: event.target.value
        }
        let filteredArray = collectionArray.filter((elem)=> { return elem.fldCollectionName.includes(value.fldCollectionName) }, value)
        if(event.target.value.length !== 0) {
            setFilterCollectionArray(filteredArray)
        }
        else if(event.target.value.length === 0) {
            setFilterCollectionArray(collectionArray)
        }
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

                setCollectionArray(data);
                setFilterCollectionArray(data);
            });
    }, []);

    return(

    <div>
        <div id="SearchDiv">
            <input id="searchbar" onChange={dosearch} type="text" placeholder="Search"></input>
        </div>
        <br/>
        <div className="UserCollection-grid-container" style={{width: "50%", margin: "auto"}}>
        {Array.isArray(filteredCollectionArray) && filteredCollectionArray.map((element, index) => (
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