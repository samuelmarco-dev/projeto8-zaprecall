import { useState } from "react";
import arrFlashCards from "../../data/dados.js";
import randomEmbaralhar from "../../data/random.js";
import Flashcard from "./../FlashCard";
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
            const chave = Math.random() * 10;
            return cards.map((card, index) => {
                const { pergunta, resposta } = card;
                return <Flashcard key={chave+index} frente={pergunta} 
                verso={resposta} number={index}/>
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