// toggle menu
document.addEventListener('DOMContentLoaded', function () {
	const toggle = document.getElementById('header-toggle')
	const nav = document.getElementById('header-nav')
	const overlay = document.getElementById('overlay')

	toggle.addEventListener('click', function () {
		nav.classList.toggle('active')
		overlay.style.display = nav.classList.contains('active') ? 'block' : 'none'
	})

	// Close the nav and hide overlay when clicking on the overlay
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
		event.stopPropagation() // Olayın daha üst seviyeye çıkmasını önler
		settingsMenu.style.display = settingsMenu.style.display === 'block' ? 'none' : 'block'
	})

	document.addEventListener('click', function (event) {
		if (!settingsButton.contains(event.target)) {
			settingsMenu.style.display = 'none'
		}
	})
})
