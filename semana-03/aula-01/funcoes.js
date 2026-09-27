const notaAuno1 = 10;
const notaAluno2 = 8;

const media = (notaAuno1 + notaAluno2) / 2;
console.log(`A média dos alunos é: ${media}`);

console.log("-----------------------------------------------")
//FUNÇÃO
function saudacao(){ 
    console.log("Olá! Seja bem-vindo!");
}

saudacao();
saudacao();
saudacao();
saudacao();
console.log("-----------------------------------------------")
//FUNCAO COM PARAMETROS - 1 ou mais
function saudacaoComNome(nome, sobrenome){
    console.log(`Olá, ${nome} ${sobrenome}! Seja bem-vindo!`);
}

saudacaoComNome("Julia", "Silva");
saudacaoComNome("Carlos", "Santos");
saudacaoComNome("Ana", "Oliveira");
console.log("-----------------------------------------------")

//Parametro - A variavel criada na função. Ex.: nome e sobrenome na função saudacaoComNome
//Argumento - O valor passado para o parametro quando a função é chamada. Ex.: "Julia" e "Silva" na chamada saudacaoComNome("Julia", "Silva")

//RETURN
function soma(valor1, valor2){

  return  Number(valor1) + Number(valor2);
}

const resultado = soma(10, "50");
console.log(`O resultado da soma é: ${resultado}`);
console.log("-----------------------------------------------")

//validações antecipadas
function sacarDinheiro(saldo, valorSaque) {
    if (valorSaque > saldo) {
        return "Saldo insuficiente";
    }

    saldo -= valorSaque;
    return "Saque realizado com sucesso!";
}

const resultadoSaque = sacarDinheiro(100, 150);
console.log("resultado saque: " + resultadoSaque); 
console.log("-----------------------------------------------")

//Parar a função sem retornar nenhum valor
function cadastrarUsuario(nome) {
    if (nome === "") {
        console.log("Erro: O nome não pode ser vazio.");
        return; 
    }

    console.log("Usuário cadastrado com sucesso!");
}

cadastrarUsuario("Julia");
console.log("-----------------------------------------------")

