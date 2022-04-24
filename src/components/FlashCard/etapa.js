import Icone from './../Icone';

function verificarPasso(etapa, pergunta, resposta, index, mudarPasso){
    if(etapa === 0){
        return (
            <div className="painel fechado" onClick={()=>mudarPasso(etapa + 1)}>
                <p>pergunta {index+1}</p>
                <Icone icone="play" />
            </div>
        );
    }
    if(etapa === 1){
        return (
            <h1 onClick={()=>mudarPasso(etapa + 1)}>{pergunta}</h1>
        );
    }
    if(etapa === 2){
        return (
            <h1 onClick={()=>mudarPasso(etapa + 1)}>{resposta}</h1>
        );
    }
    if(etapa === 3){
        return (
            <h1>Terminei de responder</h1>
        );
    }
}

export default verificarPasso;