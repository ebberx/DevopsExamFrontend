import './AddCollectiblePage.css';
import Navigation from "../Navigation.js";
import UserCollectible from "../Component/UserCollectible.js";
import {useParams} from "react-router-dom";
import {useState} from "react";


function AddCollectiblePage() {
    const [Attributename, setAttributename] = useState("");
    const [imageid, setimageid] = useState("");
    let attributeid = "";


    const {id} = useParams();
    const AddCollectible = async () => {
        let getData = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json',
                "Access-Control-Allow-Headers": "*",
                "Access-Control-Allow-Origin": "*",
                "Access-Control-Allow-Methods": "*" },
            body: JSON.stringify({ fldCollectionId: id, fldAttributeName: Attributename })
        };

        fetch('http://10.176.88.60:5001/api/Attribute/CreateAttribute/', getData)
            .then(response=>response.text())
            .then(data => {
                // Debug
                console.log(data);
                attributeid =
            });

        getData = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json',
                "Access-Control-Allow-Headers": "*",
                "Access-Control-Allow-Origin": "*",
                "Access-Control-Allow-Methods": "*" },
            body: JSON.stringify({ fldCollectionId: id, fldAttributeName: Attributename })
        }
    }

        return (
            <div className="CreateCollectiblePage">
                <div>
                    <Navigation/>

                    <input id="Attributename" type="text" placeholder="Collectible Name" value={Attributename}
                           onChange={(event) => setAttributename(event.target.value)}/>
                    <input id="image" type="text" placeholder="image url" value={imageid}
                           onChange={(event) => setimageid(event.target.value)}/>
                    <button id="btncreate" onClick={AddCollectible}>Create</button>
                </div>
            </div>
        );
    }


export default AddCollectiblePage;