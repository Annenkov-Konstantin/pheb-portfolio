# 🏛️ Личное портфолио (pheb.ru)

<div align="center">

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![Bootstrap](https://img.shields.io/badge/Bootstrap-563D7C?style=for-the-badge&logo=bootstrap&logoColor=white)
![PHP](https://img.shields.io/badge/PHP-777BB4?style=for-the-badge&logo=php&logoColor=white)
![reCAPTCHA](https://img.shields.io/badge/reCAPTCHA-v3-0077B6?style=for-the-badge&logo=google&logoColor=white)
![Status](https://img.shields.io/badge/Status-Online-brightgreen?style=for-the-badge)

</div>

### Превью проекта

![Бренд проекта](assets/img/og-image.jpg)

### Интерфейс сайта

![Главная страница](assets/img/site-preview.webp)

[🔗 Перейти на сайт](https://pheb.ru/) • [💻 Исходный код](https://github.com/Annenkov-Konstantin/pheb-portfolio)

Адаптивный сайт-портфолио Frontend-разработчика. Сайт спроектирован с упором на производительность, доступность (a11y), SEO и чистую семантическую вёрстку.

## 📄 Страницы

- **Главная** — hero-секция, представление, призыв к действию
- **Обо мне** — опыт, навыки, подход к работе
- **Портфолио** — динамический рендеринг проектов через JS + модальные окна
- **Контакты** — форма обратной связи с защитой от спама, соцсети, доступность

## 🛠 Стек технологий

- **Вёрстка:** HTML5, CSS3 (Grid, Flexbox, Custom Properties)
- **JavaScript:** Vanilla JS (ES6+) + jQuery (UI-компоненты Bootstrap)
- **Фреймворк:** Bootstrap 5 (сетка и утилиты, очищенный через PurgeCSS)
- **Бэкенд:** PHP (обработчик формы)
- **Защита от спама:** Google reCAPTCHA v3 (невидимая капча)
- **Иконки:** Font Awesome, SVG-спрайты
- **Изображения:** WebP с адаптивными размерами (`srcset`, `sizes`)
- **Оптимизация:** Preload шрифтов, Critical CSS, Open Graph, Schema.org

## ✨ Ключевые особенности

### 🎨 Интерфейс

- **Динамическое модальное окно** — рендеринг карточек проектов через JS из массива данных
- **3D tilt-эффект** — карточки портфолио наклоняются при наведении мыши (jQuery Tilt)
- **Адаптивная сетка** — CSS Grid с `auto-fit` и `minmax`, плавные переходы между брейкпоинтами
- **Skeleton-загрузчики** — плавное появление контента без сдвигов макета (CLS = 0)
- **Кастомные скроллбары** — стилизованные через `::-webkit-scrollbar` и `scrollbar-width`
- **SVG-спрайты** — иконки логотипа и соцсетей через `<use href="sprite.svg#...">`

### ⚡ Производительность

- **WebP-изображения** — все картинки конвертированы в WebP с двумя размерами (400w и 800w)
- **Адаптивные изображения** — `srcset` и `sizes` для оптимальной загрузки на разных экранах
- **Preload LCP-изображения** — первое изображение загружается с высоким приоритетом
- **Preload шрифтов** — variable fonts (Inter, Montserrat) загружаются параллельно с CSS
- **Skeleton-загрузчики** — устранение CLS при рендеринге карточек портфолио
- **Open Graph мета-теги** — красивые превью при шаринге в соцсетях

### ♿ Доступность (a11y)

- **Семантическая вёрстка** — `<header>`, `<nav>`, `<main>`, `<footer>`, `<article>`
- **Skip-link** — переход к основному содержимому для клавиатурной навигации
- **Корректная работа с клавиатуры** — фокус возвращается к триггеру после закрытия модалки
- **ARIA-атрибуты** — `aria-hidden`, `aria-label`, `.sr-only` для скринридеров
- **Контрастность** — соответствие WCAG по соотношению цветов

### 🔒 Безопасность

- **Google reCAPTCHA v3** — невидимая защита от спама с оценкой вероятности бота (score)
- **Honeypot-защита формы** — скрытое поле, создаваемое динамически через JavaScript
- **Проверка времени заполнения** — отклонение форм, отправленных быстрее 3 секунд
- **Серверная валидация** — проверка данных на PHP перед отправкой
- **Защита от инъекций** — фильтрация специальных символов
- **Многослойная защита** — комбинация клиентских и серверных проверок

### 🔍 SEO

- **Schema.org (JSON-LD)** — структурированные данные для всех страниц (`WebSite`, `ProfilePage`, `CollectionPage`, `ContactPage`)
- **Уникальные мета-теги** — отдельные `title` и `description` для каждой страницы
- **Open Graph + Twitter Card** — оптимизированные превью для соцсетей
- **Семантическая разметка** — правильная иерархия заголовков H1-H6

## 🚀 Запуск

Проект является статическим сайтом с PHP-обработчиком формы. Варианты запуска:

### Самый простой способ

Просто откройте `index.html` в любом современном браузере (двойной клик по файлу).

### Через Live Server (VS Code)

1. Установите расширение **Live Server**
2. Кликните правой кнопкой на `index.html` → "Open with Live Server"

### Локальный PHP-сервер (для тестирования формы)

```bash
php -S localhost:8000
```

## 📁 Структура проекта

```
pheb-portfolio/
├── index.html # Главная страница
├── about.html # Обо мне
├── portfolio.html # Портфолио
├── contact.html # Контакты
├── post.php # Обработчик формы обратной связи
├── css/
│ └── styles.css # Основные стили
├── js/
│ ├── main.js # Основная логика сайта
│ ├── scripts.js # Вспомогательные скрипты (navbar shrink)
│ ├── tilt.jquery.min.js # jQuery-плагин для 3D-эффекта
│ └── data/
│ └── portfolio-data.js # Данные проектов (массив)
├── assets/
│ ├── fonts/ # Variable fonts (Inter, Montserrat)
│ └── img/ # Изображения, OG-картинка, превью
├── svg/
│ └── sprite.svg # SVG-спрайт с иконками
└── README.md

```

## 🔮 Возможные улучшения

- [ ] Переписать на React + TypeScript
- [ ] Добавить тёмную/светлую тему
- [ ] Интеграция с CMS для управления проектами
- [ ] Добавить блог-секцию
- [ ] Перевод на несколько языков
- [ ] Кастомная клиентская валидация полей формы
- [ ] Интеграция с Telegram Bot API для уведомлений
- [ ] Подключение аналитики (Яндекс.Метрика / Google Analytics)
- [ ] Critical CSS — встроить стили первого экрана inline
- [ ] PWA — сделать сайт устанавливаемым

## 📬 Контакты

Если у вас есть вопросы по проекту или вы хотите сотрудничать:

- **Сайт:** [pheb.ru](https://pheb.ru/)
- **Email:** pheb@list.ru
- **Telegram:** [@Knfrei](https://t.me/Knfrei)
- **GitHub:** [@Annenkov-Konstantin](https://github.com/Annenkov-Konstantin)

## 📚 Источники и оригинальный репозиторий

ℹ️ **Примечание:** Этот репозиторий содержит код проекта, перенесённый для удобства демонстрации в портфолио. Частичная история разработки доступна в [оригинальном репозитории](https://github.com/Annenkov-Konstantin/pheb-portfolio).

<div align="center">

**Если проект был полезен, поставьте ⭐ на GitHub!**

</div>
