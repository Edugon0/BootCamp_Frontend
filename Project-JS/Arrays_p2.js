// > Arrays - Parte 2 (Metodos de Arrays)
const arr1 = [30,5,6,1,29]
let arr2 = []
//fatiamento: slice (Pega parte do seu arrays)

console.log(arr1.slice(0,2))
console.log(arr1.slice(2))

//Adicionando elemento: push | unshift
console.log("Antes de adicionar o push", arr2);
arr2.push(10,2,3,5,7) // esse metodo faz adicionar um novo elemento dentro da minha arrays(lista), não tem limite para coloca os elementos, outro ponto importante que ele so coloca o elemento do final da minha arrays(lista)
console.log("depois de adicionar push", arr2)


console.log("Antes de unshift", arr2);
arr2.unshift(0) // Esse metodo é igual ao "push" mas ao inves de coloca no final a minha arrays, ele coloca no inicio
console.log("depois de unshift", arr2);


//Removendo elementos: pop| shift
console.log("Antes de adicionar o pop", arr2);
arr2.pop()// ele remove um elemento que está dentro a minha arrays(lista), mas eliminar o meu ultimo elemento 
console.log("depois de adicionar pop", arr2)

console.log("Antes de adicionar o shift", arr2);
arr2.shift()// ele remove um elemento que está dentro a minha arrays(lista), mas eliminar o meu primeiro elemento
console.log("depois de adicionar shift", arr2)

//Concatenando arrays: concat

console.log("arr1", arr1)
console.log("arr2", arr2)

console.log(arr1.concat(arr2)) // Esse metodo serve para juntar as duas arrays(lista) em uma só

//Buscando elementos: indexOf | lastindeOf

console.log(arr1)
let indice = arr1.indexOf(34) // Esse metodo serve para buscar o indice do meu elemento, mas ele pega o primeiro elemento repetido da indice que foi escolhido
console.log(indice)

let arr3 = [1,2,3,3,5,3]
console.log(arr3)
console.log("Elemento pelo indexof",arr3.indexOf(3))
console.log("elemento pelo lastindexof",arr3.lastIndexOf(3)) // serve para saber a indice do ultimo elemento do mesmo valor que foi colocado

//descobrindo a existencia de um elemento: includes

console.log(arr1)
console.log("elemeto do Include é",arr1.includes(10)) // Esse metodos ajuda na busca de elemento existente  da mimha arrays

//invertendo Arryas: reverse

console.log('Arr1 normal:', arr1)
console.log('arr1 invertido:', arr1.reverse()) // esse metodo serve para inverte a minha Arrays(lista)