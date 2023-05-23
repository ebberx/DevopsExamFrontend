import './CreateCollectiblePage.css';
import Navigation from "../Navigation.js";
//import {useParams} from "react-router-dom";
import {useState} from "react";
import GetBackendEndpoint from "../config.js";
import {useParams} from "react-router-dom";

function CreateCollectiblePage() {
    const [attributename, setattributename] = useState("");
    const [imageid, setimageid] = useState("");
    const {id} = useParams();

    const AddCollectible = async () => {

        const getAttributesInCollectionData = {
            method: 'GET',
            headers: { 'Content-Type': 'application/json', "Access-Control-Allow-Headers": "*", "Access-Control-Allow-Origin": "*",  "Access-Control-Allow-Methods": "*" }
        };
        fetch(GetBackendEndpoint() + '/api/Attribute/GetAllAttributesInCollection/' + id, getAttributesInCollectionData)
            .then(response=>response.json())
            .then(data => {
                const postAttributeData = {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json', "Access-Control-Allow-Headers": "*", "Access-Control-Allow-Origin": "*",  "Access-Control-Allow-Methods": "*" },
                    body: JSON.stringify([
                        {
                            fldAttributeId: data[0].fldAttributeId ,
                            fldValue: attributename
                        }, {
                            fldAttributeId: data[1].fldAttributeId ,
                            fldValue: imageid
                    }])
                };
                fetch(GetBackendEndpoint() + '/api/AttributeValues/PostAttributeValue', postAttributeData)
                    .then(response=>response.text())
                    .then(data => {
                        console.log(data)
                    });
            });
    }

    return (
        <div className="CreateCollectiblePage">
            <div>
                <Navigation/>

                <input id="attributename" type="text" placeholder="Collectible Name" value={attributename}
                       onChange={(event) => setattributename(event.target.value)}/>
                <input id="image" type="text" placeholder="image url" value={imageid}
                       onChange={(event) => setimageid(event.target.value)}/>
                <button id="btncreate" onClick={AddCollectible}>Create</button>
            </div>
        </div>
    );
}


export default CreateCollectiblePage;