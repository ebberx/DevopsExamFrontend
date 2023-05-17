import './CreateCollectionPage.css';
import Navigation from "../Navigation.js";
import {useState} from "react";
import GetBackendEndpoint from "../config.js";

function CreateCollectionPage() {
    const [collectionname, setcollectionname] = useState("");
    const [description, setdescription] = useState("");
    const [imageid, setimageid] = useState("");

    const CreateCollection = async () => {
        const userID = Number(localStorage.getItem("UserID"));

        // First create the collection and get a collectionID back
        const createCollectionData = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json', "Access-Control-Allow-Headers": "*", "Access-Control-Allow-Origin": "*",  "Access-Control-Allow-Methods": "*" },
            body: JSON.stringify({ flduserId: userID, fldCollectionName: collectionname, fldCollectionDescription: description, fldCollectionThumbnail: imageid, fldIsPrivate: false })
        };
        let collectionid = -1;
        fetch(GetBackendEndpoint() + '/api/Collections/CreateCollection', createCollectionData)
            .then(response=>response.text())
            .then(data => {
                // Check if returned data is a number by checking if it is finite
                if(Number.isFinite(Number(data))) {
                    collectionid = Number(data);
                } else {
                    console.error("Didn't get a proper response back from the backend.");
                    console.error("Please report this to the developer: \n " + data);
                }

                // Then create attributes on the collection: Name & Image
                const attributeNameData = {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json', "Access-Control-Allow-Headers": "*", "Access-Control-Allow-Origin": "*", "Access-Control-Allow-Methods": "*" },
                    body: JSON.stringify({ fldCollectionId: collectionid, fldAttributeName: "Name" })
                };
                fetch(GetBackendEndpoint() + '/api/Attribute/CreateAttribute/', attributeNameData)
                    .then(response=>response.text())
                    .then(data => { console.log(data); });
                const attributeImageData = {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json', "Access-Control-Allow-Headers": "*", "Access-Control-Allow-Origin": "*", "Access-Control-Allow-Methods": "*" },
                    body: JSON.stringify({ fldCollectionId: collectionid, fldAttributeName: "Image" })
                };
                fetch(GetBackendEndpoint() + '/api/Attribute/CreateAttribute/', attributeImageData)
                    .then(response=>response.text())
                    .then(data => {
                        console.log(data)
                        alert("Successfully created a new collection!")
                        window.location.href = "/overview"
                    });
            });
    }

    return (
        <div className="CreateCollectionPage">
            <Navigation />

            <input id = "collectionname" type="text" placeholder="Collection Name"  value={collectionname} onChange={(event) => setcollectionname(event.target.value)}/>
            <input id = "collectiondescription" type="text" placeholder="Description"  value={description} onChange={(event) => setdescription(event.target.value)}/>
            <input id = "collectionimageurl" type="text" placeholder="Image url" value={imageid} onChange={(event) => setimageid(event.target.value)}/>

            <button id = "btncreate" onClick={CreateCollection}>Create</button>
        </div>
    );
}
export default CreateCollectionPage;