import React from "react";
import { Link } from "react-router-dom";
import CreateDeckButton from "../CreateDeck/CreateDeckButton";

function Home() {
    
    return(
        <>
        <section className="card">
            <CreateDeckButton />
           <h1>rendering in react</h1>
           <p>lorem uihdfh fhjksf jhfsfj fjds</p>
           <Link to="/decks/:deckId">
            <button type="button" class="btn btn-secondary">View</button>
           </Link>
            <Link to="/decks/:deckId/study">
           <button type="button" class="btn btn-primary">Study</button>
           </Link>
        
           <button type="button" class="btn btn-danger">Delete</button>
        </section>
        </>
    )
}

export default Home;