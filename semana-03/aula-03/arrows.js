//arrow function
//sintaxe: const funcao = (parâmetros) => { ... }

// const: Declaração da variável
// ( ) : Parâmetros de entrada
// => : O operador "flecha" (arrow)
// { } : Corpo de execução

// 1. Sem parametros
function olaMundo(){
    console.log("Olá mundo!");
}

//arrow function
let olaMundo = () => {
    console.log("Olá mundo!");
}

// 2. Retorno de linha unica(retorno implicito) - Nao precisa usar chaves pois tem apenas uma linha de execução
let olaMundo = () => console.log("Olá mundo!");

// 3. Com 1 parametro - Nao precisa usar parenteses(serão opcionais)
const dobroNumero = n => n * 2;

console.log(`o dobro de 5 é: ${dobroNumero(5)}`); 

// 4. Com 2 parametros
const somar = (a, b) => a + b;