

let mainNavLinks = document.querySelectorAll(".ul-menu li a");
let mainNavLi = document.querySelectorAll(".ul-menu li");
let mainSections = document.querySelectorAll(".wrapper-content section");

let lastId;
let cur = [];


mainNavLi.forEach(item => {
    console.log(mainNavLi);
    item.addEventListener('click', e => {
        for(let i=0; i< mainNavLi.length; i++) {
            mainNavLi[i].classList.remove('flex-1');
        }
        item.classList.add('flex-1');
    })
});

window.addEventListener("scroll", event => {
    let fromTop = window.scrollY;
    mainNavLinks.forEach(link => {
        let section = document.querySelector(link.hash);
        if (
            section.offsetTop <= fromTop + 50 &&
            section.offsetTop + section.offsetHeight > fromTop + 50
        ) {
            link.parentNode.classList.add('flex-1');
        } else {
            link.parentNode.classList.remove('flex-1');
        }
    });
});




