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
            attributevalue: event.target.value
        }
        let filteredArray = collectionArray.filter((elem) => {
            for (let i = 0; i < elem.length; i++) {
                if(elem[i].attributevalue.includes(value.attributevalue)){
                    return true;
                }
            }
            return false;

            }, value)
        if(event.target.value.length !== 0) {
            setFilterCollectionArray(filteredArray)
        }
        else if(event.target.value.length === 0) {
            setFilterCollectionArray(collectionArray)
        }

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
        fetch(GetBackendEndpoint() + '/api/AttributeValues/GetDisctinctCollectionEntryIDsOnCollectionID/' + id, getData)
            .then(response=>response.json())
            .then(async data => {

                // Debug
                /*
                setCollectionArray(data)
                setFilterCollectionArray(data)
                 */

                let EntryArray = []

                for (let value in data) {
                    await fetch(GetBackendEndpoint() + '/api/AttributeValues/GetCollectionEntry/' + data[value], getData)
                        .then(response => response.json())
                        .then(Entry => {
                            let empty = []
                            for (let i = 0; i < Entry.length; i++) {
                                let emptiness = {}
                                emptiness.attributename = Entry[i].fldAttributeName
                                emptiness.attributevalue = Entry[i].fldValue
                                empty.push(emptiness)
                            }
                            EntryArray.push(empty)
                        })
                }
                setFilterCollectionArray(EntryArray)
                setCollectionArray(EntryArray)

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
                    {element.map((e, idx) => (
                    <div key={idx}>


                        {e.attributename === "Image" ?
                            e.attributevalue !== "" ?
                                ( <img src={e.attributevalue} className="AttributeImg" alt=""></img> )
                                : ("Error: No image")
                            : (<h4 className="AttributeHeader">{e.attributevalue}</h4>)
                        }
                    </div>
                ))}
                </div>
            ))}
            </div>
        </div>
    );
}
export default UserCollectible;