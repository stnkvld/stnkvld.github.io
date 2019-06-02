'use strict';

window.onload = function() {
	const dateOptions = {
		customDays: ['Вс', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб'],
		customMonths: ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'],
		startDay: 1,
		minDate: new Date(),
		formatter: (input, date, instance) => {
			const value = date.toLocaleDateString()
			input.value = value
		}
	}

	const bookingPickerStart = datepicker('.booking-form__datepicker[name="start-date"]', dateOptions)
	const bookingPickerEnd = datepicker('.booking-form__datepicker[name="end-date"]', dateOptions)

	const header = document.querySelector('.header')

	if (window.pageYOffset > 0) header.classList.add('header--sticky')

	window.addEventListener('scroll', function() {
		if (window.pageYOffset > 0) header.classList.add('header--sticky')
		else header.classList.remove('header--sticky')
	})

	const tabSwitches = document.querySelectorAll('.tabs__switch')
	tabSwitches.forEach(function(item) {
		item.addEventListener('click', function() {
			let activeTabSwitch = document.querySelector('.tabs__switch--active')			
			let activeTab = document.querySelector('.tabs__item--active')
			activeTabSwitch.classList.remove('tabs__switch--active')
			activeTab.classList.remove('tabs__item--active')

			activeTab.querySelector('.tabs__text-info').classList.remove('short-from-right')

			let tabId = item.getAttribute('data-tab-id')
			let tab = document.querySelector('.tabs__item[data-tab-id="' + tabId + '"]')
			item.classList.add('tabs__switch--active')
			tab.classList.add('tabs__item--active')

			tab.querySelector('.tabs__text-info').classList.add('short-from-right')
		})
	})

	const btnMobileMenu = document.querySelector('.header__mobile')
	const headerMenu = document.querySelector('.header__menu')
	btnMobileMenu.addEventListener('click', function() {
		headerMenu.classList.toggle('header__menu--active')
	})
}