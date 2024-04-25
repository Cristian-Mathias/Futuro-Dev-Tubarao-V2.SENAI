/** Implemente seu código abaixo. Boa sorte! */


let arr = [];

function adicionarItem(chave,novoItem) {
    if (localStorage[chave]) {
        arr = JSON.parse(localStorage.getItem(chave));
    }
    
    arr.push(novoItem.toUpperCase());
    localStorage.setItem(chave,JSON.stringify(arr));
  
    let resultUl = document.getElementById('listaInteresse');
    resultUl.innerHTML = "";
    
    arr.forEach(item => {
      let li = document.createElement("li");
      li.innerHTML = item;
      resultUl.append(li);
   });

}

adicionarItem("meus_interesses", "pedra");
adicionarItem("meus_interesses", "casa");
adicionarItem("meus_interesses", "martelo");


