import React, {useEffect, useState } from "react";

function DeckForm({ handleSubmit, handleCancel, deck}){
    const [deckInfo, setDeckInfo] =useState(deck);
    useEffect(() => {
        setDeckInfo(deck);
      }, [deck]);

const updateForm = (event) => {
    const { name, value } = event.target;
    setDeckInfo({ ...deckInfo, [name]: value });
  };
  const submit = (event) => {
    event.preventDefault();
    handleSubmit(deckInfo);
  };
   
    return(
        
        <form onSubmit={submit}>
           <div className='form-group'>
            <label htmlFor='name'>Name</label>
            <input
            className='form-control'
                name='name'
                id='name'
                type='text'
               // value={deckInfo.name}
                onChange={updateForm}
                placeholder='Deck Name'
                required>
            </input>
            </div>

            <div className='form-group'>
                <label htmlFor='description'>Description</label>
                <textarea
                className='form-control'
                    name='description'
                    id='description'
                    type='text'
                    placeholder="Brief description of the deck"
                    //value={deckInfo.description}
                    onChange={updateForm}
                    required>

                </textarea>
            </div>


            <button class="btn btn-secondary" onClick={handleCancel}>Cancel</button>
            <button type="submit" class="btn btn-primary" onClick={submit}>Submit</button>

        </form>
    )}
export default DeckForm;