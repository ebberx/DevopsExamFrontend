import './UserCollectible.css';
import { useState } from 'react';
import { useEffect } from 'react';
import {json, Link, useLocation, useParams} from 'react-router-dom';
import Contextmenutest from "./Contextmenutest.js";
import Navigation from "../Navigation.js";
import UserCollection from "./UserCollection.js";


function UserCollectible() {
    const elements = document.getElementsByClassName("grid-item");
    const dosearch = (event) => {
        console.log(event.target.value);
        for (let value in elements){
            console.log(value)
        }
    };
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
            "fldAttributeId":5,
            "fldValue":1
        },{
            "fldAttributeId":5,
            "fldValue":1
        },{
            "fldAttributeId":5,
            "fldValue":1
        },{
            "fldAttributeId":5,
            "fldValue":1
        },{
            "fldAttributeId":5,
            "fldValue":1
        },{
            "fldAttributeId":5,
            "fldValue":1
        },{
            "fldAttributeId":5,
            "fldValue":1
        },{
            "fldAttributeId":5,
            "fldValue":1
        },{
            "fldAttributeId":5,
            "fldValue":1
        },{
            "fldAttributeId":5,
            "fldValue":1
        },{
            "fldAttributeId":5,
            "fldValue":1
        },{
            "fldAttributeId":5,
            "fldValue":1
        },{
            "fldAttributeId":5,
            "fldValue":1
        },{
            "fldAttributeId":5,
            "fldValue":1
        },{
            "fldAttributeId":5,
            "fldValue":1
        },{
            "fldAttributeId":5,
            "fldValue":1
        },{
            "fldAttributeId":5,
            "fldValue":1
        },{
            "fldAttributeId":5,
            "fldValue":1
        },{
            "fldAttributeId":5,
            "fldValue":1
        },{
            "fldAttributeId":5,
            "fldValue":1
        },{
            "fldAttributeId":5,
            "fldValue":1
        },





        {
            "fldAttributeId":6,
            "fldValue":6
        }];
    const [collectionArray, setCollectionArray] = useState(CollectionArrayInit);
    const {id} = useParams();
    const GetCollectibles = async () => {
        const getData = {
            method: 'GET',
            headers: { 'Content-Type': 'application/json',
                "Access-Control-Allow-Headers": "*",
                "Access-Control-Allow-Origin": "*",
                "Access-Control-Allow-Methods": "*" },
            body: JSON.stringify({fldCollectionId: {id} })
        };

        fetch('http://10.176.88.60:5001/api/AttributeValues/GetAllAttributeValuesForCollection', getData)
            .then(response=>response.text())
            .then(data => {
                // Debug
                console.log(data);
            });
    }

    return(

    <div>
        <div className="searchbardiv">
            <Navigation />
            <div >
                <input id="searchbar" onChange={dosearch} type="text" placeholder="Search"></input>
            </div>
        </div>
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