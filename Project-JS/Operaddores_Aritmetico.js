//Operação Aritméticos
let numero1 = 20;
let numero2 = 40;

// > Tipos de operação Aritméticos

// adição :         +
// subtração:        -
// multiplicação:    *
// divisão:          /
// exponenciação:    ** 
// resto da divisão: %   

console.log("soma =", numero1 + numero2); // Soma da minhas variavel number             (20 + 40 = 60)
console.log("subtração =", numero1 - numero2); // Soma da minhas variavel number        (20 - 40 = -20)
console.log("multiplicação =", numero1 * numero2); // Soma da minhas variavel number    (20 * 40 = 800)
console.log("divisão =", numero1 / numero2); // Soma da minhas variavel number          (20 / 40 = 0.5)
console.log("exponeciação =", numero1 ** numero2); // Soma da minhas variavel number    (20 ** 40 = 1.099...)
console.log("resto da divisão =", numero1 % numero2); // Soma da minhas variavel number (20 % 40 = 20)

// > Precedencia de operadores(tem uma ordem que as contas tem que resolvida)

// 1º exponenciação
// 2º divisão ou multiplicação
// 3º soma
// 4º subtração

//EX_Precedencia de operadores:
const result_1 = (9+1)*2;
console.log("O resultado dessa operação é", result_1)

//EX_Precedencia de operadores:
const result_2 = 2*(40+30)*(9 +10);
console.log("O resultado dessa operação é", result_2)

//Biblioteca Math (Uma biblioteca que tem dentro do JS, que ajuda fazer operação mais complexa, como PI, log, tangente, consseno, exponencial e entre outros tipo.)

console.log("Valor de PI é",Math.PI)
console.log("Valor da raiz de 16 é",Math.sqrt(16))