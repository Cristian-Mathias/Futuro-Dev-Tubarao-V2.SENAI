/* 
Módulos (export e import)
*/

/* 
(...numeros) é o parâmetro de rest. 
Isso permite que você passe qualquer número de argumentos 
para a função somar, e esses argumentos são coletados em 
um array chamado numeros dentro da função 
*/

export function somar(...numeros) {
    let soma = 0;
    numeros.forEach(function(numero) {
        soma += numero;
    });
    return soma;
};

export function calcularProduto(...numero1) {
    let resultado = 1;
    numero1.forEach(function(produto){
        resultado *= produto;
    });
    return resultado;
};


