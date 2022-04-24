import { useState } from 'react';
import verificarPasso from './etapa';
import './style.css';

function Flashcard(props){
    const {frente, verso, number} = props;
    const [passo, setPasso] = useState(0);

    const renderizarPasso = verificarPasso(passo, frente, verso, number, setPasso);

    return (
        <div className="Flashcard">
            {renderizarPasso}
        </div>
    )
}

export default Flashcard;