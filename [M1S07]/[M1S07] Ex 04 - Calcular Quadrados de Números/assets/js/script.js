/* Calcular Quadrados de Números

1-Suponha que você tenha uma lista de números e deseje 
calcular o quadrado de cada número. Utilize o método map() 
para criar uma nova lista contendo os quadrados dos números. */

let listaNumero = [1,2,3,4,5,6,7,8,9,10];

function calcularQuadrado(numero){
    return numero * numero;
}
let quadrado = listaNumero.map(calcularQuadrado);

console.log('Lista de números.');
console.log(listaNumero);

console.log('Lista de números ao quadrado.')
console.log(quadrado);