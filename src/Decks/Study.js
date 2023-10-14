import React, { useEffect, useState} from "react";
import { Link, useParams } from "react-router-dom";
import '../App.css';
import { readDeck } from "../utils/api";
import NotEnoughCards from "../Study/NotEnoughCards";


function Study(){
    const {deckId} = useParams();
    const [deckName, setDeckName]= useState ("");
    const [deckSize, setDeckSize] =useState(0);
    const [deck,setDeck]=useState({});
    const [flippedStatus, setFlippedStatus]=useState(false);
    const [counter, setCounter]=useState(0);
    const [cardId, setCardId]=useState([]);
    const [loaded, setLoaded] = useState(false);


    /*loads card deck information
useEffect(() => {
    async function fetchData() {
      const abortController = new AbortController();
      const response = await readDeck(deckId, abortController.signal);
      setDeck(response);
      setCards(response.cards);
      return () => abortController.abort();
    }
    fetchData();
  }, []);

//*/
    function handleclick(){
        setFlippedStatus(!flippedStatus)
    }
//handles next button
    function handleNext(){
        const card= deck.card
        if(card.id> -1){

        }
    }

    

    return(
        <>
    

<nav aria-label="breadcrumb">
  <ol class="breadcrumb">
    <li class="breadcrumb-item">
        <Link to="/">Home</Link>
        </li>
    <li class="breadcrumb-item">
        <Link to = {`/decks/${deckId}`}>{deck.name}</Link>
        </li>
    <li class="breadcrumb-item active" aria-current="page">Study</li>
  </ol>
</nav>
        <h1>Study:{deck.name}</h1>
        <div className="card p-4">
            
            <h2> Card of {deckSize} </h2>
            <p> Information for card</p>
            <Link>
                <button type="button" class="btn btn-secondary">Flip</button>
                </Link>
        </div>
        </>
    )

    
}

export default Study;

/*/css file 
option-button
display:inline block */