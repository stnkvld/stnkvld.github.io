window.onload = function() {
	const bookingPicker = datepicker('.booking-form__datepicker', {
		customDays: ['Вс', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб'],
		customMonths: ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'],
		startDay: 1,
		minDate: new Date(),
		formatter: (input, date, instance) => {
			const value = date.toLocaleDateString()
			input.value = value
		}
	})

	const header = document.querySelector('.header')

	if (window.pageYOffset > 0) header.classList.add('header--sticky')

	window.onscroll = function() {
		if (window.pageYOffset > 0) header.classList.add('header--sticky')
		else header.classList.remove('header--sticky')
	}
}