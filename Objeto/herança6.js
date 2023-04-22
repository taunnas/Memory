function Aula(nome, videoID) {
    this.nome = nome
    this.videoID = videoID
}

const aula1 = new Aula('Bem vindo', 123)
const aula2 = new Aula('Até Breve', 456)
console.log(aula1, aula2)

//simulando new
function NOVO(F, ...params) {
    const obj = {}
    obj.__proto__ = f.prototype
    F.apply(obj, params)
    return obj
}

const aula3 = new Aula('Bem vindo', 123)
const aula4 = new Aula('Até Breve', 456)
console.log(aula3, aula4)