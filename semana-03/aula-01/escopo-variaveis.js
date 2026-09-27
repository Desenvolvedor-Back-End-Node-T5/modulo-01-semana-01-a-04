//Escopo global
let escopoGlobal = "Eu estou no escopo global";

//Escopo de função
function minhaFuncao() {
    let escopoFuncao = "Eu estou no escopo da função";
    console.log(escopoFuncao);
}

minhaFuncao();

console.log("escopo Global:", escopoGlobal);

//console.log("escopo de função:", escopoFuncao);

//escopo de bloco
if (true) {
    let escopoBloco = "Eu estou no escopo do bloco";
    console.log(escopoBloco);
}
console.log("escopo de bloco:", escopoBloco);