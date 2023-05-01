import './UserCollection.css';


function UserCollection() {
    const CollectionArray = ["1", "2", "3", "4","1", "2", "3", "4"];


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