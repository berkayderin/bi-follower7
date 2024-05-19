document.addEventListener('DOMContentLoaded', function () {
	const faqItems = document.querySelectorAll('.faq-item')

	// Her bir FAQ öğesi için event listener ekle
	faqItems.forEach((item) => {
		const question = item.querySelector('.faq-question')
		const answer = item.querySelector('.faq-answer')
		const icon = item.querySelector('.icon')

		question.addEventListener('click', () => {
			const isActive = item.classList.contains('active')

			// Diğer tüm cevapları kapat ve iconları resetle
			faqItems.forEach((otherItem) => {
				if (otherItem !== item) {
					otherItem.classList.remove('active')
					otherItem.querySelector('.faq-answer').style.maxHeight = '0'
					otherItem.querySelector('.icon').textContent = '+'
				}
			})

			if (!isActive) {
				// Tıklanan öğeyi aktifleştir
				item.classList.add('active')
				answer.style.maxHeight = `${answer.scrollHeight}px`
				icon.textContent = '-'
			} else {
				// Tıklanan öğeyi deaktifleştir
				item.classList.remove('active')
				answer.style.maxHeight = '0'
				icon.textContent = '+'
			}
		})
	})
})
