import Icone from './../Icone';

function verificarPasso(status, pergunta, resposta, index, setStatus, guardarResposta){
    const {etapa, resultado} = status;
    if(etapa === 0){
        return (
            <div className="painel fechado" onClick={()=>setStatus({...status, etapa: etapa + 1})}>
                <p>Pergunta {index}</p>
                <Icone icone="play" />
            </div>
        );
    }
    if(etapa === 1){
        return (
            <div className="painel aberto">
                <p>{pergunta}</p>
                <div className="icone" onClick={()=>setStatus({...status, etapa: etapa + 1})}>
                    <Icone icone="setinha" />
                </div>
            </div>
        );
    }
    if(etapa === 2){
        const botoes = [
            { texto: "Não lembrei", resultado: "erro" },
            { texto: "Quase não lembrei", resultado: "duvida" },
            { texto: "Zap!", resultado: "acerto"}
        ]
        return (
            <div className="painel aberto">
                <p>{resposta}</p>
                <div className="botoes">
                {
                    botoes.map(({texto, resultado}) => {
                    return (
                        <button key={resultado} className={resultado} 
                        onClick={()=>{
                            setStatus({...status, etapa: etapa + 1, resultado: resultado});
                            guardarResposta(resultado);
                        }}>
                            {texto}
                        </button>
                    )})
                }
                </div>
            </div>
        );
    }
    if(etapa === 3){
        return (
            <div className="painel fechado finalizado">
                <p className={resultado}>Pergunta {index}</p>
                <Icone icone={resultado} />
            </div>
        );
    }
}

export default verificarPasso;