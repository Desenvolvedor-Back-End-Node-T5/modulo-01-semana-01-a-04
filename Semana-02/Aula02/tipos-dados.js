/*

Aula 17-09

Tipos primitivos de dados

*/
// TIPOS DE DADOS

// String
let nome = "Maurício"; //Exemplo de string

// Number
let idade = 34; // exemplo de número
let altura = 1.66; // exemplo de número (altura em metros)

// Boolean / Boleeano => True/False => 0 ou 1
let estudante = true; // true porque sou estudante, professora colocou false na aula

// Undefined
let endereco; // exemplo de undefined (variável declarada, mas sem valor)
// Nesse exemplo, o JS entende indefinido porque eu não declarei valor, mas posso fazer depois, já em Null...

// Null
let telefone = null; // exemplo de null (variável declarado com valor nulo)
// Nesse exemplo, deixo explicito que o dado será vazio
// Por exemplo: Criar ou Esvaziar a variável posteriormente

// Exemplo de como evitar um erro ao chamar um objetivo que não existe sem quebrar o código caso não exista
let usuario;
console.log(usuario?.nome);

// Symbol
let id = Symbol("id"); // Exemplo de Symbol (valor único e imutável)

// Bigint
let bigNumber = 349230948238942393472947237409278; // Nùmero inteiro muito grande


/*

Tipos de /Objetos

*/

// object => Representado por dado:valor (key/value)
let dadoAluno = {
    matricula: 123,
    nome: "Maurício",
    idade: 34
}
// Liberdade de montagem maior

// Array => Representa uma lista de dados ordenada dentro de colchetes ([])
// Lista sequencial de elementos. Aqui a ordem importa muito!
// Os dados não têm nomes próprios, eles são identificados pela sua posição na lista (index), começando sempre do 0
let notasAluno = [ 10, 10, 10]; // Lista ordenada de valores dentro de um índice (index), podendo acessar pela posição

// Introdução a função/function

function saudacao(){
    console.log("Olá pessoal!");
}
