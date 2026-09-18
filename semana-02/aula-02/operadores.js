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
a = a + 5;
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
