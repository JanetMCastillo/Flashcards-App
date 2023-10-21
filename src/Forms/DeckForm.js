
import React, {useState} from "react";

function DeckForm ({ formData, handleChange}) {
    
return (
    <div>
        <label>
            Name:
        </label> <br />
            <input
            id="name"
            type="text"
            name="name"
            onChange={handleChange}
            value={formData.name}
            style={{ width: "100%" }}
            />
        <br />
        <br />
        <label>
            Description:
        </label> <br />
            <textarea
            id="description"
            type="textarea"
            name="description"
            rows="3"
            onChange={handleChange}
            value={formData.description}
            style={{ width: "100%" }}
            />
        <br />
    </div>
    )
};
export default DeckForm;

/*import { Link, useHistory } from "react-router-dom";
import React, { useState } from "react";
import { createDeck } from "../utils/api";

function DeckForm() {
  const history = useHistory();


  const initialFormData = {
    name: "",
    description: "",
  };

  const [formData, setFormData] = useState(initialFormData);

  const handleChange = ({ target }) => {
    setFormData({
      ...formData,
      [target.name]: target.value,
    });

    
  };

  const handleSubmit = (event) => {
    
    event.preventDefault()

    createDeck(formData).then(value => history.push(`/decks/${value.id}`))

    
  };

  return (
      <form onSubmit={handleSubmit}>
        <div className="form-group">
        <label htmlFor='name'>Name</label>
        <input
        className="form-control"
          id="name"
          type="text"
          name="name"
          placeholder='Deck Name'

          onChange={handleChange}
          value={formData.name}
        ></input>
        </div>
        <div className='form-group'>
        <label>Description</label>
        <textarea
        className="form-control"
          id="description"
          type="text"
          name="description"
          placeholder='Brief description of the deck'
          onChange={handleChange}
          value={formData.description}
        ></textarea>

        <button type="button" className='btn btn-secondary my-2'onClick={() => history.push("/")}>
          Cancel
        </button>

        <button type="submit" className='btn btn-primary my-2' >Submit</button>
        </div>

      </form>    
  );
}

export default DeckForm;
*/