console.log(1);
console.log(2);
console.log(3);
console.log(4);
console.log(5);

// 3 passos do loop for: inicialização, condição e incremento

for(let volta = 1; volta <= 3; volta++){
    console.log(`correndo a volta numero ${volta}`);
}

// Exemplo de loop for usando uma variável criada fora do loop
let i = 10; // Variável criada fora

for (; i <= 15; i++) {
    console.log(i);
}

// Exemplo de loop for com múltiplas condições
let energia = 10;

// O loop roda se o 'i' for menor que 5 E a 'energia' for maior que 0
for (let i = 1; i <= 5 && energia > 0; i++) {
    console.log(`Volta ${i}, Energia restante: ${energia}`);
    energia = energia - 3; // Gastando energia a cada volta
}

// Pulando de 2 em 2 (Números pares)
for (let i = 0; i <= 10; i += 2) {
    console.log(i); // Mostra: 0, 2, 4, 6, 8, 10
}

// Contagem regressiva (Subtraindo de 1 em 1)
for (let i = 5; i >= 1; i--) {
    console.log(i); // Mostra: 5, 4, 3, 2, 1
}

//BREAK - Interrompe o loop completamente
for (let i = 1; i <= 10; i++) {
  if (i === 5) {
    break; // Para o loop por completo no 5
  }
  console.log(i); // Imprime apenas 1, 2, 3, 4
}

//CONTINUE - Pula a iteração atual e continua com a próxima
for (let i = 1; i <= 5; i++) {
  if (i === 3) {
    continue; // Pula a impressão do número 3
  }
  console.log(i); // Imprime 1, 2, 4, 5
}


