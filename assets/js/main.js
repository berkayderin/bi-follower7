// toggle menu
document.addEventListener('DOMContentLoaded', function () {
	const toggle = document.getElementById('header-toggle')
	const nav = document.getElementById('header-nav')
	const overlay = document.getElementById('overlay')
	const closeButton = document.querySelector('.header-logo-mobile .ri-close-fill')
	const dropdownIcon = document.querySelector('.dropdown a i.ri-arrow-down-s-line') // Doğrudan ikonu seç
	const dropdownMenu = document.querySelector('.dropdown .dropdown-menu') // Dropdown menüsü

	function closeNav() {
		nav.style.transform = 'translateX(-290px)' // Menüyü dışarı kaydır
		nav.addEventListener('transitionend', function handler() {
			nav.classList.remove('active') // Animasyon tamamlandığında active sınıfını kaldır
			nav.removeEventListener('transitionend', handler)
		})
		overlay.style.display = 'none'
	}

	toggle.addEventListener('click', function () {
		if (nav.classList.contains('active')) {
			closeNav()
		} else {
			nav.style.transform = 'translateX(0)' // Menüyü içeri kaydır
			nav.classList.add('active')
			overlay.style.display = 'block'
		}
	})

	overlay.addEventListener('click', closeNav)
	closeButton.addEventListener('click', closeNav)

	// Dropdown Toggle with the icon
	dropdownIcon.addEventListener('click', function (event) {
		event.preventDefault() // Linkin varsayılan davranışını önle
		dropdownMenu.classList.toggle('show') // 'show' sınıfını ekleyerek görünür yap veya kaldır
	})

	// İstenirse dışarıya tıklandığında menüyü kapat
	document.addEventListener('click', function (event) {
		if (
			!dropdownIcon.contains(event.target) &&
			!dropdownMenu.contains(event.target) &&
			dropdownMenu.classList.contains('show')
		) {
			dropdownMenu.classList.remove('show')
		}
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
	const toggleSwitches = document.querySelectorAll('.toggle-switch')
	toggleSwitches.forEach((toggleSwitch) => {
		toggleSwitch.addEventListener('click', function (event) {
			event.stopPropagation()
		})
	})
})

// copy to clipboard
function copyToClipboard() {
	const copyText = document.getElementById('coupon-input')
	copyText.select()
	copyText.setSelectionRange(0, 99999)
	navigator.clipboard.writeText(copyText.value)
}

// Heart icon toggle for each card
const heartIcons = document.querySelectorAll('.heart-icon')
heartIcons.forEach((icon) => {
	icon.addEventListener('click', function () {
		if (this.classList.contains('ri-heart-2-line')) {
			this.classList.remove('ri-heart-2-line')
			this.classList.add('ri-heart-2-fill')
		} else {
			this.classList.remove('ri-heart-2-fill')
			this.classList.add('ri-heart-2-line')
		}
	})
})

// FAQ Accordion
document.addEventListener('DOMContentLoaded', function () {
	const faqItems = document.querySelectorAll('.faq-item')

	faqItems.forEach((item) => {
		const question = item.querySelector('.faq-question')
		const answer = item.querySelector('.faq-answer')
		const icon = item.querySelector('.icon')

		question.addEventListener('click', () => {
			const isActive = item.classList.contains('active')
			faqItems.forEach((otherItem) => {
				if (otherItem !== item) {
					otherItem.classList.remove('active')
					otherItem.querySelector('.faq-answer').style.maxHeight = '0'
					otherItem.querySelector('.icon').textContent = '+'
				}
			})

			if (!isActive) {
				item.classList.add('active')
				answer.style.maxHeight = `${answer.scrollHeight}px`
				icon.textContent = '-'
				question.style.backgroundColor = ' #dfdbdb87'
			} else {
				item.classList.remove('active')
				answer.style.maxHeight = '0'
				icon.textContent = '+'
				question.style.backgroundColor = ' #fff'
			}
		})
	})
})
