function encontrarParParaSoma(array, alvo) {
    const mapa = {};
    
    for (let i = 0; i < array.length; i++) {
      const complemento = alvo - array[i];
      
      if (mapa[complemento] !== undefined) {
        return [mapa[complemento], i];
      }
      
      mapa[array[i]] = i;
    }
    
    return null; // Se nenhum par for encontrado
  }
  
  // Exemplo de uso:
  const array = [2, 7, 11, 15];
  const alvo = 9;
  const par = encontrarParParaSoma(array, alvo);
  
  /* Se a variável (par) não é igual (!==) a null*/
  if (par !== null) {
    console.log(`Par encontrado: ${array[par[0]]} (índice ${par[0]}) e ${array[par[1]]} (índice ${par[1]})`);
  } else {
    console.log("Nenhum par encontrado para a soma especificada.");
  }
  
 