function randomEmbaralhar(dados){
    return dados.sort((a, b) => Math.random() - 0.5);
}

export default randomEmbaralhar;