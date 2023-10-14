//route newdeck form
import React from "react";
import DeckForm from "../Forms/DeckForm";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

function EditDeck(){
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
                Edit Deck
              </li>
            </ol>
          </nav>
          <h1>Edit Deck</h1>
          <DeckForm  />
        </div>
    )
    };
    
    export default EditDeck;

   /*/
-The path to this screen should include the deckId (i.e., /decks/:deckId/edit).
-You must use the readDeck() function from src/utils/api/index.js to load the existing deck.
-There is a breadcrumb navigation bar with a link to home /, followed by the name of the deck being edited, and finally the text Edit Deck (e.g., Home/Rendering in React/Edit Deck).
-It displays the same form as the Create Deck screen, except it is prefilled with information for the existing deck.
-The user can edit and update the form.
-If the user clicks Cancel, the user is taken to the Deck screen. /*/