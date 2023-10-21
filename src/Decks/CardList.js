/*/cards components shows a list of cards in one deck, 
will be used in deck.js screen
*///deleteCard Handler here
import React from "react";
import { readDeck } from "../utils/api";
import { Link, useParams} from "react-router-dom/cjs/react-router-dom.min";
import { useState, useEffect} from "react";

function CardList({handleCardDelete}){
    const [cards, setCards] = useState([]);  
    const [deck, setDeck] = useState([]);
    const { deckId } = useParams();


    useEffect(() => {
        async function fetchDeck() {
          const response = await readDeck(deckId)
          setDeck(response)
          setCards(response.cards)
        }
        fetchDeck()
      }, [])

    //loop through cards to show front and back on one side
    const list= cards.map((card, index)=> (
        <div className="card mb-3" key={index}>
         <div className="row"> 
           <div className="col-sm">
            <p>{card.back}</p>
            </div>
            <div className="col-sm">
            <p>{card.front}</p>
           <Link to={`/decks/${deckId}/cards/${card.id}/edit`} className="btn btn-secondary">Edit</Link>
           <button onClick={handleCardDelete} value={card.id} className="btn btn-danger">Delete</button>
            </div>
        </div>
    </div>
))
    return(
    <>
            {list}
        </>
    )
}

export default CardList;
