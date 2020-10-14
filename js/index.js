'use strict'

const roundTabs = document.querySelectorAll('.round-tabs__item');
let roundTabsFirst = Math.ceil(roundTabs.length / 2) - 1;
const roundTabsLength = roundTabs.length;
const qualityControl = document.querySelector('.quality-control');
const qualityWriteUs = qualityControl.querySelector('.write-us');
const footerWriteUs = document.querySelector('.footer__write-us');

if (document.body.clientWidth < 1024) {
    var Visible = function(target) {
        // Все позиции элемента
        var targetPosition = {
                top: window.pageYOffset + target.getBoundingClientRect().top,
                left: window.pageXOffset + target.getBoundingClientRect().left,
                right: window.pageXOffset + target.getBoundingClientRect().right,
                bottom: window.pageYOffset + target.getBoundingClientRect().bottom
            },
            // Получаем позиции окна
            windowPosition = {
                top: window.pageYOffset,
                left: window.pageXOffset,
                right: window.pageXOffset + document.documentElement.clientWidth,
                bottom: window.pageYOffset + document.documentElement.clientHeight
            };

        if (targetPosition.bottom > windowPosition.top && // Если позиция нижней части элемента больше позиции верхней чайти окна, то элемент виден сверху
            targetPosition.top < windowPosition.bottom && // Если позиция верхней части элемента меньше позиции нижней чайти окна, то элемент виден снизу
            targetPosition.right > windowPosition.left && // Если позиция правой стороны элемента больше позиции левой части окна, то элемент виден слева
            targetPosition.left < windowPosition.right) { // Если позиция левой стороны элемента меньше позиции правой чайти окна, то элемент виден справа
            // Если элемент полностью видно, то запускаем следующий код
            qualityWriteUs.classList.add('write-us--show');
            if (footerWriteUs.getBoundingClientRect().top >= qualityWriteUs.getBoundingClientRect().top) {
                qualityWriteUs.classList.remove('write-us--show');
                footerWriteUs.classList.add('write-us--show');
            } else {
                qualityWriteUs.classList.add('write-us--show');
                footerWriteUs.classList.remove('write-us--show');
            }
        }
    };

    window.addEventListener('scroll', function() {
        Visible(qualityWriteUs);
    });

    // А также запустим функцию сразу. А то вдруг, элемент изначально видно
    Visible(qualityWriteUs);
}

roundTabs[roundTabsFirst].querySelector('.round-tabs__radio').checked = true;
roundTabs[roundTabsFirst].style.top = 0;
roundTabs[roundTabsFirst].style.left = '50%';

roundTabs[roundTabsFirst - 1].style.top = '12%';
roundTabs[roundTabsFirst - 1].style.left = 'calc(50% - 6.125rem)';

roundTabs[roundTabsFirst + 1].style.top = '12%';
roundTabs[roundTabsFirst + 1].style.left = 'calc(50% + 6.125rem)';

for (let i = roundTabsFirst - 2; i >= 0; --i) {
    const top = (roundTabsFirst - 1 - i) * 4.5;
    const left = (roundTabsFirst - i) * 4.5 + (roundTabsFirst - i - 1) * 1.125 + 1.625;

    roundTabs[i].style.top = 'calc(12% + ' + top + 'rem)';
    roundTabs[i].style.left = 'calc(50% - ' + left + 'rem)';
}

for (let i = roundTabsFirst + 2; i < roundTabsLength; ++i) {
    const top = (i - roundTabsFirst - 1) * 4.5;
    const left = (i - roundTabsFirst) * 4.5 + (i - roundTabsFirst - 1) * 1.125 + 1.625;

    roundTabs[i].style.top = 'calc(12% + ' + top + 'rem)';
    roundTabs[i].style.left = 'calc(50% +  ' + left + 'rem)';
}

roundTabs.forEach(function(item) {
    item.querySelector('.round-tabs__radio').addEventListener('change', function() {
        const itemIdx = Array.prototype.indexOf.call(roundTabs, item);
        let itemInc = itemIdx;
        let operationInc = 0;

        const showContent = document.querySelector('.round-tabs__content--show');
        const newShowContent = document.getElementById(this.getAttribute('data-content-id'));

        showContent.classList.remove('round-tabs__content--show');
        newShowContent.classList.add('round-tabs__content--show');

        // вращение по часовой стрелке
        if (itemIdx < roundTabsFirst) {
            while (itemInc !== roundTabsFirst) {
                for (let i = 0; i < roundTabsLength; ++i) {
                    if (i === roundTabsLength - 1) {
                        const topLastItem = (roundTabsLength - roundTabsFirst + operationInc - 1) * 4.5;
                        const leftLastItem = (roundTabsLength - roundTabsFirst + operationInc) * 4.5 + (roundTabsLength - roundTabsFirst - 1) * 1.125 + 1.625;
                        roundTabs[roundTabsLength - 1].style.top = 'calc(12% + ' + topLastItem + 'rem)';
                        roundTabs[roundTabsLength - 1].style.left = 'calc(50% + ' + leftLastItem + 'rem)';
                    } else {
                        roundTabs[i].style.top = roundTabs[i + 1].style.top;
                        roundTabs[i].style.left = roundTabs[i + 1].style.left;
                    }
                }
                operationInc++;
                itemInc++;
            }
            // вращение против часовой стрелке
        } else {
            while (itemInc !== roundTabsFirst) {
                for (let i = roundTabsLength - 1; i >= 0; --i) {
                    if (i === 0) {
                        const topLastItem = (roundTabsFirst + operationInc) * 4.5;
                        const leftLastItem = (roundTabsFirst + operationInc + 1) * 4.5 + roundTabsFirst * 1.125 + 1.625;
                        roundTabs[i].style.top = 'calc(12% + ' + topLastItem + 'rem)';
                        roundTabs[i].style.left = 'calc(50% - ' + leftLastItem + 'rem)';
                    } else {
                        roundTabs[i].style.top = roundTabs[i - 1].style.top;
                        roundTabs[i].style.left = roundTabs[i - 1].style.left;
                    }
                }
                operationInc++;
                itemInc--;
            }
        }
        roundTabsFirst = itemIdx;
    });
});

const stocksSlider = new Swiper('.stocks-slider', {
    slidesPerView: 'auto',
    spaceBetween: 8,
    breakpoints: {
        1024: {
            spaceBetween: 16
        }
    }
});

const servicesSlider = new Swiper('.services-slider', {
    slidesPerView: 'auto',
    spaceBetween: 48,
});