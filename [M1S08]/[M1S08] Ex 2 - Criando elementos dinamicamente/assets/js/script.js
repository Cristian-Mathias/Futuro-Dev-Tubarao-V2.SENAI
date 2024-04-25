
function adicionarItem() {
    let item = document.createElement('li');

    let itensLista = document.getElementById('lista_elementos').getElementsByTagName('li').length;

    item.textContent = 'Item ' + (itensLista + 1);

    document.getElementById('lista_elementos').appendChild(item);

  
}