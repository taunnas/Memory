const alunos = [
    {nome: 'João', nota: 7.3, bolsista: false},
    {nome: 'Maria', nota: 9.2, bolsista: true},
    {nome: 'João', nota: 9.8, bolsista: false},
    {nome: 'João', nota: 8.7, bolsista: true}
]

console.log(alunos.map(a => a.nota))
const resultado = alunos.map(a => a.nota).reduce(function(acumulador, atutal) {
    console.log(acumulador, atutal)
    return acumulador + atutal
}, 0)

console.log(resultado)

