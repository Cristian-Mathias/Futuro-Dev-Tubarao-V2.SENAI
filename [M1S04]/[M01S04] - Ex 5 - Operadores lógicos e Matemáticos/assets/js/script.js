function calcular() {
    let numero1 = parseFloat(document.getElementById('numero1').value);
    let numero2 = parseFloat(document.getElementById('numero2').value);

    /* operadores matemáticos */
    let adicao = numero1 + numero2;
    let subtracao = numero1 - numero2;
    let multiplicacao = numero1 * numero2;
    let divisao = numero1 / numero2;
    /* indicando se numero1 é maior que numero2. */
    let ehMaior = numero1 > numero2;
    /* indicando se numero1 é par. */
    let ehPar = numero1 % 2 === 0;

    let resultado = `Soma: ${adicao}<br><br>
                     Subtração: ${subtracao}<br><br>
                     Multiplicação: ${multiplicacao}<br><br>
                     Divisão: ${divisao}<br><br>
                     O valor da variável número 1 é maior que o valor da variável número 2? ${ehMaior ? 'Sim' : 'Não'}!<br><br>
                     O valor da variável número 1 é par? ${ehPar ? 'Sim' : 'Não'}!`;

    document.getElementById('resultado').innerHTML = resultado;
}
