/*/this from will be used for ADD CARD and EDIT CARD




*/
import React, { useEffect, useState } from "react";
function CardForm ({ formData, handleChange}){
  
return (
    <div>
        <label>
            Front:
        </label> <br />
            <textarea
            id="front"
            type="text"
            name="front"
            rows="3"
            onChange={handleChange}
            value={formData.front}
            style={{ width: "100%" }}
            />
        <br />
        <br />
        <label>
            Back:
        </label> <br />
            <textarea
            id="back"
            type="textarea"
            name="back"
            rows="3"
            onChange={handleChange}
            value={formData.back}
            style={{ width: "100%" }}
            />
        </div>
    )
};
export default CardForm;

  /*const history = useHistory();
  const { deckId } = useParams();
  const [deck, setDeck] = useState([]);
  const [formData, setFormData] = useState({
    front: "",
    back: "",
  });
  useEffect(() => {
    async function fetchDeck() {
      const abortController = new AbortController();
      const response = await readDeck(deckId, abortController.signal);
      setDeck(response);
      return () => abortController.abort();
    }
    fetchDeck();
  },[]);

  const handleChange = ({ target }) => {
    setFormData({
      ...formData,
      [target.name]: target.value,
    });
  };

  const handleSave = async (event) => {
    event.preventDefault();
    await createCard(deckId,formData);
    setFormData({
      front: "",
      back: "",
    });
    
  };
  
  return (
    <form onSubmit={handleSave}>
      <div className='form-group'>
        <label htmlFor='front'>Front</label>
        <textarea
          className='form-control'
          type='text'
          id='front'
          name='front'
          placeholder='Front side of card'
          value={formData.front}
          onChange={handleChange}
          
        ></textarea>
      </div>
      <div className='form-group'>
        <label htmlFor='back'>Back</label>
        <textarea
          className='form-control'
          name='back'
          id='back'
          placeholder='Back side of card'
          value={formData.back}
          onChange={handleChange}
        
        ></textarea>
        <button type="button" className='btn btn-secondary my-2'onClick={() => history.push(`/decks/${deckId}`)}>
          Done
        </button>
      
        <button type='submit' onClick= {handleSave} className='btn btn-primary my-2'>
          Save
        </button>
      </div>
    </form>
  );
}

export default CardForm;
*/