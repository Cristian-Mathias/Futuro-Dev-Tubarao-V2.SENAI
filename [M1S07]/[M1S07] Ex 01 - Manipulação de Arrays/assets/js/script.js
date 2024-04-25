/* Manipulação de Arrays

1-Crie um array chamado numeros contendo os números de 1 a 10.
2-Crie outro array chamado frutas contendo três frutas de sua escolha.
3-Imprima os arrays numeros e frutas no console. */

/* 1 */
function numbers(array){
    for (let i = 0; i < array.length; i++) {
        console.log (array[i]);
    }
}
let numeros = [1,2,3,4,5,6,7,8,9,10];



/* 2 */
function cestaDeFrutas(frutas){
    for(let i = 0; i < frutas.length; i++){
        console.log(frutas[i]);
    }
}
let tiposDeFrutas = ['Maça','Abacate','Tomate'];


/* 3 */
numbers(numeros);
cestaDeFrutas(tiposDeFrutas);