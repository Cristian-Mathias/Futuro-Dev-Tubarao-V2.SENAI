
function showText() {
    //converte o texto para maiúsculo
    let input = document.querySelector('#inputText').value.toUpperCase();
    //verifica se há texto
    if (input) {
        //limita quantidade de caracteres por linha
        let lines = [];
        while (input.length > 0) {
            lines.push(input.substring(0, 35));
            input = input.substring(35);
        }
        //exibe o texto no paragrafo
        document.querySelector('#outputText').innerText = lines.join('\n');
    } else {
       document.querySelector('#outputText').innerText = '';
    }

}
