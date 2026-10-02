//exercicio 3
const produtos = [
     { nome: "Notebook", preco: 3500 },
     { nome: "Mouse", preco: 120 }, 
     { nome: "Monitor", preco: 950 } 
];

console.log("lista de produtos:", produtos[0].nome, "-", "R$" + produtos[0].preco);

for(let i = 0; i < produtos.length; i++){
    console.log(`Nome: ${produtos[i].nome} - Preço:R$${produtos[i].preco}`);
}
console.log("-------------------------------")
//exercicio 4
let veiculo = {
    marca: 'volkswagen',
    modelo: 'gol',
    ano: '2010'
}

console.log("Objeto veiculo:", veiculo);

veiculo.cor = 'prata';

console.log("Adicionando cor ao veiculo:", veiculo);
veiculo.ano = '2011';
console.log("Atualizando ano do veiculo:", veiculo);

console.log("Objeto final do veiculo após alterações:", veiculo);