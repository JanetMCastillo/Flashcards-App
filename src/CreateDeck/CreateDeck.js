//route newdeck form
import React from "react";
import DeckForm from "../Forms/DeckForm";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

function CreateDeck(){
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
                Create Deck
              </li>
            </ol>
          </nav>
          <h1>Create Deck</h1>
          <DeckForm  />
        </div>
    )
    };
    
    export default CreateDeck;