/* 2- Crie uma função que receba um array de números 
(crie uma segunda função para validar os dados dentro do array) 
e depois calcule a soma de  todos os valores dentro do array. 
Execute a função mostrando na tela o seguinte texto: 'A soma dos valores do array é ${(resultado)}'. */

let array = ['1,2']

function somaArray (array) {
    let somaArray = 0
    for (let i = 0; i < array.length; i++) {
        somaArray = somaArray + array[i];
    }
    return somaArray
} 

function validaDados (valida) {
    for (let i = 0; i < valida.length; i++) {
        if (typeof valida[i] == 'string') {
            alert ('Coloque um dado válido')
    }
    
    } 
    return somaArray(valida)
    
    
}


alert (`A soma dos valores do array é ${validaDados(array)}`)