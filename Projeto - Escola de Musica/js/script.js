let menuIcon = document.getElementById("menu-icon");
let icons = document.querySelector('.icons');

const isPageOne = window.location.pathname === '/painel'; 
const isPageTwo = window.location.pathname === '/configuracoes'; 

function toggleIcons() {
    const mediaQuery = isPageOne ? window.matchMedia('(max-width: 620px)') : window.matchMedia('(max-width: 877px)'); 

    if (mediaQuery.matches) {
        icons.style.visibility = icons.style.visibility === "visible" ? "hidden" : "visible";
    } else {
        icons.style.visibility = "visible";
    }
}

menuIcon.addEventListener('click', toggleIcons);

window.addEventListener('resize', function() {
    const mediaQuery = isPageOne ? window.matchMedia('(max-width: 620px)') : window.matchMedia('(max-width: 877px)'); 

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
