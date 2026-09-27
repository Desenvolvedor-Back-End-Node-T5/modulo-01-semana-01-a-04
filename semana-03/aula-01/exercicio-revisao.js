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

console.log("-----------------------------------------------")
function calcularConversao(valorEmReais, moedaDestino) {
    // Convertendo a string para letras maiúsculas para evitar erros de digitação (Ex: 'usd' vira 'USD')
    switch (moedaDestino.toUpperCase()) {
        case 'USD':
            return valorEmReais / 5.0;
        case 'EUR':
            return valorEmReais / 5.5;
        case 'GBP':
            return valorEmReais / 6.5;
        default:
            return "Erro: Moeda de destino não suportada.";
    }
}

// Convertendo R$ 100 para Dólar (Esperado: 20)
console.log(calcularConversao(100, 'USD')); 

// Convertendo R$ 110 para Euro (Esperado: 20)
console.log(calcularConversao(110, 'EUR')); 

// Convertendo R$ 130 para Libra (Esperado: 20)
console.log(calcularConversao(130, 'GBP')); 

// Testando uma moeda não suportada
console.log(calcularConversao(100, 'ARS')); 