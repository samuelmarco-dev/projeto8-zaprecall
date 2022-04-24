import { useState } from "react";
import Logo from "./../../assets/img/logo.png";
import "./style.css";

function TelaInicial(){
    // eslint-disable-next-line no-unused-vars
    const [tela, setTela] = useState(true);
    
    return(
        tela ? 
        <div className="Inicio">
            <img src={Logo} alt="Zap Recall!" />
            <h1>ZapRecall</h1>
            <button onClick={() => setTela(false)}>Iniciar Recall!</button>
        </div> 
        : <></>
    );
}

export default TelaInicial;