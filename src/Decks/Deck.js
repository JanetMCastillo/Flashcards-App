import React from "react";
import { useEffect, useState } from "react";
import { readDeck,deleteDeck, deleteCard } from "../utils/api";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import { useParams, useHistory } from "react-router-dom";
//import classNames from "../utils/class-names";
import CardList from "./CardList";

function Deck({decks, setDecks}){

  const [cards, setCards] = useState([]);
  const [deck, setDeck] = useState([]);
  const history = useHistory();

  const { deckId } = useParams();
  useEffect(() => {
    async function fetchDeck() {
      const response = await readDeck(deckId)
      setDeck(response)
      setCards(response.cards)
    }
    fetchDeck()
  }, [])

  const handleDeckDelete = async () => {  
      const result = window.confirm(`Delete this deck? You will not be able to recover it.`);
      if (result) {
        async function deleteData() {
          try {
              await deleteDeck(deckId);
              history.push("/");
           
          } catch (error) {
            if (error.name === "AbortError") {
              // Ignore `AbortError`
              console.log("Aborted");
          } else {
              throw error;
          }
        }
      }
      deleteData();
      }
    };

  const handleCardDelete = async (card) => {
    const message = window.confirm("Delete this card?\n\nYou will not be able to recover this.")
    if (message) {
      await deleteCard(card.id)
      setCards(cards.filter(element => element.id !== card.id))
      history.push(`/decks/${deckId}`)
    }
  }

    return (
        
        <div>
          <nav aria-label='breadcrumb'>
            <ol className='breadcrumb'>
              <li className='breadcrumb-item'>
                <Link to='/'>
                  <i className='bi bi-house-door-fill'></i> Home
                </Link>
              </li>
              <li className='breadcrumb-item active' aria-current='page'>
                {deck.name}
              </li>
            </ol>
          </nav>
        
          <h2>{deck.name}</h2>
          <p>{deck.description}</p>
          <Link to={`/decks/${deckId}/edit`}>
          <button type="button" class="btn btn-secondary">Edit</button>&nbsp;
          </Link>
          <Link to={`/decks/${deckId}/study`}>
           <button type="button" class="btn btn-primary">Study</button>
           </Link>
           <Link to={`/decks/${deckId}/cards/new`}>
              <button type="button" class="btn btn-primary">+ Add Cards</button>
           </Link>
           <button
          type="icon" className='btn btn-danger' onClick={() => handleDeckDelete(deck)}
        ><i className='bi bi-trash'>Delete</i>
        </button>

        <h1>Cards</h1>
        <CardList cards={cards} handleCardDelete={handleCardDelete}/>
        
       
          </div>
)
}

//cloc

export default Deck;

/*/Shows all of the information about a specified deck with options to edit or 
add cards to the deck, navigate to the study screen, or delete the deck 

<Link to={`/decks/${deckId}/cards/(deck.card.id)/edit`}>
<button type="button" class="btn btn-primary">+ Edit Cards</button>
<button type="button" class="btn btn-primary">Delete(trashcan)</button>

</Link>
*/