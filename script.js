const imgMenu = document.getElementById("icon-nav")
const menuItens = document.getElementById("menu-itens")

imgMenu.addEventListener("click", function() {
    if (menuItens.style.display === "block") {
        menuItens.style.display = "none";
    }else {
        menuItens.style.display = "block";
    }
});