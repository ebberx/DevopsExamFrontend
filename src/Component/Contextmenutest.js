

function Contextmenutest(){
    return(


        <div onContextMenu={event => {event.preventDefault(); console.log("rightu clicker")}}>
        </div>

    );


}
export default Contextmenutest;