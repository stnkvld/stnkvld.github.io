var menuTitles = document.querySelectorAll('.menu__title');
var menuBtn = document.querySelector('.header__btn-menu');
var menu = document.querySelector('.header__menu');

menuTitles.forEach(function(item) {
    item.addEventListener('click', function() {
        item.classList.toggle('menu__title--open');
    });
});

menuBtn.addEventListener('click', function() {
    menu.classList.toggle('header__menu--show');
});