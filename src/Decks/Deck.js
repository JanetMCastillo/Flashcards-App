import React from "react";
import { readDeck } from "../utils/api";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

function Deck(){
    
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
          <h1>Cards</h1>
          </div>
)
}

//cloc

export default Deck;