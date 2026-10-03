let consultas = [ 
    {
        paciente: 'jonas',
        medico: 'rodrigo',
        horario: '12:00'

    },
    {
        paciente: 'joaquim',
        medico: 'filipe',
        horario: '14:00'
        
    },
    {
        paciente: 'maria',
        medico: 'ricardo',
        horario: '16:00'
    }
]

console.log(consultas);
consultas[1].horario = '15:30';

let jsonConsultas = JSON.stringify(consultas);
console.log(`Conversão para Json: ${jsonConsultas}`);

jsonConsultas = JSON.parse(jsonConsultas);
console.log('Retorno para objeto do JS:', jsonConsultas);