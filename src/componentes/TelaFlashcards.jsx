export default function TelaFlashcards(){
    return(
        <section className="deck-flashcards">
            <header className="flex">
                <img src="./assets/logo.png" alt="Imagem" />
                <p>ZapRecall</p>
            </header>
            <article className="opcoes-flashcards">
                <aside>
                    <div className="flashcard">
                        <p>Pergunta 1</p>
                        <img src="./assets/rotate-flashcard.svg" alt="Vector" />
                    </div>
                    <section className="pergunta-flashcard escondido">
                        <p className="fonte-pergunta">O que é JSX?</p>
                        <img src="./assets/vira-flashcard.svg" alt="Imagem" />
                    </section>
                    <section className="resposta-flashcard escondido">
                        <p className="fonte-pergunta">JSX é uma sintaxe para escrever HTML dentro do JS</p>
                        <div className="informar-acao">
                            <div className="flex red"><p>Não lembrei</p></div>
                            <div className="flex orange"><p>Quase não lembrei</p></div>
                            <div className="flex green"><p>Zap!</p></div>
                        </div>
                    </section>
                </aside>
                <aside>
                    <div className="flashcard">
                        <p>Pergunta 1</p>
                        <img src="./assets/rotate-flashcard.svg" alt="Vector" />
                    </div>
                </aside>
                <aside>
                    <div className="flashcard">
                        <p>Pergunta 1</p>
                        <img src="./assets/rotate-flashcard.svg" alt="Vector" />
                    </div>
                </aside>
                <aside>
                    <div className="flashcard">
                        <p>Pergunta 1</p>
                        <img src="./assets/rotate-flashcard.svg" alt="Vector" />
                    </div>
                </aside>
            </article>
            <footer className="flex">
                <p>0/4 Concluídos</p>
            </footer>
        </section>
    )
}