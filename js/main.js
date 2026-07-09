// ============================================
// АНТИСПАМ + reCAPTCHA v3
// ============================================
document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('contactForm')
  if (!form) return

  const formLoadTime = Date.now()

  // Создаём honeypot-поле
  const honeypot = document.createElement('input')
  honeypot.type = 'text'
  honeypot.name = 'website_url'
  honeypot.className = 'oh-pot'
  honeypot.tabIndex = -1
  honeypot.autocomplete = 'off'
  honeypot.setAttribute('aria-hidden', 'true')
  form.appendChild(honeypot)

  // Единый обработчик отправки формы
  form.addEventListener('submit', e => {
    // 1. Проверка honeypot
    if (honeypot.value !== '') {
      e.preventDefault()
      return false
    }

    // 2. Проверка времени заполнения (защита от ботов)
    const elapsedSeconds = (Date.now() - formLoadTime) / 1000
    if (elapsedSeconds < 3) {
      e.preventDefault()
      return false
    }

    // 3. Блокируем отправку для генерации reCAPTCHA токена
    e.preventDefault()

    // 4. Ждём загрузки reCAPTCHA и генерируем токен
    grecaptcha.ready(function () {
      grecaptcha
        .execute('6LfkLEstAAAAAKkv7QIYWtkVhCVJp0SjQ7krY22i', {
          action: 'submit'
        })
        .then(function (token) {
          // Записываем токен в скрытое поле
          document.getElementById('recaptcha_token').value = token
          // Отправляем форму (submit() НЕ вызывает обработчик повторно)
          form.submit()
        })
        .catch(function (error) {
          console.error('reCAPTCHA error:', error)
          // В случае ошибки всё равно отправляем (или покажи сообщение)
          form.submit()
        })
    })
  })
})