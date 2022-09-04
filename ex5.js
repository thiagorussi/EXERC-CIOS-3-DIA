/*5- Crie uma função que receba um array de números 
(Valide os dados dentro do array, reaproveite a função criada no exercício 1) 
e depois calcule a média de todos os valores dentro do array. 
Execute a função mostrando na tela o seguinte texto: 'A média dos valores do array é ${(resultado)}'. */

let array = [2,1]

function somaArray (array) {
    let somaArray = 0
    for (let i = 0; i < array.length; i++) {
        somaArray = somaArray + array[i];
    }
    return somaArray
} 

function media (array) {
    for (let i = 0; i < array.length; i++) {
        if (typeof array[i] == 'string') {
            alert ('Coloque um dado válido')
    }
    
    } 
    somaArray(array)
    let media = somaArray(array)/array.length
    
    return media
}


alert (`A média dos valores do array é ${media(array)}`)