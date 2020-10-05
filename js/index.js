'use strict'

var qualityControl = document.querySelector('.quality-control');
var writeUs = document.querySelector('.write-us');

var swiper = new Swiper('.swiper-container', {
    slidesPerView: 'auto',
    spaceBetween: 8,
});

window.addEventListener('scroll', function() {
    if (qualityControl.getBoundingClientRect().bottom - writeUs.getBoundingClientRect().bottom > -50) {
        writeUs.classList.add('write-us--quality');
    }
});