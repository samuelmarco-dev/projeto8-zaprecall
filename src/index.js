import ReactDom from "react-dom";
import TelaInicial from "./componentes/TelaInicial";
import TelaFlashcards from "./componentes/TelaFlashcards";

function App(){
    return(
        <main>
            <TelaInicial />
            <TelaFlashcards />
        </main>
    )
}

ReactDom.render(<App />, document.querySelector('.root'))