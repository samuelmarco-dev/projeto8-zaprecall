import { useState } from "react";
import arrFlashCards from "../../data/dados.js";
import randomEmbaralhar from "../../data/random.js";
import Flashcard from "./../FlashCard";
import Icone from "./../Icone";
import LogoPequeno from "./../../assets/img/logo-pequeno.png";
import "./style.css";

function TelaDeck(){
    const [respostas, setRespostas] = useState([]);
    const [questoes, setQuestoes] = useState([]);

    function gerarFlashcards() {
        if(questoes.length === 0) {
          randomEmbaralhar(arrFlashCards);
          setQuestoes([...arrFlashCards]);
          return <></>;
        }
        else {
          return questoes.map((questao, index) => {
            const {pergunta, resposta} = questao;

            return <Flashcard key={pergunta + index} frente={pergunta} verso={resposta}
              indice={index + 1} aoFinalizar={escolha => setRespostas([...respostas, escolha])} />
          })
        }
      }

    function montarFooter() {
        let resultado = <></>;
        
        if(respostas.length === questoes.length && questoes.length > 0) {
          if(!respostas.includes("erro")) {
            resultado =  (
              <div className="resultado">
                <span><Icone icone="festinha" /> Parabéns!</span>
                <p>Você não esqueceu de nenhum flashcard!</p>
              </div>
            ) 
          } else {
            resultado = (
              <div className="resultado">
                <span><Icone icone="triste" /> Putz!</span>
                <p>Ainda faltam alguns...Mas não desanime!</p>
              </div>
            )
          }
        }
    
        return (
          <>
          {resultado}
          <p>{respostas.length}/{questoes.length} concluídos</p>
          { respostas.map((resposta, index) => <Icone key={resposta+index} icone={resposta} />) }
          </>
        )
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
            <footer>
                {montarFooter()}
            </footer>
        </div>
    )
}

export default TelaDeck;