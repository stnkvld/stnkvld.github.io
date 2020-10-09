'use strict'

const roundTabs = document.querySelectorAll('.round-tabs__item');
let roundTabsFirst = Math.ceil(roundTabs.length / 2) - 1;
const roundTabsLength = roundTabs.length;
const qualityControl = document.querySelector('.quality-control');
const writeUs = document.querySelector('.write-us');

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

window.addEventListener('scroll', function() {
    if (qualityControl.getBoundingClientRect().bottom - writeUs.getBoundingClientRect().bottom > -50) {
        writeUs.classList.add('write-us--quality');
    }
});