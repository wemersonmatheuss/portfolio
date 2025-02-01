const downloadButton = document.querySelector(".button-download")

function downloadCv () {
    alert("Você deseja fazer o download do meu CV, logo mais você irá conseguir fazer o download!")
}

function toggleMenu() {
    var menu = document.getElementById("menuOpcoes");
    menu.classList.toggle("ativo"); // Adiciona/remove a classe "ativo"
}

// Fechar o menu ao clicar fora dele
document.addEventListener("click", function(event) {
    var menu = document.getElementById("menuOpcoes");
    var menuContainer = document.querySelector(".menu-responsivo");

    if (!menuContainer.contains(event.target)) {
        menu.classList.remove("ativo");
    }
});