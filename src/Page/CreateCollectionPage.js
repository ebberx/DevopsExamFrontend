    import './CreateCollectionPage.css';

import Navigation from "../Navigation.js";
    import {useState} from "react";
    import UserCollection from "../Component/UserCollection.js";
    import Contextmenutest from "../Component/Contextmenutest.js";

function CreateCollectionPage() {
    const [collectionname, setcollectionname] = useState("");
    const [description, setdescription] = useState("");
    const [imageid, setimageid] = useState("");

    const CreateCollection = async () => {
        const getData = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ fldCollectionName: collectionname, fldCollectionDescription: description, fldCollectionThumbnail: imageid })
        };

        fetch('10.176.129.17:5001/api/Collections/CreateCollection', getData)
            .then(response=>response.text())
            .then(data => {
                // Debug
                console.log(data);

            });
}
    return (
        <div className="CreateCollectionPage">
            <Navigation />

            <input type="text"  value={collectionname} onChange={(event) => setcollectionname(event.target.value)}/>
            <input type="text"  value={description} onChange={(event) => setdescription(event.target.value)}/>
            <input type="text"/>

            <button id = "btncreate" onClick={CreateCollection}>Create</button>


        </div>
    );
}

export default CreateCollectionPage;
