import './UserCollection.css';


function UserCollection() {
    let CollectionArray = ["1", "2", "3", "4","1", "2", "3", "4"];

    window.onload = async () => {
        const getCollections = {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({flduserId: 1, numberRandomCollections: 8})
        };


        fetch('http://10.176.129.17:5001/api/Collections/GetRandomSetOfCollections', getCollections)
            .then(response => response.text())
            .then(data => {
                // Debug
                console.log(data);
                CollectionArray = data;
            });
        console.log("aa");
    };


    return(
    <div style={{width: "100%", height: "400px"}} onContextMenu={event => {event.preventDefault(); console.log("rightu clicker")}}>
        <div id = "group">
        {CollectionArray.map((map) => (
            <div class = "collection">
                {map}
            </div>
        ))}
        </div>
        <div>
            <div>
                <div>

                </div>

            </div>

        </div>

    </div>


    );


}

export default UserCollection;