/**
 * Данные проектов портфолио
 * Все проекты хранятся здесь, отдельно от логики отображения
 */

export const portfolioItems = [
  {
    id: 'web-larek',
    title: 'Web-ларёк',
    image: 'assets/img/portfolio/web_larek.png',
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
    image: 'assets/img/portfolio/stellar_burgers.png',
    alt: 'Stellar Burger — React + Redux Toolkit',
    modalIcon: 'fa-solid fa-burger',
    description: 'React + Redux Toolkit + WebSocket + JWT-авторизация.',
    technologies: 'React, Redux Toolkit, WebSocket, JWT, API Integration',
    githubUrl: 'https://github.com/Annenkov-Konstantin/stellar-burgers',
    url: ''
  },
  /*     {
        id: 'skillswap',
        title: 'SkillSwap',
        image: 'assets/img/portfolio/port_3.jpg',
        alt: 'SkillSwap — командная разработка на React',
        modalIcon: 'fa-solid fa-users',
        description: 'Командная разработка соцсети (React, TypeScript, UI/Container паттерн).',
        technologies: 'React, TypeScript, Team Development, UI/Container Pattern',
        githubUrl: 'https://github.com/Annenkov-Konstantin/SkillSwap_45_4',
        url: '',
    }, */
  {
    id: 'ono-tebe-nado',
    title: 'Оно тебе надо',
    image: 'assets/img/portfolio/ono_tebe_nado.png',
    alt: 'Оно тебе надо — лендинг аукциона на HTML5 и CSS3',
    modalIcon: 'fa-solid fa-gavel', // Молоток аукциониста
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
    image: 'assets/img/portfolio/speech_service.png',
    alt: 'Speech Service — генерация аудио из текста на PHP',
    modalIcon: 'fa-solid fa-microphone-lines', // Иконка микрофона с волнами
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
    image: 'assets/img/portfolio/bookmark.png',
    alt: 'Bookmark Service — сервис веб-закладок с автоматическими скриншотами',
    modalIcon: 'fa-solid fa-bookmark', // Иконка закладки
    description:
      'Веб-сервис для сохранения и организации личных закладок. Автоматически генерирует превью сайтов через ScreenshotMachine API. Пользователи могут регистрироваться, создавать коллекции закладок и распределять их по категориям.',
    technologies:
      'PHP, MySQL, Vanilla JavaScript, ScreenshotMachine API, Session Auth, Category Management',
    githubUrl: '',
    url: 'https://pheb.ru/bookmark/'
  }
]
