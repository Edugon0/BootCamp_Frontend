// Operadores Booleanos (serve para fazer a comparação, se é maior ou menor, igual e entre outros)

// Igualdade:     == (ou ===) ------("==" ele faz a comparação pelo conteudo ) ("==="se quiser comparar o conteudo e o tipo de variavel )

// desigualdade:   != (ou !==) ------("!=" ele faz a comparação pelo conteudo ) ("!=="se quiser comparar o conteudo e o tipo de variavel )

// maior que:      >

// Maior ou igual: >=

// Menor que:      <

//menor ou igual   <=

const numero_1 = 10
console.log("Igualdade:",numero_1 == 20);

const numero_8 = 10
console.log("Igualdade(===):",numero_1 === 20);

const numero_2 = 10
console.log("desigualdade:",numero_2 != 20);

const numero_9 = 10
console.log("desigualdade(!==):",numero_2 !== 20);

const numero_3 = 10
console.log("maior que:",numero_3 > 20);

const numero_4 = 10
console.log("Maior ou igual:",numero_4 >= 20);

const numero_6 = 10
console.log("Menor que:",numero_6 < 20);

const numero_7 = 10
console.log("menor ou igual:",numero_7 <= 20);

// >Conjunções Lógica (faz junções das condições )

// AND : &&
let idade = 19;
let CNH= true;

const digirir = idade >= 18 && CNH === true;
console.log("Posso dirigir?",digirir);

// OR:   ||
idade = 40

const voto= idade < 18 || idade >= 70

// NOT:  !
const gostoDoCurso = false 

console.log("Vc gosta do curso?",!gostoDoCurso) // quando vc colocar a "!" do lado da variavel, vc invete o resultado dele






