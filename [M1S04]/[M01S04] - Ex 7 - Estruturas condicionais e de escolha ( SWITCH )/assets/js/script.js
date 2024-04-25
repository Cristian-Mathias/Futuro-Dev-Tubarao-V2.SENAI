
function mudarCor(cor){
    let paletacores = document.getElementById('paletacores');
   
    switch (cor){
        case 'vermelho':
            paletacores.style.backgroundColor = 'red';
            break;
        case 'verde':
            paletacores.style.backgroundColor = 'green';
            break;
        case 'azul':
            paletacores.style.backgroundColor = 'blue';
            break;
        default:
            console.log('Cor inválida');
    }
   
}



























