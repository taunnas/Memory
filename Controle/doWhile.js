function getinteiroAletorioEntre(min, max) {
    const valor = Math.random() * (max - min) + min 
    return Math.floor(valor)
}

let opcao = 0 //somente iniciada a variável, sem valor inicial!

do {
    opcao = getinteiroAletorioEntre(-1, 10)
    console.log(`opção escolhida foi ${opcao}.`)
}while (opcao != -1)

console.log('Até a Próxima!')