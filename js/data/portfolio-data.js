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
      'SPA интернет-магазин на TypeScript по паттерну MVP с событийной архитектурой.',
    technologies:
      'TypeScript, MVP Pattern, Event Architecture, Custom Validation',
    githubUrl: 'https://github.com/Annenkov-Konstantin/web-larek-frontend',
    url: ''
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
    url: ''
  },
  {
    id: 'ono-tebe-nado',
    title: 'Оно тебе надо',
    imageSmall: 'assets/img/portfolio/webp/ono_tebe_nado-400.webp',
    imageLarge: 'assets/img/portfolio/webp/ono_tebe_nado-800.webp',
    imageWidth: 800,
    imageHeight: 500,
    alt: 'Оно тебе надо — лендинг аукциона на HTML5 и CSS3',
    modalIcon: 'fa-solid fa-gavel',
    description:
      'Семантический лендинг аукциона с pixel-perfect вёрсткой. Сложная сетка, продвинутая типографика и Desktop-Only подход для сохранения авторской композиции.',
    technologies:
      'HTML5, CSS3, CSS Grid, Flexbox, БЭМ, Pixel-Perfect, Semantic HTML, A11y',
    githubUrl: 'https://github.com/Annenkov-Konstantin/ono-tebe-nado',
    url: 'https://annenkov-konstantin.github.io/ono-tebe-nado/'
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
