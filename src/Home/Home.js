import { Link} from "react-router-dom";
import React, {useEffect, useState} from "react";
import CreateDeckButton from "../CreateDeck/CreateDeckButton";
import { deleteDeck, listDecks } from "../utils/api";


function Home(){
        const [decks, setDecks] = useState([]);
        useEffect(() => {
            async function loadData() {
               try {
                const output = await listDecks();
                setDecks(output);
               
              } catch (error) {
                if (error.name === "AbortError") {
                  // Ignore `AbortError`
                  console.log("Aborted");
              } else {
                  throw error;
              }
            }
          }
          loadData();
        }, []);
    
        
        const handleDelete = async ({ target }) => {
          const value=target.value;
    
          const result = window.confirm(`Delete deck ID ${value}? You will not be able to recover it.`);
          if (result) {
            async function deleteData() {
               try {
                await deleteDeck(value);
                const output = await listDecks();
                setDecks(output);
               
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
    
        //console.log("deck", deck);
          
            return (
                
              <div className="card">
            <CreateDeckButton />
                {decks.map((deck) =>(
                  <div className="card">
                  <div className="container">
                    <div className="row card-header">
                      <h4>{deck.name}</h4>
                      </div>
                      <div className="col-2">
                        <p> {deck.cards.length} cards</p>
                      </div>                  </div>
                
                <div className="card-body">
                  <p className="card-text">{deck.description}</p>
                  <div className="container">
                    <div className="row justify-content-between">
                      <div className="col-4">
                        <Link to={`decks/${deck.id}`} className="btn btn-secondary">View</Link> &nbsp;
                        <Link to={`decks/${deck.id}/study`} className="btn btn-primary">Study</Link>
                      </div>
                      <div className="col-1">
                        <button className="btn btn-danger" value={deck.id} onClick={handleDelete}>Delete</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
                ))}
                
            </div>
            );
        }
       
    /*async function deleteHandler(deckId) {
        console.log(deckId)
        if (window.confirm("Delete this Deck?\n\nYou will not be able to recover it.")) {
            return await deleteDeck(deckId);
            
        }
    }
      


  const list= decks.map((deck, index)=> (
        <div className="card" key={index}>
            
           <h1 as="h5">{deck.name} </h1>
           <h5 className="table">{deck.cards.length} cards</h5>
           <p className="card-body">{deck.description}</p>
           <form className="form-inline"> 
                <Link to={`/decks/${deck.id}`}>
                    <button type="button" className="btn btn-secondary">View</button>
                </Link>
                <Link to={`/decks/${deck.id}/study`}>
                    <button type="button" className="btn btn-primary">Study</button>
                </Link>
                <button className='btn btn-danger delete-deck' onClick={() => deleteHandler(deck.id)}>
                    <i className='bi bi-trash'>Delete</i>
                </button>          
           </form>
        </div>
        ))
        

        return (
            <div>
                <CreateDeckButton />
                {list}
            </div>
        )
}
*/
export default Home;