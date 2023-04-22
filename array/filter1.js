const produto = [
    {nome: 'Notebook', preco: 2499, fragil: true}, 
    {nome: 'iPad Pro', preco: 4199, fragil: true},
    {nome: 'Copo de Vidro', preco: 12.49, fragil: true},
    {nome: 'Copo de Plástico', preco: 18.99, fragil: true}
]

console.log(produto.filter(function(p) {
    return p.preco > 10 // false nada passa, true passa tudo
}))

const caro = produto => produto.preco >= 500
const fragil = produto => produto.fragil

console.log(produto.filter(caro).filter(fragil))