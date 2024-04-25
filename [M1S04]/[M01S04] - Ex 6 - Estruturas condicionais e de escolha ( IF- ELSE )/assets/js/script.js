
function verificar() {
    /* entrada de dados */
    let numero1 = parseFloat(document.getElementById('numero1').value);
    let numero2 = parseFloat(document.getElementById('numero2').value);
    /* atribuição de valor a variável */
    let ehMaior = numero1 > numero2;
    let ehPar = numero1 % 2 === 0;
    let resultado;
    /* processamento */
    /* verifica o maior número */
    if (ehMaior){
        resultado = `O valor da variável número 1 é maior que o valor da variável número 2!<br></br>`;
    }else{
        resultado = `O valor da variável número 1 é menor que o valor da variável número 2!<br></br>`;
    }
    /* verifica se é par ou impar */
    if(ehPar) {
        resultado += `O valor da variável número 1 é par!<br></br>`;
    } else {
        resultado +=`O valor da variável número 1 é impar!<br></br>`;
    }
    /* saída de dados */
    document.getElementById('resultado').innerHTML = resultado;
}
/* -O operador '+='em JavaScript é usado para concatenar uma string com outra, ou para adicionar um valor a uma variável existente. 
Ex:
(resultado += `O valor da variável número 1 é par!<br></br>`;)
Essa linha está concatenando a string atual em resultado com a nova string 
É o mesmo que escrever:
(resultado = resultado + `O valor da variável número 1 é par!<br></br>`;)*/

/* A função parseFloat() está sendo usada neste código para garantir que os valores obtidos dos elementos HTML sejam interpretados como números de ponto flutuante (decimais). Isso é importante porque o método value de um elemento HTML retorna uma string, e se você deseja realizar operações matemáticas com esses valores, é necessário convertê-los em números. */

/* O '.value' é uma propriedade dos elementos HTML que permite acessar ou definir o valor do elemento. Quando você acessa '.value', você obtém o valor contido dentro do elemento, geralmente em forma de string. */