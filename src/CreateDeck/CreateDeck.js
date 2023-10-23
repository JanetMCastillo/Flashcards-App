//route newdeck form
import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import {createDeck} from "../utils/api/index"
import DeckForm from "../Forms/DeckForm";

function CreateDeck(){
    const initialFormState = {
        name: "",
        description: "",
      };
      const [formData, setFormData] = useState({ ...initialFormState });
      const handleChange = ({ target }) => {
        const value = target.value;
       setFormData({
       ...formData,
       [target.name]: value,
     });
    };
    const history = useHistory();
    
    const handleSubmit = (event) => {
        let output = [];
        event.preventDefault();
        //console.log("Submitted:", formData);
        async function updateData() {
           try {
            const output = await createDeck(formData)
            history.push(`/decks/${output.id}`);
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
            <nav aria-label="breadcrumb">
                <ol className="breadcrumb">
                    <li className="breadcrumb-item" key="0"><Link to="/">Home</Link></li>
                    <li className="breadcrumb-item active" aria-current="page" key="1">Create Deck</li>
                </ol>
            </nav>
            <br />
            <h2>Create Deck</h2>
            <form onSubmit={handleSubmit}>
                <DeckForm formData={formData} handleChange={handleChange} />
                <Link to="/" className="btn btn-secondary">Cancel</Link> 
                <button type="submit"  className="btn btn-primary">Save</button>
            </form>
        </div>
    );
}
export default CreateDeck;

/*import React from "react";
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
    */