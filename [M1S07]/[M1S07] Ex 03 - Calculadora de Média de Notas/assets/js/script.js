
/* 
-Calculadora de Média de Notas.

1-Suponha que você tenha um array contendo as notas dos 
alunos em uma determinada disciplina. Você precisa calcular 
a média dessas notas. Utilize o método forEach() para percorrer 
o array e calcular a média das notas. Escreva o código dentro 
de uma função!
 */

const listaDeAlunos = [
   ['Carlos', [10, 10, 10]],
   ['Maria',     [7, 7, 7]],
   ['Ruan',      [5, 5, 5]],
   ['Weslei',    [4, 4, 4]],
   ['Zé',        [5, 8, 6]]
];

function situacaoDoAluno(notas) {
    const media = calcularMedia(notas);

    if (media >= 7) {
        return 'Aprovado';
    }
    if (media >= 5 && media < 7) {
        return 'Recuperação';
    }
    if (media < 5) {
        return 'Reprovado';
    }
}

function calcularMedia(notas) {
    let soma = 0;
    notas.forEach(function(nota) {
        soma += nota;
    });
    return soma / notas.length; 
    
}

listaDeAlunos.forEach(function(aluno) {
    let nome = aluno[0];
    let notas = aluno[1];
    let situacao = situacaoDoAluno(notas);
    console.log(`Nome: ${nome}; Notas: ${notas}; Situação: ${situacao}`);
});




