/*

Exercício 2:

Cadastro de funcionário

Enunciado: 

Desenvolva um programa que simule um cadastro simples de funcionário.

Armazene em variáveis: 
- Nome;
- Idade;
- Cargo;
- Salário;
- Empresa;

Ao final, exiba todoas as informações utilizando console.log().

*/

const nome = "Maurício";
let idade = "34";
let cargo = "Analista de PCP";
let salario = 5000.00;
const empresa = "Tech Solution";

console.log("Início do programa...\n")
console.log("Ficha de Cadastro\n")
console.log(empresa)
console.log("Funcionário:", nome);
console.log("Idade:", idade);
console.log("Cargo:", cargo);
console.log("Salário: R$", salario, "\n");
console.log("### Fim do Programa ###");


/*

Usei let para dados que poderão ser alterados posteriormente, como: idade, cargo e salário, 
já vislumbrando evolução e crescimento dentro da empresa.

const apliquei para as informações que poderiam até mudar por questões legais, mas é menos provavel, como:
nome do funcionário e empresa

*/