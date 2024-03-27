// > Objetos

//Como criar um objeto JS

let pessoa = {
    nome:"Eduardo",
    idade:19,
}

console.log(pessoa)
console.log(pessoa['nome'])
console.log(pessoa.idade)


//como faço para adicionar um par chave-valor

pessoa.altura = 1.77
console.log(pessoa)

//como faço para remover um par chave-valor

delete pessoa.altura
console.log(pessoa)

//como faço para pecorrer pela par chave-valor

for (let chave in  pessoa){
    console.log(chave)
}


