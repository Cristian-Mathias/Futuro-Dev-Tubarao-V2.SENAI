/*
-Iteração com Loops

Considere um array numeros com uma sequência númerica.

1-Adicione mais um número ao final do array numeros utilizando o 
método push() e imprima o novo array no console.

2-Remova o último número do array numeros utilizando o método pop() 
e imprima o novo array no console.

3-Adicione uma nova fruta no início do array frutas utilizando o método 
unshift() e imprima o novo array no console.

4-Remova a primeira fruta do array frutas utilizando o método shift() e 
imprima o novo array no console. */


function numbers(array){
    for (let i = 0; i < array.length; i++) {
        console.log(array[i]);
    }
}
let numeros = [1,2,3,4,5,6,7,8,9,10];
console.log('Lista de números de 1 até 10.');
numbers(numeros);

/* Adicionando mais um número ao final do array  método push()*/
numeros.push(11);
console.log('Adicionando um novo número ao final da lista.');
console.log(numeros);

/* Remova o último número do array numeros utilizando o método pop() */
numeros.pop();
console.log('Removendo um número do final da lista.');
console.log(numeros);





function cestaDeFrutas(frutas){
    for(let i = 0; i < frutas.length; i++){
        console.log(frutas[i]);
    }
}
let tiposDeFrutas = ['Maça','Abacate','Tomate'];
console.log('Lista contendo 3 tipos de frutas.');
cestaDeFrutas(tiposDeFrutas);

/* Adiciondo uma nova fruta no início do array frutas utilizando o método 
unshift() */
tiposDeFrutas.unshift('Goiaba');
console.log('Adicionando uma nova fruta ao início da lista.');
console.log(tiposDeFrutas);
/* Removendo a primeira fruta do array frutas utilizando o método shift() */
tiposDeFrutas.shift('Goaiaba');
console.log('Removendo uma fruta do início  da lista.');
cestaDeFrutas(tiposDeFrutas);


/* Retorna o ultimo elemento da lista */
console.log('Retorna o último elemento da lista; (tiposDeFrutas[tiposDeFrutas.length -1]).');
console.log(tiposDeFrutas[tiposDeFrutas.length -1]);

/* Array.isArray() é um método em JavaScript que verifica se o valor fornecido é um objeto array. Ele retorna true se o valor for um array e false caso contrário. */
console.log('Verifica se o valor fornecido é um objeto array; (Array.isArray(tiposDeFrutas).');
console.log(Array.isArray(tiposDeFrutas));