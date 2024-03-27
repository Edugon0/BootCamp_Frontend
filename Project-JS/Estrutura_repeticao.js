// npm install readline-sync or npm install -g readline-sync (esse codigo serve para fazer a instalação da biblioteca de leitura de usuario)
// > Estrutura de repetição

//Laços Condicionais
const input = require('readline-sync') // importação da minha biblioteca "readline-sync"

const numero_sorteado = 5;

let numero = Number(input.question('Escolhe numero sorteado(1 a 10)')) // codigo para fazer o usuario inserir os valores
console.log(numero, typeof numero)


while(numero !== numero_sorteado){
    console.log('voce errou o numero. Tenta de novo!')

    numero = Number(input.question('Escolhe numero sorteado(1 a 10)'))
}
console.log('Parabens, Você acertou!!')
