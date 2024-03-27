// > Laço numeri : FOR
const input = require('readline-sync')
// o Problema

// const nota1 = Number(input. question('Informe a nota 1:'))

// const nota2 = Number(input. question('Informe a nota 2:'))

// const nota3 = Number(input. question('Informe a nota 3:'))

// let media = (nota1+nota2+nota3)/3


// Acumulador (é uma variavel que faz somativa do seu valor anterior)

let Acumulador = 0;

Acumulador = Acumulador+10

Acumulador += 2

Acumulador ++ // soma 1 no acumulador e ja jogar o valor nele mesmo

console.log(Acumulador)
// Estrura for

for ( let i = 0; i < 10; i++){
    console.log('repetiu', i)
}

for ( let i = 12; i < 8; i--){ // quando o codiigo está verificando na ordem descrecente
    console.log('repetiu', i)
}


//Resolvendo o problema inicial
let nota
let soma = 0;

for(let i = 1; i <= 3; i++){ // quando coloca crase e logo em seguida coloca ${i} voce está coloca o valor da sua variavel lá dentro
    nota = Number( input.question(`Informe a nota ${i} do aluno:` ))

    soma = soma + nota;
}

console.log(`A medida da notas do aluno é ${soma/3}`)

