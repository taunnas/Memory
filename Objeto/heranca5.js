console.log(typeof String)
console.log(typeof Array)
console.log(typeof Object)

String.prototype.reverse = function () {
    return this.split('').reverse().join('')
}

console.log('casa Sava'.reverse())

Array.prototype.frist = function() {
    return this[0]
}

console.log([1, 2, 3, 4, 5].frist())
console.log(['a', 'b',  'c'].frist())

String.prototype.toString = function () {
    return 'Lascou tudo'
}

console.log('casa sava'.reverse())