// Função pata abir o repositorio do projeto da m10tech
function openRepoProjectOne() {
    window.open("https://github.com/wemersonmatheuss/m10tech", "_blank")
}

// Função para abrir o site do Apito de ouro
function openWindowProjectOne() {
    window.open("https://m10tech.vercel.app/", "_blank")
}

// Função para abrir o repositorio do projeto W.M Freelancer
function openRepoProjectTwo() {
    window.open("https://github.com/wemersonmatheuss/wm-freelancer", "_blanck")
}

// Função para abrir o projeto W.M Freelancer
function openWindowProjectTwo() {
    window.open("https://wm-freelancer.vercel.app/", "_blank")
}

// Função para abir o repositorio do projeto LinkBio
function openRepoProjectThree() {
    window.open("https://github.com/wemersonmatheuss/link-bio", "_blank")
}

// Função para abrir o projeto LinkBio
function openWindowProjectThree() {
    window.open("https://link-bio-vt91.vercel.app/", "_blank")
}

// Função para abir o repositorio do projeto Sabor & Arte
function openRepoProjectFour() {
    window.open("https://github.com/wemersonmatheuss/restaurante-sabor-e-arte", "_blank")
}

// Função para abrir o projeto Sabor&Arte
function openWindowProjectFour() {
    window.open("https://restaurante-sabor-e-arte-mauve.vercel.app/", "_blank")
}

// Função para quando apertar no botao de contato descer para a sessao de contato
function contact() {
    document.getElementById("contact").scrollIntoView({ behavior: "smooth"})
}


const menu = document.querySelector(".menu-icon-mobile")
const linksMenu = document.querySelector(".nav-quite")

const x = document.querySelector(".x-mobile")

//  Função para qando apetar na imagem do menu aparecer as opções do menu
menu.addEventListener("click", () => {

    if (linksMenu.style.display === "none") {
        linksMenu.style.display = "block"
        x.style.display = "block"
    }
    else {
        linksMenu.style.display = "none"
        x.style.display = "none"
    }
})

x.addEventListener("click", () => {
    linksMenu.style.display = "none"
    x.style.display = "none"
})



linksMenu.addEventListener("click", () => {
    linksMenu.style.display = "none"
    x.style.display = "none"
   
})