import './CreateCollectiblePage.css';
import Navigation from "../Navigation.js";
import {useParams} from "react-router-dom";
import {useState} from "react";

function CreateCollectiblePage() {
    const [Attributename, setAttributename] = useState("");
    const [imageid, setimageid] = useState("");
    const {id} = useParams();

    const AddCollectible = async () => {


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


export default CreateCollectiblePage;