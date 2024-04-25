let cores = ["red", "green", "blue"];

let container = document.getElementById("array-container");

cores.forEach(cor => {
    let div = document.createElement("div");
    div.classList.add("cor");
    div.style.backgroundColor = cor;

    div.addEventListener("click", function() {
        document.body.style.backgroundColor = cor;
    });
    container.appendChild(div);
});
