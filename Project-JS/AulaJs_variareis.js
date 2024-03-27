// VARIAVEIS (pedaço de memoria para armazenar informação para se usado em qualquer momento)

let idade = 19; // Minha primeira variavel


console.log(idade) // Printar a minha variavel na tela console

//Tipos de Variaveis

let numero = 19;                   // number
let altura = 1.77                 // number
let nome = 'Alguma coisa'        // String (texto)
let estudando = true            // Booleano (True or false)

let outra;                     // Essa variavel não está definida
let nula = null               // está variavel está null
var variavel = 30            // é uma versão mais antiga da variavel JS
const constante = 100       //é uma variavel que não pode mudar, por causa da sua constante



// O codigo "Typeof" mosta o tipo da minha variavel do meu codigo
console.log(numero, typeof numero);
console.log(1.77, typeof altura);
console.log(nome, typeof nome)
console.log(estudando, typeof estudando)
console.log(outra)
console.log(nula)

// Outra forma de usar a variavel constante(const), utiliza a const para colocar alguma valor e logo em seguida utiliza a console.log() para printar o resultado final
const result = numero1 + numero2 ;
console.log("valor da soma é ",result)
