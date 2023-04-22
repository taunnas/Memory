function criaarProduto(nome, preco) {
    return {
        nome,
        preco,
        disconto: 0.1
    }
}

console.log(criaarProduto('Notebook', 2199.49))
console.log(criaarProduto('iPad', 1199.49))