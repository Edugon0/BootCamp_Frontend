// > ARRAYS

// Pq é necessario da Arrys? Como faço uma Array?

//R: Pq quando a gente vai salvar uma informação, so poderia guardar uma unica informação, ou seja preciso de uma variavel para para armazenar cada informação

//EX:
// const nome = 'Eduardo'
// const idade = 26
// const alutra = 1.64
// const estudando = true


let lista = ['Eduardo',26,1.64,true]
console.log(lista)


// Como acessar os elementos do Array

console.log('primeiro elemento é', lista[0]) // Isso serve para buscar os elementos que estão dentro da minha array(lista), sempre começando do 0
console.log('primeiro elemento é', lista[1])
console.log('primeiro elemento é', lista[2])
console.log('primeiro elemento é', lista[3])


//como obter o tamanho da array

console.log("O tamanho da minha Array(lista)",lista.length)


// Percorrendo Arrays(lista)


 // Primeira forma de percorrer pela Arrays(lista)
for (let i = 0; i < lista.length; i++){
    console.log(lista[i])
}

 // segunda forma de percorrer pela Arrays(lista)
// A cada interação, eu quero que vc pegar um elemento da Array(lista), ou seja ele está percorrendo pela minha Arrays(lista)
 for (let elemento of lista){
    console.log(elemento)
 }

 //Terceira forma de percorrer pela Arrays(lista)
//Nesse codigo faz eu percorrer nas indice do meu Arrays(lista)
 for(let variavel in lista){
    console.log(variavel)
 }

