// > Funçoes


// Esse codigo é so a definição da função
function saudacao() {
    console.log('Bem-Vindo(a) ao nosso curso de JavaScript')
}


saudacao()

//como enviar parametros para as funções


function saudacao(nome, curso = "JavaScripts") {
    console.log(`Olá, ${nome}! seja Bem-Vindo(a) ao nosso curso de ${curso}`)
}


saudacao("Eduardo",)


//Retorno da minha Função
// Ele retorna como valor que está dentro da função e não retorne o valor como texto

function soma(numero1, numero2) {
    return numero1 + numero2
}

const result =soma(10,20)
console.log(result)



function teste(numero){
    if(numero > 50){
        return true
    }
    return false
}