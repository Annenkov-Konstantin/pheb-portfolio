import { portfolioItems } from './data/portfolio-data.js'

// ============================================
// ИНИЦИАЛИЗАЦИЯ TILT-ЭФФЕКТА
// ============================================

$(document).ready(function () {
  $('.tilt').tilt({
    maxTilt: 20,
    perspective: 1000,
    easing: 'cubic-bezier(.03,.98,.52,.99)',
    scale: 1,
    speed: 300,
    transition: true,
    axis: null,
    reset: false,
    glare: false,
    maxGlare: 1
  })
})

// ============================================
// ПРЕСЕТЫ МОДАЛЬНЫХ ОКОН
// ============================================

/*
 * Предустановленные конфигурации для типовых модальных окон
 */
const MODAL_PRESETS = {
  success: {
    icon: 'fa-solid fa-circle-check',
    iconClass: 'icon-success'
  },
  error: {
    icon: 'fa-solid fa-exclamation-triangle',
    iconClass: 'icon-error'
  },
  info: {
    icon: 'fa-solid fa-circle-info',
    iconClass: 'icon-info'
  },
  warning: {
    icon: 'fa-solid fa-triangle-exclamation',
    iconClass: 'icon-warning'
  }
}

// ============================================
// МОДАЛЬНЫЕ ОКНА ЧЕРЕЗ TEMPLATE
// ============================================

/**
 * Показывает модальное окно с динамическим содержимым
 * @param {Object} config - Конфигурация модального окна
 * @param {string} config.title - Заголовок окна
 * @param {string} config.icon - CSS класс иконки Font Awesome (например, "fa-solid fa-circle-check")
 * @param {string} config.iconClass - Дополнительный класс для цвета (например, "icon-success")
 * @param {string} config.text - Основной текст
 * @param {string} [config.links] - HTML со ссылками (опционально)
 */
function showModal (config) {
  const template = document.getElementById('modalTemplate')
  if (!template) return
  // Сохраняем элемент, который открыл модалку (для возврата фокуса)
  const triggerElement = document.activeElement
  // Клонируем содержимое шаблона
  const modalClone = template.content.cloneNode(true)

  // Заполняем данные
  const title = modalClone.querySelector('[data-modal-title]')
  const icon = modalClone.querySelector('[data-modal-icon]')
  const text = modalClone.querySelector('[data-modal-text]')
  const links = modalClone.querySelector('[data-modal-links]')

  if (title) title.textContent = config.title

  if (icon) {
    // Очищаем старые классы и добавляем новые
    icon.className = `${config.icon} fa-4x mb-4`
    if (config.iconClass) {
      icon.classList.add(config.iconClass)
    }
  }

  if (text) text.textContent = config.text

  if (links && config.links) {
    links.innerHTML = config.links
  } else if (links) {
    links.remove() // Удаляем контейнер, если ссылок нет
  }

  // Получаем элемент модалки ДО добавления в DOM
  const modalElement = modalClone.querySelector('.modal')

  // Добавляем напрямую в body (без обёртки!)
  document.body.appendChild(modalClone)

  // Инициализируем Bootstrap Modal
  const modal = new bootstrap.Modal(modalElement)
  modal.show()

  // Убираем фокус ДО закрытия модалки
  modalElement.addEventListener('hide.bs.modal', () => {
    // Снимаем фокус с активного элемента (кнопки закрытия)
    // ДО того, как Bootstrap добавит aria-hidden
    if (
      document.activeElement &&
      modalElement.contains(document.activeElement)
    ) {
      document.activeElement.blur()
    }
  })

  // После закрытия возвращаем фокус и удаляем модалку
  modalElement.addEventListener('hidden.bs.modal', () => {
    // Возвращаем фокус к элементу, который открыл модалку
    if (triggerElement && typeof triggerElement.focus === 'function') {
      // Небольшая задержка, чтобы DOM успел обновиться
      setTimeout(() => triggerElement.focus(), 50)
    }

    // Удаляем модалку из DOM
    modalElement.remove()
  })
}

