// import { useState } from "react";
// import arrFlashCards from "../../data/dados";
// import Flashcard from "./../Flashcard";
// import Icone from "./../Icone";
import LogoPequeno from "./../../assets/img/logo-pequeno.png";
import "./style.css";

function TelaDeck(){
    return (
        <div className="Deck">
            <header>
                <img src={LogoPequeno} alt="ZapRecall" />
                <h1>Zap Recall</h1>
            </header>
            <main></main>
            <footer></footer>
        </div>
    )
}

export default TelaDeck;