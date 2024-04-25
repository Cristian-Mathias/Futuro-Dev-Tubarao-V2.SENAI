document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("form");
    const resultadoElement = document.getElementById("resultado");

    form.addEventListener("submit", function(event) {
        event.preventDefault();
        let nome = document.getElementById("nome").value;
        let idade = document.getElementById("idade").value;
        let isAluno = document.getElementById("aluno").value === "sim";

        resultadoElement.innerHTML = `
            <p>Nome: ${nome}</p>
            <p>Idade: ${idade}</p>
            <p>É aluno: ${isAluno ? 'Sim' : 'Não'}</p>
        `;
    });
});
