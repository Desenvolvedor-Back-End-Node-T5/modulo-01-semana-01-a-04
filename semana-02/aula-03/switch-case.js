const direcao = "sul";

if (direcao === "norte"){
    console.log("Andar para cima");
}
else if (direcao === "sul"){
    console.log("Andar para baixo");
}
else if (direcao === "leste"){
    console.log("Andar para a direita");
}
else if (direcao === "oeste"){
    console.log("Andar para a esquerda");
}
else{
    console.log("Direção inválida");
}
console.log("-----------------------------------------------")

//Switch case

//caso 1: Completo com break e default;
switch (direcao){
    case "norte": 
    console.log("Andar para cima");
    break;
    case "sul":
    console.log("Andar para baixo");
    break;
    case "leste":
    console.log("Andar para a direita");
    break;
    case "oeste":
    console.log("Andar para a esquerda");
    break;
    default:
    console.log("Direção inválida");
    break;
}

console.log("-----------------------------------------------")

//Sem o uso do break -> Explicar o conceito de fall through(queda livre)
const cor = "azul";

switch (cor){
    case "vermelho":
    console.log("Cor é vermelho");
    //break;
    case "verde":
    console.log("Cor é verde");
    //break;
    case "azul":
    console.log("Cor é azul");
    //break;
    case "amarelo":
    console.log("Cor é amarela");
    break;
    default:
    console.log("Cor inválida");
    //break;
}

console.log("saiu de switch de cor");
console.log("-----------------------------------------------")
//Omissão intencional de break para agrupar casos semelhantes
const fruta = "maçã";

switch (fruta){
    case "maçã":
    case "banana":
    case "laranja":
    console.log("É uma fruta");
    break;
    default:
    console.log("Não é uma fruta");
}

//Default não é obrigatório, mas é uma boa prática incluí-lo para tratar casos inesperados
console.log("-----------------------------------------------")
const animal = "lagartixa";

switch (animal){
    case "cachorro":
    console.log("É um cachorro");
    break;
    case "gato":
    console.log("É um gato");
    break;
    default:
    console.log("Animal desconhecido");
    break;
}

console.log("-----------------------------------------------")
//Cenário sem break e sem default

const opcao = 9;

switch (opcao){
    case 1:
    console.log("Opção 1 selecionada");
    case 2:
    console.log("Opção 2 selecionada");
    case 3:
    console.log("Opção 3 selecionada");
}

console.log("Fim do assunto switch-case");