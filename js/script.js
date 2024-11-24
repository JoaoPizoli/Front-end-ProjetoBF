let menuIcon = document.getElementById("menu-icon");
let icons = document.querySelector('.icons');

const path = window.location.pathname;
const isPageOne = path === '/painel';
const isPageTwo = path === '/configuracoes';
const isEditarAluno = path === '/editar-aluno.html';
const isEditarProfessor = path === '/editar-professor.html';

function toggleIcons() {
    let mediaQuery;
    if (isPageOne || isEditarAluno || isEditarProfessor) {
        mediaQuery = window.matchMedia('(max-width: 620px)');
    } else if (isPageTwo) {
        mediaQuery = window.matchMedia('(max-width: 877px)');
    } else {
        mediaQuery = window.matchMedia('(max-width: 620px)'); // Padrão para outras páginas
    }

    if (mediaQuery.matches) {
        icons.style.visibility = icons.style.visibility === "visible" ? "hidden" : "visible";
    } else {
        icons.style.visibility = "visible";
    }
}

menuIcon.addEventListener('click', toggleIcons);

window.addEventListener('resize', function() {
    let mediaQuery;
    if (isPageOne || isEditarAluno || isEditarProfessor) {
        mediaQuery = window.matchMedia('(max-width: 620px)');
    } else if (isPageTwo) {
        mediaQuery = window.matchMedia('(max-width: 877px)');
    } else {
        mediaQuery = window.matchMedia('(max-width: 620px)'); // Padrão para outras páginas
    }

    if (!mediaQuery.matches) {
        icons.style.visibility = "visible"; 
    }
});


let boxes = document.querySelectorAll(".box");

boxes.forEach(box => {
    box.addEventListener('click', function() {
        let info = box.querySelector(".info");
        if (box.style.height === "8vh") {
            info.style.visibility = "visible";
            box.style.height = "25vh";
        } else {
            info.style.visibility = "hidden";
            box.style.height = "8vh";
        }
    });
});
