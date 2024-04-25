/** Implemente seu código abaixo. Boa sorte! */

let arr = [];

function adicionarItem() {

   document.getElementById('listaInteresse').innerHTML = "";

   if (localStorage.meus_interesses) {
      arr = JSON.parse(localStorage.getItem('meus_interesses'));
   }

   let novoItemInput = document.getElementById("inserirInteresse").value.toUpperCase();
   arr.push(novoItemInput);
   document.getElementById("inserirInteresse").value = "";
   localStorage.meus_interesses = JSON.stringify(arr);

}
/*  */
function limparItem() {
   arr = [];
   localStorage.meus_interesses = JSON.stringify(arr);
   localStorage.removeItem('meus_interesses');
   let resultUl = document.getElementById('listaInteresse');
   resultUl.innerHTML = "";
}
/*  */
function definirIntervalo() {
   let resultUl = document.getElementById('listaInteresse');

   if (localStorage.meus_interesses) {
      arr = JSON.parse(localStorage.getItem('meus_interesses'));
   }

   arr.forEach(item => {
      let li = document.createElement("li");
      li.innerHTML = item;
      resultUl.appendChild(li);
   });
}

definirIntervalo();
setInterval(definirIntervalo, 1000);

/*  */
async function getNewsToday(){
   const response = await fetch("https://servicodados.ibge.gov.br/api/v3/noticias/?tipo=release");
   console.log(response);
   const data = await response.json(); 
   console.log(data);
   console.log("**primeiro elemento**")
   return data.items[0].titulo;
}
document.addEventListener("DOMContentLoaded", async()=>{
   const titulo = await getNewsToday()
   console.log(titulo)
});


