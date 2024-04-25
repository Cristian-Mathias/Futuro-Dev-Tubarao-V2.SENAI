
function encontrarParParaSoma(array, alvo) {
    for(var i = 0; i < array.length; i++){
        for (var j = i + 1; j < array.length; j++){
            var num1 = array[i];
            var num2 = array[j];
            var soma = num1 + num2;
            
            if (soma == alvo){
                return soma, alvo;
            }

        }
    }
}


var array = [2, 7, 11, 15];
var alvo = 9;
console.log(encontrarParParaSoma(array, alvo));