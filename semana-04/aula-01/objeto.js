//Objeto

//Entidade: produto
//propriedades: nome, preco, estoque, estoqueDisponivel, categoria
const produto = {
    nome: "celular samsung",
    preco: 4000,
    estoque: 100,
    estoqueDisponivel: true,
    categoria: "eletrônicos",
    fornecedores: ["Samsung", "LG"]
}

const aluno = {
    "nome aluno": "Saulo",
    idade: 30,
    curso: "formação backend",
    1231456: "codigo de matricula",
    email_aluno: "saulo@example.com",
    notas: [8, 9, 7],
    notasSemestre: {
        primeiroSemestre: [8, 9, 7],
        segundoSemestre: [9, 8, 10],
        terceiroSemestre: [10, 9, 8]
    }
}

console.log("notas semestre:", aluno.notasSemestre);
console.log("primeiro semestre:", aluno.notasSemestre.primeiroSemestre);
console.log("segundo semestre:", aluno.notasSemestre.segundoSemestre);
console.log("terceiro semestre:", aluno.notasSemestre.terceiroSemestre);

//Acessando propriedades do objeto

//Notação de ponto
console.log("Objeto produto:");
console.log("nome:", produto.nome);
console.log("preco:", produto.preco);
console.log("estoque:", produto.estoque);
console.log("estoqueDisponivel:", produto.estoqueDisponivel);
console.log("categoria:", produto.categoria);
console.log("fornecedores:", produto.fornecedores);

console.log("------------------------------")
//Notação de colchetes
console.log("Objeto aluno:");
console.log("nome aluno:", aluno["nome aluno"]);
console.log("idade:", aluno["idade"]);
console.log("curso:", aluno["curso"]);
console.log("codigo de matricula:", aluno["1231456"]);
console.log("email aluno:", aluno["email_aluno"]);

//Alterando propriedades do objeto
console.log("---------------------")
produto.nome = "celular iphone";
aluno["nome aluno"] = "João";
console.log("nome alterado:", produto.nome);
console.log("objeto produto:", produto);
console.log("objeto aluno:", aluno);

//Adicionando novas propriedades ao objeto
aluno.endereco = "Rua das flores, 123";
console.log("objeto aluno após adicionar endereço:", aluno);

aluno["esta matriculado"] = true;
console.log("objeto aluno após adicionar esta matriculado:", aluno);

//Removendo propriedades do objeto
delete aluno["esta matriculado"];
console.log("objeto aluno após remover esta matriculado:", aluno);



//Arrays de objetos
const produtosEletronicos = [
    {
        nome: "celular samsung",
        "preco": 4000,
        estoque: 100,
        estoqueDisponivel: true,
        categoria: "eletrônicos",
        fornecedores: ["Samsung", "LG"]
    },
    {
        nome: "celular iphone",
        "preco": 5000,
        estoque: 50,
        estoqueDisponivel: true,
        categoria: "eletrônicos",
        fornecedores: ["Apple"]
    }
];

//Acessando elementos do array de objetos
console.log("------------------------------");
console.log("Acessar meu array de produtos eletrônicos na posição 0:", produtosEletronicos[0]);
console.log("Acessar meu array de produtos eletrônicos na posição 0 - nome:", produtosEletronicos[0].nome);
console.log("Acessar meu array de produtos eletrônicos na posição 0 - preco:", produtosEletronicos[0]["preco"]);
console.log("Acessar meu array de produtos eletrônicos na posição 0 - estoque:", produtosEletronicos[0].estoque);
console.log("Acessar meu array de produtos eletrônicos na posição 0 - estoqueDisponivel:", produtosEletronicos[0].estoqueDisponivel);
console.log("Acessar meu array de produtos eletrônicos na posição 0 - categoria:", produtosEletronicos[0].categoria);
console.log("Acessar meu array de produtos eletrônicos na posição 0 - fornecedor 2:", produtosEletronicos[0].fornecedores[1]);

console.log("Acessar meu array de produtos eletrônicos na posição 1:", produtosEletronicos[1]);
console.log("Acessar meu array de produtos eletrônicos na posição 1 - nome:", produtosEletronicos[1].nome);
console.log("Acessar meu array de produtos eletrônicos na posição 1 - preco:", produtosEletronicos[1]["preco"]);
console.log("Acessar meu array de produtos eletrônicos na posição 1 - estoque:", produtosEletronicos[1].estoque);
console.log("Acessar meu array de produtos eletrônicos na posição 1 - estoqueDisponivel:", produtosEletronicos[1].estoqueDisponivel);
console.log("Acessar meu array de produtos eletrônicos na posição 1 - categoria:", produtosEletronicos[1].categoria);
console.log("Acessar meu array de produtos eletrônicos na posição 1 - fornecedores:", produtosEletronicos[1].fornecedores);

//Iterando sobre o array de objetos
for (let i = 0; i < produtosEletronicos.length; i++) {
    console.log(`Produto na posição ${i}:`, produtosEletronicos[i]);
}

//Object.keys: Devolve lista com todos os nomes das chaves(propriedades) do meu objeto
// Object.values: Devolve lista com todos os valores das chaves do meu objeto
//Object.entries: Devolve lista com todos os pares [chave, valor] do meu objeto

console.log("------------------------------");
console.log("Chaves do primeiro produto:", Object.keys(produtosEletronicos[0]));
console.log("Valores do primeiro produto:", Object.values(produtosEletronicos[0]));
console.log("Entradas do primeiro produto:", Object.entries(produtosEletronicos[0]));

console.log("------------------------------");
console.log("Chaves do primeiro produto:", Object.keys(produto));
console.log("Valores do primeiro produto:", Object.values(produto));
console.log("Entradas do primeiro produto:", Object.entries(produto));

console.log("Entradas do primeiro produto:", Object.entries(produtosEletronicos));

//Exercicio 2
const colaboradores = [
    { nome: "João", setor: "RH" },
    { nome: "Maria", setor: "Financeiro" },
    { nome: "Pedro", setor: "TI" }
];

//Iterando sobre o array de colaboradores
for (let i = 0; i < colaboradores.length; i++) {
    console.log(`Colaboradores:`, colaboradores[i].nome);
}