
function encontrarParParaSoma(array, alvo) {
  // Criar um conjunto para armazenar os elementos do array que já foram verificados.
  let conjunto = new Set();
  // new Set(), você está criando um conjunto vazio. Este conjunto pode então ser usado para armazenar valores únicos.
  
  // Iterar sobre o array.
  for (let index = 0; index < array.length; index++) {
    // Calcular o complemento necessário para atingir o alvo
    let complemento = alvo - array[index];
    
    // Verificar se o complemento já existe no conjunto.

    //has() verifica se um elemento específico está presente em um objeto Set. 
    if (conjunto.has(complemento)) {
      // Se existir, retornar o par encontrado.
      //indexOf() para encontrar o índice do elemento complemento
      return [array.indexOf(complemento),index];
    } else {
      // Se não existir, adicionar o elemento atual ao conjunto
      conjunto.add(array[index]);
    }
  }
  
  // Se nenhum par for encontrado, retornar um array vazio
  return [];
}

// Função para entrada de dados e teste
function testeEncontrarPar() {
  // Exemplo de array e alvo
  const array = [2, 7, 11, 15];
  const alvo = 9;
  
  // Chamada da função para encontrar o par
  const par = encontrarParParaSoma(array, alvo);

  // Exibir o par encontrado
  if (par.length === 2) {
    console.log(`Par encontrado nos índices: [${par[0]}, ${par[1]}]; pois ${array[0]} + ${array[1]} = `+alvo+`.`);
   
  } else {
    console.log("Nenhum par encontrado.");
  }
}

// Chamada da função de teste
testeEncontrarPar();
