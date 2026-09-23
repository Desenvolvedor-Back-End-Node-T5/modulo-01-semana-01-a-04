console.log("oi");

/*
Esse comando acima, sozinho não faz nada, quem irá interpretar é o node
Abrir um novo terminal na pasta do arquivo: node + nome do arquivo.js
Exemplo: node aula-1.js
*/

/*

Variáveis -> Identificador utilizado para armazenar um valor na memória durante a execução do programa.

Exemplo de sintaxe de definição/declaração de variável: 

let primeiraVariavel = "Olá mundo!";

let -> palavra reservada que identifica uma variável;
primeiroVariavel -> nome da variável;
= -> Operador de atribuição;
"Olá mundo!" -> Valor da variável (dado salvo/armazenado);
; -> Não é obrigatório, mas é uma boa prática para identificar o "encerramento" da linha

*/

// Escrevendo primeira variável
let nomeAluno = "Maurício";

// Chamando a variável e imprimindo no console
console.log(nomeAluno)


/*

Variáveis Let (mutável) e const (constante)

let -> Usado quando sabe-se que o valor dentro da variável mudará com o tempo, por exemplo: 
- Saldo em conta bancária.
- Placar de um jogo de futebol;
- A idade de uma pessoa;

const -> Usa-se para guardar um valor imutável, se tentar alterar, o próprio JS trava e dá erro, por exemplo: 
- CPF;
- Data de Nascimento;
- Valor de Pi: 3.14;
- URL da aplicação/empresa;

*/

// Alterando valor da vairável nomeAluno (let)
nomeAluno = "Zé";
console.log(nomeAluno);

const dataNascimentoAluno = "09/02/1992";
console.log(dataNascimentoAluno);


/*

# Convenções de nomenclatura
Boas práticas:

Recomendado: 
- let nomeUsuario;
- const idadeMinima;

Não recomendaddo:
- let x;
- let y;
- let teste1;

Diretrizes de código:
- Prefira const sempre que possível para garantir imutabilidade por padrão;
- Utilize let apenas quando o valor guardado realmente precisar ser alterado;
- Escolha nomes claros e autoexplicativos, evitando abreviações confusas;
- Declare uma variável para cada responsabilidade distinta no escopo;

*/