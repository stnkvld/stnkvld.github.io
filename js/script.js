'use strict';

var menuTitles = document.querySelectorAll('.menu__title');
var menuItems = document.querySelectorAll('.menu__item');
var menuBtn = document.querySelector('.header__btn-menu');
var header = document.querySelector('.header');
var citySelector = document.querySelector('.city-selector__city');
var citySelectorClose = document.querySelector('.city-selector-close');
var pricesBtns = document.querySelectorAll('.prices-list__top');

menuTitles.forEach(function(item) {
    item.addEventListener('click', function() {
        menuItems.forEach(function(menuItem) {
            menuItem.classList.remove('menu__item--open');
        });
        item.closest('.menu__item').classList.toggle('menu__item--open');
    });
});

menuBtn.addEventListener('click', function() {
    header.classList.toggle('header--menu-show');
});

citySelector.addEventListener('click', function() {
    header.classList.add('header--city-menu-show');
});

citySelectorClose.addEventListener('click', function() {
    header.classList.remove('header--city-menu-show');
});

pricesBtns.forEach(function(item) {
    item.addEventListener('click', function() {
        item.closest('.prices-list__item').classList.toggle('prices-list__item--open');
    });
});