const nomeProduto = "Notebook";
const precoUnitario = 3000;
const quantidade = 5;
const clientePremium = false;

let valorFinalProduto = precoUnitario * quantidade;

if (clientePremium === true){
 valorFinalProduto *= 0.80;
} else if(quantidade >= 5){
    valorFinalProduto *= 0.90;
}

console.log(` ---- RESUMO DA COMPRA -----`);
console.log(`Produto: ${nomeProduto}`);
console.log(`Preço Unitário: R$ ${precoUnitario}`);
console.log(`Quantidade: ${quantidade}`);
console.log(`Cliente Premium: ${clientePremium ? "Sim" : "Não"}`);
console.log(`Valor Final a pagar: R$ ${valorFinalProduto.toFixed(2)}`); //toFixed(2) para exibir com 2 casas decimais