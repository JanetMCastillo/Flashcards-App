import React from "react";
import { useHistory } from "react-router-dom"


function CreateDeckButton(){
    const history= useHistory();

    const routeChange =()=>{
        let path='/decks/new'
        history.push(path);
    }

    return(
        <button type="button" className="btn btn-secondary" onClick={routeChange}>+Create Deck</button>
        
    )
}

export default CreateDeckButton;
