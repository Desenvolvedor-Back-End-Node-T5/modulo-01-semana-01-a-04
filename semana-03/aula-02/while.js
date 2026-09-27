let contador = 1;

while (contador <= 5) {
 console.log(contador);
 contador++;
}

//multiplas condições 
let energia = 10;
contador = 1;
while (contador <= 5 && energia > 0) {
    console.log(`Volta ${contador}, Energia restante: ${energia}`);
    contador++;
    energia = energia - 3; // Gastando energia a cada volta
}

// Loop while controlado por uma variável externa
let continuarRodando = true; // Definido fora
let tentativas = 0;

while (continuarRodando) {
    tentativas++;
    console.log(`Tentativa número ${tentativas}`);

    if (tentativas === 3) {
        continuarRodando = false; // Mudamos a variável de fora para parar o loop
    }
}