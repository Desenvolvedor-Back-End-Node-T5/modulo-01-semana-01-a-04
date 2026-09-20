/*

Exercício 1 - let e const:

Enunciado

Crie uma variável chamada salario utilizando let com valor inicial de R$2.500,00;
Depois, altere seu valor para R$3.200,00 e exiba o resultado;
Também crie uma constante chamada empresa com o nome "Tech Solutions";
Exiba os valores no terminal antes e após a alteração do valor do salário e exiba também o valor da constante;

*/

console.log("Inicio do programa...");
console.log("Salário: R$")

let salario = 2500.00;
console.log("Salário base: R$",salario)

salario = 3200.00;
console.log("Alteração do salário: R$", salario)

const empresa = "Tech Solutions";
console.log("Nome da Empresa: ", empresa);

console.log("### Fim do programa ###")