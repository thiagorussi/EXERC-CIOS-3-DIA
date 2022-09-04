/* 6- Neste exercício, temos um array composto de letras repetidas e uma letra isolada. 
Por exemplo, temos um array chamado vetor:
let vetor = ["a", "b", "a", "a", "c", "b"]
Aqui, temos:
 vetor[0] = "a"; 
 vetor[1] = "b";
 vetor[2] = "a";
 vetor[3] = "a";
 vetor[4] = "c";
 vetor[5] = "b";
Sabemos que a única letra que não possui repetição está na posição [4], elemento “c”. Então, crie uma função que retornar este elemento. */



/* var unico = vetor.filter ( function( elem, i, vetor ) {
    return vetor.indexOf( elem ) === i;
} );  */

let vetor = ["c", "b","ç", "a", "a", "a", "b", "c", "j","j","i","k"]
let letraUnica = []
let cont = 0

for (let i = 0; i < vetor.length; i++) { 
    cont = 0 //reiniciando contator
    for (let j = 0; j < vetor.length; j++) { //aqui o vetor [i] compara com todos posições [j]
        
        if (i != j && vetor[i] == vetor[j]) { //para não comparar com ele mesmo e vai contar se encontar um item igual 
            cont++
        }
    }
    console.log(cont)
    if(cont == 0) { // se não houve repetição, então esse é o item que não se repete
        letraUnica.push(vetor[i])
    }
}

console.log(letraUnica);





/*
const noRepeat = new Set(vetor)
console.log(noRepeat) */



/* const letras = vetor.join('')
let letraUnica 

for (const letra of vetor) {
  if (letras.replace(new RegExp(`[^${letra}]`, 'g'), '').length <= 1) {
    letraUnica = letra
    break
  }
}

console.log(letraUnica) */


/*
function getUnique(arr) {
    let obj = {};
  
    for (item of arr) {
      obj[item] = (obj[item] || 0) + 1
    }
  
    return Object.entries(obj).find(([key, value]) => value == 1)[0]
  }*/