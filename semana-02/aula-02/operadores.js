//OPERADORES
// Operadores aritméticos: +, -, *, /, %
// Operadores de comparação: ==, ===, !=, !==, >, <, >=, <=
// Operadores lógicos: &&, ||, !
// Operadores de atribuição: =, +=, -=, *=, /=, %=
let nome = "Julia";
let idade = 25;
let altura = 1.65;
let estudante = true;
let endereco = "Rua A, 123";
let telefone = "1234-5678";
let id = 1;
let bigNumber = 9007199254740991n;
let dadoAluno = { nome: "Julia", idade: 25 };
let notasAluno = [10, 9, 8];

//Operador unario
console.log("variavel nome:", typeof nome);
console.log("variavel idade:", typeof idade);
console.log("variavel altura:", typeof altura);
console.log("variavel estudante:", typeof estudante);
console.log("variavel endereco:", typeof endereco);
console.log("variavel telefone:", typeof telefone);
console.log("variavel id:", typeof id);
console.log("variavel bigNumber:", typeof bigNumber);
console.log("variavel dadoAluno:", typeof dadoAluno);
console.log("variavel notasAluno:", typeof notasAluno);
//console.log("variavel saudacao:", typeof saudacao());
//saudacao();

//concatenação
//forma antiga de concatenação
console.log("nome: "+ nome + " e idade: " + idade);

//forma moderna de concatenação (template string)
console.log(`nome: ${nome} e idade: ${idade}`);

//OPERADORES ARITMÉTICOS
console.log("soma:", idade + 5);
console.log("subtração:", idade - 5);
console.log("multiplicação:", idade * 2);
console.log("divisão:", idade / 2);
console.log("módulo:", idade % 2);
console.log("exponenciação:", idade ** 2);
console.log("incremento:", ++idade);
console.log("decremento:", --idade);

console.log("--------------------------------------------")

nota1 = 10;
nota2 = "5";

console.log("soma das notas:", nota1 + nota2);

let resultadoSoma = Number(nota1) + Number(nota2);
console.log("resultado da soma das notas:", resultadoSoma);

console.log("--------------------------------------------")
//OPERADORES DE ATRIBUIÇÃO
let a = 10;
console.log("valor inicial de a:", a);
a += 5;

console.log("após a += 5:", a);
a -= 3;
console.log("após a -= 3:", a);
a *= 2;
console.log("após a *= 2:", a);
a /= 4;
console.log("após a /= 4:", a);
a %= 3;
console.log("após a %= 3:", a);
a **= 2;
console.log("após a **= 2:", a);

// OPERADORES LOGICOS

let valorE = true;
let valorF = false;

console.log("AND lógico: " + (valorE && valorF)); // false
console.log("OR lógico: " + (valorE || valorF)); // true
console.log("NOT lógico: " + (!valorE)); // false

let valor1 = 10;
let valor2 = 20;

console.log("AND lógico valores 1 e 2: " + (valor1 > 10 && valor2 < 50)); // false
console.log("OR lógico valores 1 e 2: " + (valor1 > 10 || valor2 < 50)); // true
console.log("NOT lógico valores 1 e 2: " + (!(valor1 > 10 && valor2 < 50))); // true

console.log("numero 0", !0);

//OPERADORES DE COMPARAÇÃO
let valorG = 10;
let valorH = 5;

console.log("Igualdade: " + (valorG == valorH)); // false -> compara apenas o valor
console.log("Desigualdade: " + (valorG != valorH)); // true -> compara apenas o valor
console.log("Maior que: " + (valorG > valorH)); // true
console.log("Menor que: " + (valorG < valorH)); // false
console.log("Maior ou igual a: " + (valorG >= valorH)); // true
console.log("Menor ou igual a: " + (valorG <= valorH)); // false
console.log("Igualdade estrita: " + (valorG === valorH)); // false -> compara valor e tipo do dado
console.log("Desigualdade estrita: " + (valorG !== valorH)); // true -> compara valor e tipo do dado