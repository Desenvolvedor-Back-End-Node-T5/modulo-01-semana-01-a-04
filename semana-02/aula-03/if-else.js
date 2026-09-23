//ESTRUTURAS CONDICIONAIS

//Só posso realizar o saque se o valor do saque for menor ou igual ao saldo
let saldo = 1;
let valorSaque = 5;

//IF E ELSE
if(valorSaque <= saldo){
    console.log("Saque autorizado");
} else {
    console.log("Saldo insuficiente");
}

console.log("---------------------------------")

//ELSE IF - SENÃO SE
if(valorSaque <= saldo){
    console.log("Saque autorizado");
} else if(valorSaque > saldo && valorSaque <= 100){
    console.log("Saque autorizado. Limite de cheque especial utilizado.");
} else {
    console.log("Saque não permitido");
}

console.log("---------------------------------")
let saldo2 = 100;
let valorCompra = 30;

console.log("Saldo inicial da minha conta: " + saldo2);

//IF simples
if(saldo2 >= valorCompra){
    saldo2 = saldo2 - valorCompra;
    console.log("Compra realizada com sucesso");
}

console.log("Saldo restante: " + saldo2);
console.log("---------------------------------")
// IF e ELSE IF

let categoria = "Bronze";
let desconto = 0;

if(categoria === "Diamante"){
    desconto = 20;
} else if(categoria === "Ouro"){
    desconto = 15;
} else if(categoria === "Prata"){
    desconto = 10;
} else if(categoria === "Bronze"){
    desconto = 5;
}

const resultadoCategoria = categoria === "Diamante"? "Desconto de 20%"
    : categoria === "Ouro" ? "Desconto de 15%"
    : categoria === "Prata" ? "Desconto de 10%"
    : categoria === "Bronze" ? "Desconto de 5%"
    : "Sem desconto";

console.log("Desconto aplicado: " + desconto + "%");
console.log("Resultado categoria: " + resultadoCategoria);

console.log("---------------------------------")
//TERNARIO
let idade = 26;

const resultadoMaiorIdade = idade >= 18 ? "Maior de idade" : "Menor de idade"; 

const resultadoMenorIdade = idade < 18 
? "Menor de idade" 
: "Maior de idade"; 

console.log(`Resultado: ${resultadoMaiorIdade}`);
console.log(`Resultado: ${resultadoMenorIdade}`);