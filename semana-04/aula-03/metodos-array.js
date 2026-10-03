const produtos = [
{ id: 1, nome: 'Notebook', preco: 4500, emEstoque: true },
  { id: 2, nome: 'Mouse', preco: 150, emEstoque: true },
  { id: 3, nome: 'Teclado', preco: 250, emEstoque: false },
  { id: 4, nome: 'Monitor', preco: 1200, emEstoque: true }
];

// for (let i = 0; i < produtos.length; i++) {
// console.log(`Nome do produto: ${produtos[i].nome}`);
// }


//FIND - Buscar o primeiro elemento que cumpre a condição especificada

//buscar o primeiro produto com nome Notebook
const produtoNotebook = produtos.find(produto => produto.nome === "celular");
console.log(`Produto encontrado: ${produtoNotebook}`);

//FILTER - Buscar todos os elementos que cumprem a condição especificada
//Bucar todos os produtos com preco menor que 500

const produtoMenor500 = produtos.filter(produto => produto.preco < 500);
console.log("Produtos com preço menor que 500:", produtoMenor500);

//Map - Manipula dados
//Gerar um novo array apenas os os valores dos nomes dos produtos
const nomesProdutos = produtos.map(produto => produto.nome);
console.log("Nomes dos produtos:", nomesProdutos);

//Novo array com 10% de desconto nos preços
const produtosComDesconto = produtos.map(produto => ({preco: produto.preco * 0.9 }));
console.log("Produtos com desconto:", produtosComDesconto);

//EVERY
const produtosMaior600 = produtos.every(produto => produto.preco > 600);
console.log("Todos os produtos têm preço maior que 600:", produtosMaior600);

//REDUCE
//Somar todos os precos dos produtos
const somaPrecos = produtos.reduce((acumulador, valorAtual) => acumulador + valorAtual.preco, 0);
console.log("Soma dos preços dos produtos:", somaPrecos);

//Filtro preco dos produtos >= 100 e <= 1000 e depois somar esses precos nesse range
const resultadoFiltroESomaPrecos = produtos
.filter(produto => produto.preco >= 100 && produto.preco <= 1000)
.reduce((acumulador, valorAtual) => acumulador + valorAtual.preco, 0);

console.log("Resultado do filtro e soma dos preços:", resultadoFiltroESomaPrecos);