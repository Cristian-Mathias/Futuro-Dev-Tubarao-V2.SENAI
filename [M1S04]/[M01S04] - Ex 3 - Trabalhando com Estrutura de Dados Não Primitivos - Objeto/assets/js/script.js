
document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("form");
    const resultadoElement = document.getElementById("resultado");

    form.addEventListener("submit", function(event) {
        event.preventDefault();
        let nome = document.getElementById("nome").value;
        let idade = document.getElementById("idade").value;
        let isAluno = document.getElementById("aluno").value === "sim";
        
        /* Declaração de um objeto chamado 
        pessoa com as propriedades nome, 
        idade e isAluno */
        let pessoa = {
            nome:nome,
            idade:idade,
            isAluno:isAluno
        };

        resultadoElement.innerHTML = `
            <p>Nome: ${pessoa.nome}</p>
            <p>Idade: ${pessoa.idade}</p>
            <p>É aluno: ${pessoa.isAluno ? 'Sim' : 'Não'}</p>
        `;
    });
});
