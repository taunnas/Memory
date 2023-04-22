const pilotos = ['Vettel', 'Alonso', 'Raikkonen', 'Massa']
pilotos.pop() //massa quebrou o carro
console.log(pilotos)

pilotos.push('Verstappen')
console.log(pilotos)

pilotos.shift() //remove o primeiro
console.log(pilotos)


pilotos.push('Hamilton')
console.log(pilotos)

//splice pode adicionar ou remover elementos

//adicionar
pilotos.splice(2, 0, 'Bottas', 'Massa')
console.log(pilotos)

//remover
pilotos.splice(3, 1)//massa quebrou
console.log(pilotos)

const algunPilotos1 = pilotos.slice(2) //Nono array
console.log(algunPilotos1)

const algunPilotos2 = pilotos.slice(1, 4)
console.log(algunPilotos2)