import React, { useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./Header";
import NotFound from "./NotFound";
import { listDecks, createDeck } from "../utils/api";
import { useState } from "react";
import Deck from "../Decks/Deck";
import Home from "../Home/Home";
import '../App.css';
import Study from "../Decks/Study";
import CreateDeck from "../CreateDeck/CreateDeck";
import EditDeck from "../Edit/EditDeck";
import EditCard from "../Edit/EditCard";
import AddCard from "../AddCard/AddCard";

function Layout() {
  let [decks, setDecks] = useState([]);

  useEffect(() => {
    async function fetchDecks() {
        const response = await listDecks();
        setDecks(response);
      
    }

    fetchDecks();
  }, [])

  return (
    <>
      <Header />
      <div className="container">
       
        {/* TODO: Implement the screen starting here */}

          <Switch>
            <Route exact={true} path="/">
              <Home decks={decks} />
            </Route>
            <Route exact={true} path="/decks/new">
              <CreateDeck />
            </Route>
            <Route exact={true} path="/decks/:deckId">
              <Deck decks={decks}/>
            </Route>
            <Route exact={true} path="/decks/:deckId/study">
              <Study decks={decks} />
            </Route>
            <Route  exact path="/decks/:deckId/edit">
              <EditDeck />
            </Route>
            <Route exact path="/decks/:deckId/cards/:cardId/edit">
              <EditCard />
            </Route>
            <Route exact path="/decks/:deckId/cards/new">
              <AddCard decks={decks}/>
            </Route>
            <Route>
              <NotFound />
            </Route>
            </Switch>
        

      </div>
    </>
  );
}

export default Layout;
