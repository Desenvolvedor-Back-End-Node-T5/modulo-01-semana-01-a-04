//venda total da loja   
const vendas = [4500, 150, 250, 1200];

const vendaTotal = vendas.reduce((acumulador, valorAtual) => acumulador + valorAtual);
console.log("Venda total da loja:", vendaTotal);

//media dos notas do aluno
const notas = [8, 7, 9, 6, 10];
const mediaNotas = notas.reduce((acumulador, valorAtual) => acumulador + valorAtual, 0) / notas.length;
console.log("Média das notas do aluno:", mediaNotas);