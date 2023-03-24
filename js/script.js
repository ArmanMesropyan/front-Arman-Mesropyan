let burger = document.querySelector('.P-burger')
let closeBurger = document.querySelector('.P-close')
let modal = document.querySelector('.P-modal')
burger.addEventListener('click', function () {
    modal.classList.add('P-modal-active')
})
closeBurger.addEventListener('click', function () {
    modal.classList.remove('P-modal-active')
})
modal.addEventListener('click', function (e) {
    if (e.target == modal) {
        modal.classList.remove('P-modal-active')
    }
})



window.addEventListener("scroll", function () {
    let menu = document.querySelector(".P-header-menu-lists-wrapper");
    let scrollPosition = window.scrollY;

    if (scrollPosition >= 200) {
        menu.classList.add("menu-hidden");
    } else {
        menu.classList.remove("menu-hidden");
    }
});

window.addEventListener("scroll", function () {
    let menu = document.querySelector(".P-header-menu-lists-wrapper");
    let scrollPosition = window.scrollY;
    if (scrollPosition == 0) {
        menu.classList.remove("menu-hidden");
    }
});