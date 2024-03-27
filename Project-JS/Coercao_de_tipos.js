// > Coerção(conversão) de tipos

// 1. conversão explicita(manual)
const numero = 10;

console.log(numero, typeof numero);


// Caso queria converter a minha variavel number para string
const numeroemformatoDeString =String(numero);
console.log(numeroemformatoDeString, typeof numeroemformatoDeString);


// Caso queria converter a minha variavel String para number
console.log(Number('1234'));

//tranforma o resultado da variavel em Float
console.log(parseFloat('19.9'));

//converte numero float em numero int
console.log(parseInt('19.9'));

//conversão para Boolean (0 = false | 1 ou qualquer outro numero = true)
console.log(Boolean(123124))

console.log(Boolean(0))


// 2. conversão implicita(Automática)

//Nesse caso o codigo para não funciona por causa que está somando com texto, mas no Js ele faz a junção do texto com o numero fazendo ele fica 101 no resultado final
console.log(10 + "1")

// Mas tem caso que o Js consegue intepretar o valor que está texto como numero, nos caso do codigo ele conseguiu capitar que o texto é 10, por isso que fez a subtração
console.log("10"-1);
//isso acontece igual com subtração outros tipo, so a soma é diferente o resultado
console.log("10"*3);
console.log("10"/3);

//Ele vai tentar subtrair mas não conseguir pq o Js vai reconhecer que não é um numero e sair com valor de "NaN"
console.log(10 -'x')


//Outros Exemplos

//EX_1

let n = 1 +'1';
n = n-1;

console.log(n); //result = 10


//EX_2
console.log(2+3+4+"5"); //result = 95

//EX_3
console.log("5"+2+3+4); ///result = "5234"

//EX_4
console.log("10" - "4"- "3" - 2 + "5"); //result = 15

