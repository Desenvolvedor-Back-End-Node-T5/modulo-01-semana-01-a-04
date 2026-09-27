//VAR
//LET
//CONST

//VAR
// Não respeita escopo de bloco
// permite redeclaração e reatribuição de valores
var escopoVar = "Eu estou no escopo global com VAR";

if (true) {
    var escopoVar = "Eu estou no escopo do bloco com VAR";
}
console.log(escopoVar); // Mostrará "Eu estou no escopo do bloco com VAR" porque VAR não respeita escopo de bloco

//LET
// Respeita escopo de bloco
// permite reatribuição de valores, mas não permite redeclaração no mesmo escopo
let escopoLet = "Eu estou no escopo global com LET";

if (true) {
    let escopoLet = "Eu estou no escopo do bloco com LET";
    console.log(escopoLet); // Mostrará "Eu estou no escopo do bloco com LET"
}
console.log(escopoLet); // Mostrará "Eu estou no escopo global com LET" porque LET respeita escopo de bloco

//CONST
// Respeita escopo de bloco
// Não permite reatribuição nem redeclaração no mesmo escopo
const escopoConst = "Eu estou no escopo global com CONST";

if (true) {
    const escopoConst = "Eu estou no escopo do bloco com CONST";
    console.log(escopoConst); // Mostrará "Eu estou no escopo do bloco com CONST"
}
console.log(escopoConst); // Mostrará "Eu estou no escopo global com CONST" porque CONST respeita escopo de bloco