// ============================================
// ОБРАБОТКА ПАРАМЕТРОВ URL
// ============================================

document.addEventListener('DOMContentLoaded', function () {
  const urlParams = new URLSearchParams(window.location.search)
  const sentStatus = urlParams.get('sent')

  if (sentStatus === 'success') {
    showModal({
      ...MODAL_PRESETS.success,
      title: 'Сообщение отправлено',
      text: 'Спасибо за ваше обращение! Я получил ваше сообщение и свяжусь с вами в ближайшее время.'
    })
    window.history.replaceState({}, document.title, window.location.pathname)
  } else if (sentStatus === 'error') {
    showModal({
      ...MODAL_PRESETS.error,
      title: 'Ошибка отправки',
      text: 'К сожалению, не удалось отправить сообщение. Пожалуйста, свяжитесь со мной напрямую:',
      links: `
                <p class="mb-4">
                    <a href="mailto:pheb@list.ru"><i class="fa-solid fa-envelope me-2"></i><span class="nav-link-text nav-link-modal-text">pheb@list.ru</span><span class="sr-only">Написать на
                        имейл</span></a><br />
                    <a href="https://t.me/Knfrei" target="_blank" rel="noopener noreferrer"><i class="fa-solid fa-paper-plane me-2"></i><span class="nav-link-text nav-link-modal-text">Telegram: @Knfrei</span><span class="sr-only">Написать в
                        Telegram</span></a>
                </p>
            `
    })
    window.history.replaceState({}, document.title, window.location.pathname)
  }
})

// ============================================
// ПЛАВНАЯ ПРОКРУТКА ПО ЯКОРЯМ
// ============================================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    const href = this.getAttribute('href')
    if (href === '#' || href.length < 2) return

    const target = document.querySelector(href)
    if (target) {
      e.preventDefault()
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      })
    }
  })
})

// ============================================
// РЕНДЕРИНГ ПОРТФОЛИО
// ============================================

/**
 * Рендерит карточки портфолио из массива данных
 */
function renderPortfolioGrid () {
  const grid = document.getElementById('portfolioGrid')
  const template = document.getElementById('portfolioCardTemplate')

  if (!grid || !template) return

  // НЕ очищаем grid полностью — первое изображение уже в HTML
  // Удаляем только skeleton-загрузчики
  const skeletons = grid.querySelectorAll('.portfolio-skeleton')
  skeletons.forEach(skeleton => skeleton.remove())

  // Рендерим карточки, начиная со ВТОРОЙ (первая уже в HTML)
  portfolioItems.slice(1).forEach((item, index) => {
    const clone = template.content.cloneNode(true)
    const card = clone.querySelector('.portfolio-item')
    const img = clone.querySelector('img')

    card.setAttribute('data-portfolio-id', item.id)

    img.src = item.imageSmall
    img.srcset = `${item.imageSmall} 400w, ${item.imageLarge} 800w`
    img.sizes = '(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 388px'
    img.alt = item.alt
    img.width = 400
    img.height = 250

    grid.appendChild(clone)
  })
}

/**
 * Показывает модальное окно проекта по его id
 * @param {string} projectId - id проекта из массива portfolioItems
 */
