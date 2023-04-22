// par nome/valor
const saudacao = 'opa' // contexto léxico 1

function exec() {
    const saudacao = 'Fala' //contexto léxico 2
    return saudacao
}


// Objetos são grupos aninhados de pares nome/valores
const cliente = {
    nome: 'Pedro',
    idade: 32,
    peso: 90,
    endereco: {
        largadouro: 'Rua Muito Legal',
        numero: 123
    }
}

console.log(saudacao)
console.log(exec())
console.log(cliente)
