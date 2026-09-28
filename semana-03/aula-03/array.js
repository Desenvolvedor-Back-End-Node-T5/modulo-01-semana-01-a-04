//ARRAYS
const alunos = ["João", "Maria", "Pedro", "Ana", "Lucas"];

//tamanho do array
console.log(`O tamanho do array é: ${alunos.length}`);

//acessando elementos do array  
console.log(`O primeiro aluno é: ${alunos[0]}`);
console.log(`O aluno é: ${alunos[2]}`);

//iterando sobre o array
for(let i = 0; i < alunos.length;i++){
    console.log(`O aluno na posição ${i} é: ${alunos[i]}`);
}

//PUSH - adiciona um elemento ao final do array
alunos.push("Carla", "Lucas Matheus");
console.log(`Array após o push: ${alunos}`);

//POP - remove o último elemento do array   
alunos.pop();
console.log(`Array após o pop: ${alunos}`);

//unshift - adiciona um elemento ao início do array
alunos.unshift("Beatriz", "Julia");
console.log(`Array após o unshift: ${alunos}`);

//shift - remove o primeiro elemento do array
alunos.shift();
console.log(`Array após o shift: ${alunos}`);

//INDEXOF - retorna o índice do elemento no array
console.log(`O índice de "Maria" é: ${alunos.indexOf("Maria")}`);
console.log(`O índice de "Jorge" é: ${alunos.indexOf("Jorge")}`);

//INCLUDES - verifica se o elemento existe no array
console.log(`O array inclui "Maria"? ${alunos.includes("Maria")}`);
console.log(`O array inclui "Jorge"? ${alunos.includes("Jorge")}`);