const imgMenu = document.getElementById("icon-nav")
const menuItens = document.getElementById("menu-itens")

imgMenu.addEventListener("click", function() {
    if (menuItens.style.display === "none") {
        menuItens.style.display = "block";
    }else {
        menuItens.style.display = "none";
    }
});
