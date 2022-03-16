export default function TelaInicial(){
    return(
        <section className="tela-inicial escondido">
            <aside className="flex">
                <div className="logo flex">
                    <figure>
                        <img src="./assets/logo.png" alt="Imagem" />
                    </figure>
                    <p>ZapRecall</p>
                </div>
                <div className="botao flex">
                    <button>
                        <p>Iniciar Recall</p>
                    </button>
                </div>
            </aside>
        </section>
    )
}