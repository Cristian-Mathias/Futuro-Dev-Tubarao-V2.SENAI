/** Implemente seu código abaixo. Boa sorte! */

let arr = [];

function adicionarItem() {
    if (localStorage.meus_interesses) {
        arr = JSON.parse(localStorage.getItem('meus_interesses'));
    }
    
    let novoItemInput = document.getElementById("inserirInteresse").value.toUpperCase();
    arr.push(novoItemInput);
    document.getElementById("inserirInteresse").value = "";
    localStorage.meus_interesses = JSON.stringify(arr);
  
    let resultUl = document.getElementById('listaInteresse');
    resultUl.innerHTML = "";
    if (localStorage.meus_interesses){             
       arr = JSON.parse(localStorage.getItem('meus_interesses')); 
    }

    arr.forEach(item => {
      let li = document.createElement("li");
      li.innerHTML = item;
      resultUl.append(li);
   });
}

 