// toggle menu
document.addEventListener('DOMContentLoaded', function () {
	const toggle = document.getElementById('header-toggle')
	const nav = document.getElementById('header-nav')
	const overlay = document.getElementById('overlay')

	toggle.addEventListener('click', function () {
		nav.classList.toggle('active')
		overlay.style.display = nav.classList.contains('active') ? 'block' : 'none'
	})

	overlay.addEventListener('click', function () {
		nav.classList.remove('active')
		overlay.style.display = 'none'
	})
})

// modals
document.addEventListener('DOMContentLoaded', function () {
	const buttons = document.querySelectorAll('.btn-orange')
	const modals = document.querySelectorAll('.modal')
	const closeButtons = document.querySelectorAll('.close')

	buttons.forEach((button) => {
		button.addEventListener('click', function () {
			const modalId = this.id.replace('-btn', '')
			const modal = document.getElementById(modalId)
			modal.style.display = 'block'
		})
	})

	closeButtons.forEach((closeButton) => {
		closeButton.addEventListener('click', function () {
			const modalId = this.getAttribute('data-modal')
			const modal = document.getElementById(modalId)
			modal.style.display = 'none'
		})
	})

	window.addEventListener('click', function (event) {
		modals.forEach((modal) => {
			if (event.target == modal) {
				modal.style.display = 'none'
			}
		})
	})
})

// kullanıcı menüsü
document.addEventListener('DOMContentLoaded', function () {
	const settingsButton = document.querySelector('.btn-orange-settings')
	const settingsMenu = settingsButton.querySelector('.settings-menu')

	settingsButton.addEventListener('click', function (event) {
		event.stopPropagation()
		settingsMenu.style.display = settingsMenu.style.display === 'block' ? 'none' : 'block'
	})

	document.addEventListener('click', function (event) {
		if (!settingsButton.contains(event.target)) {
			settingsMenu.style.display = 'none'
		}
	})
})

// toggle switch push
function activateToggle(element, isOn) {
	var toggleSwitch = element.parentNode
	var toggleOn = toggleSwitch.querySelector('.toggle-on')
	var toggleOff = toggleSwitch.querySelector('.toggle-off')

	if (isOn) {
		toggleOn.style.backgroundColor = '#46d3a8' // Açık rengi
		toggleOn.style.color = 'white'
		toggleOn.textContent = 'Açık'
		toggleOff.style.backgroundColor = '#fff' // Pasif rengi
		toggleOff.style.color = '#555'
		toggleOff.textContent = 'Kapat'
	} else {
		toggleOn.style.backgroundColor = '#fff' // Pasif rengi
		toggleOn.style.color = '#555'
		toggleOn.textContent = 'Aç'
		toggleOff.style.backgroundColor = '#d34646' // Kapalı rengi
		toggleOff.style.color = 'white'
		toggleOff.textContent = 'Kapalı'
	}
}

// mobile toggle switch click close
document.addEventListener('DOMContentLoaded', function () {
	const headerClose = document.querySelector('.header-logo-mobile .ri-close-fill')
	const nav = document.getElementById('header-nav')
	const overlay = document.getElementById('overlay')

	headerClose.addEventListener('click', function () {
		nav.classList.remove('active')
		overlay.style.display = 'none'
	})
})