function showPortfolioModal (projectId) {
  const project = portfolioItems.find(item => item.id === projectId)
  if (!project) return

  const template = document.getElementById('portfolioModalTemplate')
  if (!template) return

  // Сохраняем элемент, который открыл модалку (для возврата фокуса)
  const triggerElement = document.activeElement

  const modalClone = template.content.cloneNode(true)

  // Заполняем базовые данные
  modalClone.querySelector('[data-modal-title]').textContent = project.title

  const icon = modalClone.querySelector('[data-modal-icon]')
  icon.className = 'divider-custom-icon'
  icon.classList.add(...project.modalIcon.split(' '))

  const image = modalClone.querySelector('[data-modal-image]')
  image.src = project.imageLarge // Используем большое изображение для модалки
  image.alt = project.alt
  image.width = 800
  image.height = 500

  modalClone.querySelector('[data-modal-description]').textContent =
    project.description

  const tech = modalClone.querySelector('[data-modal-technologies]')
  tech.innerHTML = `<strong>Технологии:</strong> ${project.technologies}`

  // ============================================
  // ЛОГИКА ДЛЯ ССЫЛОК (GitHub и Сайт)
  // ============================================

  const githubLink = modalClone.querySelector('[data-modal-link]')
  if (githubLink) {
    if (project.githubUrl && project.githubUrl.trim() !== '') {
      githubLink.href = project.githubUrl
      githubLink.target = '_blank'
      githubLink.rel = 'noopener noreferrer'
      githubLink.innerHTML = `
        <i class="fa-brands fa-github me-2"></i>
        <span class="nav-link-text nav-link-modal-text">Перейти на GitHub</span>
        <span class="sr-only">Открыть репозиторий на GitHub</span>
      `
    } else {
      githubLink.closest('p').remove()
    }
  }

  const siteLink = modalClone.querySelector('[data-modal-url]')
  if (siteLink) {
    if (project.url && project.url.trim() !== '') {
      siteLink.href = project.url
      siteLink.target = '_blank'
      siteLink.rel = 'noopener noreferrer'
      siteLink.innerHTML = `
        <i class="fa-solid fa-globe me-2"></i>
        <span class="nav-link-text nav-link-modal-text">Перейти на сайт</span>
        <span class="sr-only">Открыть сайт проекта</span>
      `
    } else {
      siteLink.closest('p').remove()
    }
  }

  // ============================================

  const modalElement = modalClone.querySelector('.modal')
  document.body.appendChild(modalClone)

  const modal = new bootstrap.Modal(modalElement)
  modal.show()

  // Убираем фокус ДО закрытия модалки
  modalElement.addEventListener('hide.bs.modal', () => {
    // Снимаем фокус с активного элемента (кнопки закрытия)
    // ДО того, как Bootstrap добавит aria-hidden
    if (
      document.activeElement &&
      modalElement.contains(document.activeElement)
    ) {
      document.activeElement.blur()
    }
  })

  // После закрытия возвращаем фокус и удаляем модалку
  modalElement.addEventListener('hidden.bs.modal', () => {
    // Возвращаем фокус к элементу, который открыл модалку
    if (triggerElement && typeof triggerElement.focus === 'function') {
      // Небольшая задержка, чтобы DOM успел обновиться
      setTimeout(() => triggerElement.focus(), 50)
    }

    // Удаляем модалку из DOM
    modalElement.remove()
  })
}

// ============================================
// ИНИЦИАЛИЗАЦИЯ ПОРТФОЛИО
// ============================================

document.addEventListener('DOMContentLoaded', function () {
  // 1. Сначала отрисовывается первое изображение (уже в HTML)

  // 2. Потом, после отрисовки, рендерим остальные карточки
  // Рендерим карточки, когда браузер свободен
  if ('requestIdleCallback' in window) {
    requestIdleCallback(() => {
      renderPortfolioGrid()
    })
  } else {
    setTimeout(() => {
      renderPortfolioGrid()
    }, 1)
  }

  // 2. Навешиваем обработчик клика на карточки (делегирование)
  const grid = document.getElementById('portfolioGrid')
  if (grid) {
    grid.addEventListener('click', function (e) {
      const card = e.target.closest('.portfolio-item')
      if (!card) return

      const projectId = card.getAttribute('data-portfolio-id')
      showPortfolioModal(projectId)
    })
  }
})

// ============================================
// ПЕРЕЗАПУСК АНИМАЦИИ ПРИ ПЕРЕХОДЕ МЕЖДУ СТРАНИЦАМИ
// ============================================

document.addEventListener('DOMContentLoaded', () => {
  document.body.classList.add('loaded')
})

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