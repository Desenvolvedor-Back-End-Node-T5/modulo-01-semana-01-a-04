
//JSON

//Estrutura de um JSON
// {
//   "cep": "01001-000",
//   "logradouro": "Praça da Sé",
//   "complemento": "lado ímpar",
//   "unidade": "",
//   "bairro": "Sé",
//   "localidade": "São Paulo",
//   "uf": "SP",
//   "estado": "São Paulo",
//   "regiao": "Sudeste",
//   "ibge": "3550308",
//   "gia": "1004",
//   "ddd": "11",
//   "siafi": "7107"
// }

let veiculo = {
    marca: 'volkswagen',
    modelo: 'gol',
    ano: '2010'
}

//converte objeto para JSON
let veiculoJSON = JSON.stringify(veiculo);
console.log("ObjetoVeiculo convertido em JSON:", veiculoJSON);

//converte JSON de volta para objeto
let veiculoObjeto = JSON.parse(veiculoJSON);
console.log("JSON convertido de volta em objeto:", veiculoObjeto);


//exercicio - cadastro de filme

// let filme = {
//     titulo: "A hora do rush 3",
//     genero: "Ação",
//     duracao: "1h 30min"
// }

// console.log("Objeto filme:", filme);
// let filmeJson = JSON.stringify(filme);
// console.log("Objeto filme convertido em JSON:", filmeJson);

//exercicio 2
const cliente = [
    {
        nome: "Carla",
        idade: 19,
        cidade: "Floripa"
    }
]
const endereco = [
    {
        rua: "Rua das flores",
        numero: 123,
        bairro: "Centro",
        estado: "Santa Catarina",
        cep: "88000-000",
        pais: "Brasil"
    }
]

const clienteJSON = JSON.stringify(cliente);
console.log("Cliente JSON:", clienteJSON);

let cliente2 = {
  nome: "Josinaldo Json da Silva",
  idade: 25,
  cidade: "Joinville",
  endereco: {
    rua: "Rua das Flores",
    numero: 150,
    bairro: "Centro",
    estado: "SC",
    cep: "89201-100",
    pais: "Brasil"
  }
}

console.log(cliente2)
let cliente2Json = JSON.stringify(cliente2)
console.log(cliente2Json)