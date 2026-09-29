/*
Operadores

Aritméticos: +, -, *, /, %
Comparação: ==, ===, !=, !==, >, <, >=, <=
Lógicos: &&, ||, !
Atribuição: =, +=, -=, *=, /=, %=

*/

let nome = "Maurício"; //Exemplo de string
let idade = 34; // exemplo de número
let altura = 1.66; // exemplo de número (altura em metros)
let estudante = true; // true porque sou estudante, professora colocou false na aula
let endereco; // exemplo de undefined (variável declarada, mas sem valor)
let telefone = null; // exemplo de null (variável declarado com valor nulo)
let usuario;
console.log(usuario?.nome);
let id = Symbol("id"); // Exemplo de Symbol (valor único e imutável)
let bigNumber = 349230948238942393472947237409278; // Nùmero inteiro muito grande
function saudacao(){
    console.log("Olá pessoal!");
}
let dadoAluno = {
    matricula: 123,
    nome: "Maurício",
    idade: 34
}
let notasAluno = [ 10, 10, 10]; // Lista ordenada de valores dentro de um índice (index), podendo acessar pela posição
console.log("-------------------------------------------");

// Operador unario
console.log("variável nome:", typeof nome);
console.log("Variável idade:", typeof idade);
console.log("variável altura:", typeof altura);
console.log("variável estudante:", typeof estudante);
console.log("variável endereco:", typeof endereco);
console.log("variável telefone:", typeof telefone);
console.log("variável id:", typeof id);
console.log("variável bigNumber:", typeof bigNumber);
console.log("variável dadoAluno:", typeof dadoAluno);
console.log("variável notasAluno:", typeof notasAluno);
// console.log("variável saudacao:", typeof saudacao);
// saudacao();


// Concatenação, forma antiga:
console.log("Nome:", nome + " e idade: " + idade);
//Forma moderna com template string
console.log(`nome: ${nome} e idade: ${idade}`);


// Aritméticos: +, -, *, /, %
console.log("soma:", idade + 5);
console.log("subtração:", idade - 5);
console.log("multiplicação:", idade * 2);
console.log("divisão:", idade / 2);
console.log("módulo:", idade % 2); // Faz a divisão e retorna o resto do resultado
console.log("exponenciação:", idade ** 2);
console.log("incremento:", ++idade);
console.log("decremento:", --idade);

console.log("-------------------------------------------");

nota1 = 10; // number
nota2 = "5"; // string
console.log("soma das notas:", nota1 + nota2); // Com dois tipos diferentes, concatena, ao invés de 15, transforma em "105"

//Tratando string como number:
let resultadoSoma = Number(nota1) + Number(nota2);
console.log("Resultado da soma das notas tratadas: ", resultadoSoma);

// ATRIBUIÇÃO:
console.log("-------------------------------------------");
console.log("Operadores de Atribuição");

let a = 10;
console.log("Valor inicial de a:", a);
// a = a + 5; // forma aceitável, mas mais "complicada" do que += 5
a += 5; //forma mais prática, significa pegar o valor dele mesmo e somar mais 5 nesse exemplo
console.log("após a += 5:", a);
a -= 3;
console.log("após a -= 3:", a);
a *= 2;
console.log("após a *= 2:", a);
a /= 4;
console.log("após a /= 4:", a);
a %= 3;
console.log("após a %= 3:", a);
a ** 2;
console.log("após a ** 2:", a);