
const lista = document.getElementById('lista_elementos');
const elemento = lista.getElementsByTagName('li');

for (let i = 0; i < elemento.length; i++) {
   if (elemento[i].textContent.trim() === 'Arvore') {
      elemento[i].style.color = 'grey';
      elemento[i].style.backgroundColor = 'yellow';
      break;
   }

}