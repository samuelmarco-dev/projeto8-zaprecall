import { useState } from "react";
import arrFlashCards from "../../data/dados.js";
import randomEmbaralhar from "../../data/random.js";
// import Flashcard from "./../Flashcard";
// import Icone from "./../Icone";
import LogoPequeno from "./../../assets/img/logo-pequeno.png";
import "./style.css";

function TelaDeck(){
    const [cards, setCards] = useState([]);

    function gerarFlashcards(){
        if(cards.length === 0){
            randomEmbaralhar(arrFlashCards);
            setCards([...arrFlashCards]);
            return <></>;
        }else{
            return cards.map((card, index) => {
                return <p key={index}>{card.pergunta}</p>
            });
        }
    }

    return (
        <div className="Deck">
            <header>
                <img src={LogoPequeno} alt="ZapRecall" />
                <h1>Zap Recall</h1>
            </header>
            <main>
                {gerarFlashcards()}
            </main>
            <footer>0/8 Concluídos</footer>
        </div>
    )
}

export default TelaDeck;