
/* Primeiro Card */
const modal = document.querySelector('#modal');
const openModal = document.querySelector('.open-button');
const closeModal = document.querySelector('.close-button');

openModal.addEventListener('click',() => {
    modal.show();
})

closeModal.addEventListener('click',() => {
    modal.close();
})

/* Segundo Card */
const modal2 = document.querySelector('#modal2');
const openModal2 = document.querySelector('.open-button2');
const closeModal2 = document.querySelector('.close-button2');

openModal2.addEventListener('click',() => {
    modal2.show();
})

closeModal2.addEventListener('click',() => {
    modal2.close();
})

/* Terceiro Card */
const modal3 = document.querySelector('#modal3');
const openModal3 = document.querySelector('.open-button3');
const closeModal3 = document.querySelector('.close-button3');

openModal3.addEventListener('click',() => {
    modal3.show();
})

closeModal3.addEventListener('click',() => {
    modal3.close();
})
/* Terceiro Card */
const modal4 = document.querySelector('#modal4');
const openModal4 = document.querySelector('.open-button4');
const closeModal4 = document.querySelector('.close-button4');

openModal4.addEventListener('click',() => {
    modal4.show();
})

closeModal4.addEventListener('click',() => {
    modal4.close();
})
/* Quinto Card */
const modal5 = document.querySelector('#modal5');
const openModal5 = document.querySelector('.open-button5');
const closeModal5 = document.querySelector('.close-button5');

openModal5.addEventListener('click',() => {
    modal5.show();
})

closeModal5.addEventListener('click',() => {
    modal5.close();
})
/* Sexto Card */
const modal6 = document.querySelector('#modal6');
const openModal6 = document.querySelector('.open-button6');
const closeModal6 = document.querySelector('.close-button6');

openModal6.addEventListener('click',() => {
    modal6.show();
})

closeModal6.addEventListener('click',() => {
    modal6.close();
})
/* Localização */
const modal7 = document.querySelector('#modal7');
const openModal7 = document.querySelector('.open-button7');
const closeModal7 = document.querySelector('.close-button7');

openModal7.addEventListener('click',() => {
    modal7.show();
})

closeModal7.addEventListener('click',() => {
    modal7.close();
})

/* Input */
document.addEventListener('DOMContentLoaded', function () {
   
    var inputBusca = document.getElementById('input-busca');
    var botaoBusca = document.getElementById('botao_input');
    
    botaoBusca.addEventListener('click', function () {
     
      var termoBusca = inputBusca.value.trim().toLowerCase();
      
      var modalProdutos = document.querySelectorAll('.card__titulo');
      
      modalProdutos.forEach(function (titulo) {
        if (titulo.textContent.toLowerCase().includes(termoBusca)) {
          titulo.classList.add('destaque');
          titulo.scrollIntoView({behavior: "smooth", block: "nearest", inline: "nearest"});
        } else {
          titulo.classList.remove('destaque');
        }
      });
    });
  });