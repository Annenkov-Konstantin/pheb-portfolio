/**
 * Данные проектов портфолио
 * Все проекты хранятся здесь, отдельно от логики отображения
 */

export const portfolioItems = [
  {
    id: 'web-larek',
    title: 'Web-ларёк',
    imageSmall: 'assets/img/portfolio/webp/web_larek-400.webp',
    imageLarge: 'assets/img/portfolio/webp/web_larek-800.webp',
    imageWidth: 800,
    imageHeight: 500,
    alt: 'Web-ларёк — интернет-магазин на TypeScript',
    modalIcon: 'fa-solid fa-store',
    description:
      'SPA интернет-магазин на TypeScript по паттерну MVP с событийной архитектурой. Задеплоен на GitHub Pages.',
    technologies:
      'TypeScript, MVP Pattern, Event Architecture, Custom Validation',
    githubUrl: 'https://github.com/Annenkov-Konstantin/web-larek-frontend',
    url: 'https://annenkov-konstantin.github.io/web-larek-frontend/'
  },
  {
    id: 'stellar-burger',
    title: 'Stellar Burger',
    imageSmall: 'assets/img/portfolio/webp/stellar_burgers-400.webp',
    imageLarge: 'assets/img/portfolio/webp/stellar_burgers-800.webp',
    imageWidth: 800,
    imageHeight: 500,
    alt: 'Stellar Burger — React + Redux Toolkit',
    modalIcon: 'fa-solid fa-burger',
    description: 'React + Redux Toolkit + WebSocket + JWT-авторизация.',
    technologies: 'React, Redux Toolkit, WebSocket, JWT, API Integration',
    githubUrl: 'https://github.com/Annenkov-Konstantin/stellar-burgers',
    url: 'https://annenkov-konstantin.github.io/stellar-burgers/'
  },
  {
    id: 'mesto-project',
    title: 'Место',
    imageSmall: 'assets/img/portfolio/webp/mesto-400.webp',
    imageLarge: 'assets/img/portfolio/webp/mesto-800.webp',
    imageWidth: 800,
    imageHeight: 500,
    alt: 'Проект Место — SPA с карточками мест и REST API',
    modalIcon: 'fa-solid fa-map-location-dot',
    description:
      'Интерактивное SPA на чистом JavaScript с интеграцией REST API и кастомной валидацией форм. Реализованы добавление карточек с фотографиями, лайки, редактирование профиля, загрузка аватара и модальные окна через <template>. Задеплоен на GitHub Pages.',
    technologies:
      'Vanilla JavaScript (ES6+), HTML5, CSS3, БЭМ, Webpack, REST API, Promise/async-await, Custom Validation',
    githubUrl: 'https://github.com/Annenkov-Konstantin/mesto-project-ff',
    url: 'https://annenkov-konstantin.github.io/mesto-project-ff/'
  },
  {
    id: 'slozhno-sosredotochitsya',
    title: 'Сложно сосредоточиться',
    imageSmall: 'assets/img/portfolio/webp/slozhno_sosredotochitsya-400.webp',
    imageLarge: 'assets/img/portfolio/webp/slozhno_sosredotochitsya-800.webp',
    imageWidth: 800,
    imageHeight: 500,
    alt: 'Сложно сосредоточиться — адаптивная статья с тремя темами оформления',
    modalIcon: 'fa-solid fa-brain', // Иконка мозга (тема концентрации)
    description:
      'Адаптивная одностраничная статья о концентрации внимания в неоновом стиле. Реализовано три темы оформления (светлая, тёмная, автоматическая) с сохранением выбора в localStorage, мозаичная галерея изображений на CSS Grid и адаптивная типографика через clamp(). Задеплоен на GitHub Pages.',
    technologies:
      'HTML5, CSS3 (Grid, Flexbox, Custom Properties), Vanilla JavaScript, IBM Plex Mono, prefers-color-scheme, localStorage',
    githubUrl:
      'https://github.com/Annenkov-Konstantin/slozhno-sosredotochitsya-fd',
    url: 'https://annenkov-konstantin.github.io/slozhno-sosredotochitsya-fd/'
  },
  {
    id: 'speech-service',
    title: 'Speech Yandex-API Service',
    imageSmall: 'assets/img/portfolio/webp/speech_service-400.webp',
    imageLarge: 'assets/img/portfolio/webp/speech_service-800.webp',
    imageWidth: 800,
    imageHeight: 500,
    alt: 'Speech Service — генерация аудио из текста на PHP',
    modalIcon: 'fa-solid fa-microphone-lines',
    description:
      'Веб-сервис для синтеза речи (Text-to-Speech) на базе Yandex SpeechKit. Реализована система регистрации пользователей, личный кабинет с историей генераций и возможность управления библиотекой аудиофайлов.',
    technologies:
      'PHP, MySQL, Vanilla JavaScript, Yandex Cloud API, Session Auth, Server-side File Storage',
    githubUrl: '',
    url: 'https://pheb.ru/speech_service/'
  },
  {
    id: 'bookmark-service',
    title: 'Bookmark Service',
    imageSmall: 'assets/img/portfolio/webp/bookmark-400.webp',
    imageLarge: 'assets/img/portfolio/webp/bookmark-800.webp',
    imageWidth: 800,
    imageHeight: 500,
    alt: 'Bookmark Service — сервис веб-закладок с автоматическими скриншотами',
    modalIcon: 'fa-solid fa-bookmark',
    description:
      'Веб-сервис для сохранения и организации личных закладок. Автоматически генерирует превью сайтов через ScreenshotMachine API. Пользователи могут регистрироваться, создавать коллекции закладок и распределять их по категориям.',
    technologies:
      'PHP, MySQL, Vanilla JavaScript, ScreenshotMachine API, Session Auth, Category Management',
    githubUrl: '',
    url: 'https://pheb.ru/bookmark/'
  }
]
