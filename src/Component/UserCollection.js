import './UserCollection.css';


function UserCollection() {
    const test = ["1", "2", "3", "4","1", "2", "3", "4"];


    return(
    <div style={{width: "100%", height: "400px"}}>
        <div id = "group">
        {test.map((map) => (
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