
import React, {useEffect, useState} from "react";
import DeckForm from "../Forms/DeckForm";
import { readDeck, updateDeck } from "../utils/api";
import { Link, useParams, useHistory } from "react-router-dom";

function EditDeck(){
  const [deck, setDeck] = useState([]);
  const { deckId } = useParams();
  const [formData,setFormData] = useState({
      name:"",
      description:""
  })
  const history = useHistory()

  useEffect(() => {
      async function fetchDeck() {
          const response = await readDeck(deckId)
          setDeck(response)
          console.log(response)
          setFormData({
              name:response.name,
              description:response.description,
              id:response.id
          })
      }
      fetchDeck()
  }, [])

    const handleChange = ({ target }) => {
        const value = target.value;
       setDeck({
       ...deck,
       [target.name]: value,
     });
    };

    const handleSubmit = (event) => {
        let output = [];
        event.preventDefault();
        //console.log("Submitted:", deck);
        async function updateData() {
           try {
            await updateDeck(deck);
            history.push(`/decks/${deckId}`);
          } catch (error) {
            if (error.name === "AbortError") {
              // Ignore `AbortError`
              console.log("Aborted");
          } else {
              throw error;
          }
        }
      }
      updateData();    
      };

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
                <Link to={`/decks/${deckId}`}>{deck.name}</Link>
              </li>
              <li className='breadcrumb-item active' aria-current='page'>
                Edit Deck
              </li>
            </ol>
          </nav>
          <h1>Edit Deck</h1>
          <form onSubmit={handleSubmit}>
                <DeckForm formData={deck} handleChange={handleChange} />
                <Link to={`/decks/${deckId}`} className="btn btn-secondary">Cancel</Link>
                <button type="submit" value="submit" className="btn btn-primary">Save</button>
            </form>
        </div>
    )
    }
    
    export default EditDeck;


   /*/
   -this form should autofill with the selcted deck's info not with a placeholder
-The path to this screen should include the deckId (i.e., /decks/:deckId/edit).
-You must use the readDeck() function from src/utils/api/index.js to load the existing deck.
-There is a breadcrumb navigation bar with a link to home /, followed by the name of the deck being edited, and finally the text Edit Deck (e.g., Home/Rendering in React/Edit Deck).
-It displays the same form as the Create Deck screen, except it is prefilled with information for the existing deck.
-The user can edit and update the form.
-If the user clicks Cancel, the user is taken to the Deck screen. /*/