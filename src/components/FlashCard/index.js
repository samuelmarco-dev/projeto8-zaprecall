import { useState } from 'react';
import verificarPasso from './etapa';
import './style.css';

function Flashcard(props){
    const {frente, verso, indice, aoFinalizar} = props;
    const [status, setStatus] = useState({etapa: 0,resultado: ""});

    const renderizarPasso = 
    verificarPasso(status, frente, verso, indice, setStatus, aoFinalizar);

    return (
        <div className="Flashcard">
            {renderizarPasso}
        </div>
    )
}

export default Flashcard;