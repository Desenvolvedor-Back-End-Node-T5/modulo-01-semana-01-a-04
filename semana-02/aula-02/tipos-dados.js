//TIPOS DE DADOS

//TIPOS PRIMITIVOS

//String
let nome = "Julia"; // exemplo de string

//Number
let idade = 25; // exemplo de número
let altura = 1.65; // exemplo de número (altura em metros)

//Boolean
let estudante = false; // exemplo de boolean (verdadeiro ou falso)

//Undefined
let endereco; // exemplo de undefined (variável declarada, mas sem valor)

//Null
let telefone = null; // exemplo de null (variável declarada com valor nulo)

let usuario;
console.log(usuario?.nome);

//Symbol
let id = Symbol("id"); // exemplo de symbol (valor único e imutável)

//BigInt
let bigNumber = 1234567890123456789012345678901234567890n; // exemplo de BigInt (número inteiro muito grande)

//TIPOS DE REFERENCIA

//Object
//Objeto representando um aluno. 
// Não tem ordem fixa e são identificados por nomes

let dadoAluno = {
    matricula: 123,
    nome: "Julia",
    idade: 26
}

//ARRAY
// Array representando as notas de um aluno. 
// Lista sequencial de elementos. Aqui a ordem importa muito! 
// Os dados não têm nomes próprios, eles são identificados pela sua posição na fila (índice), começando sempre do número 0.
let notasAluno = [10, 10, 10];

function saudacao(){
    console.log("Olá, pessoal");
}