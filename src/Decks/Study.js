import React, { useEffect, useState} from "react";
import { Link, useParams, useHistory } from "react-router-dom";
import '../App.css';
import { readDeck } from "../utils/api";
import NotEnoughCards from "../Study/NotEnoughCards";


function Study(){
    const { deckId } = useParams();
    const [deckName, setDeckName]= useState ("");
    const [deckSize, setDeckSize] =useState(0);
    const [deck,setDeck]=useState({});
    const [flippedStatus, setFlippedStatus]=useState(false);
    const [currentCardIdx, setCurrentCardIdx]=useState(0);
    const [currentCard, setCurrentCard]=useState({});
    const [cards, setCards ] = useState([]);
    const [cardSide, setCardSide] = useState("front")
    
    const history = useHistory();

    //loads card deck information
    useEffect(() => {
      async function fetchData() {
        const abortController = new AbortController();
        const response = await readDeck(deckId, abortController.signal);
      setDeck(response);
      setDeckName(response.name)
      setDeckSize(response.cards.length)
      setCards(response.cards);
      setCurrentCard(response.cards[currentCardIdx]);
      console.log(response.cards)
      return () => abortController.abort();
    }
    fetchData();
  }, []);

//handles flip button
    function handleFlip(){
        setFlippedStatus(!flippedStatus)
        if (cardSide === "front") {
          setCardSide("back")
        } else {
          setCardSide("front")
        }
    }

//handles next button
    function handleNext() { 

      if(currentCardIdx >= deckSize -1 ){
        if(window.confirm("Restart cards?")) {
        // We hit ok

          setCurrentCardIdx(0)
        setCurrentCard(cards[0])
        handleFlip()
       // We hit cancel
      } else {
          history.push("/")
        }
      }else{
       setCurrentCardIdx(currentCardIdx + 1)
       setCurrentCard(cards[currentCardIdx])
       handleFlip()
    }
  }
  function notEnoughCards() {
          return (
      <>
        <h3>Not enough cards.</h3>
      <p>
          You need at least 3 cards to study. There are {deckSize} cards in this deck.
        </p>
        <Link to={`/decks/${deck.id}/cards/new`}> 
        <button className='btn btn-primary' >
          <i className='bi bi-plus-lg'></i> + Add Cards
          </button>
        </Link>
      </>
    );
  
}

   function enoughCards(){
    return (    
      <>
      <h1>Study: {deckName}</h1>
              <div className="card p-4">
                  
                  <h2> Card {currentCardIdx + 1} of {deckSize} </h2>
                  <p> {currentCard[cardSide]} </p>
      
                      <button type="button" onClick={handleFlip} class="btn btn-secondary">Flip</button>
                      {flippedStatus && <button type="button" onClick={handleNext} class="btn btn-primary">Next</button>}
                     </div>
                     </>
              )
   }
  


    return(
        <>
  
<nav aria-label="breadcrumb">
  <ol class="breadcrumb">
    <li class="breadcrumb-item">
        <Link to="/">Home</Link>
        </li>
    <li class="breadcrumb-item">
        <Link to = {`/decks/${deckId}`}>{deckName}</Link>
        </li>
    <li class="breadcrumb-item active" aria-current="page">Study</li>
  </ol>
</nav>
        {cards.length <= 2
            ? notEnoughCards()
            : cards.length > 2
            ? enoughCards()
            : notEnoughCards()}
        
        </>
    )

    
}

export default Study;

/*/css file 
option-button
display:inline block */