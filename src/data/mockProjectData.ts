export const mockProjectData = {
  // Hero Section
  projectName: "EcoTracker - Приложение для экологии",
  slogan: "Делай планету лучше каждый день",
  student: {
    name: "Алексей Иванов",
    age: 14,
    photo: "https://images.unsplash.com/photo-1646756089735-487709743361?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWVuJTIwc3R1ZGVudCUyMGNvZGluZ3xlbnwxfHx8fDE3NjkyNDg3MjJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
  },
  course: "Веб-разработка с нуля",
  duration: "6 месяцев",
  projectUrl: "https://ecotracker-demo.example.com",

  // Media Carousel
  mediaItems: [
    {
      type: "video" as const,
      url: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      thumbnail: "https://images.unsplash.com/photo-1750056393300-102f7c4b8bc2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWIlMjBkZXNpZ24lMjBtb2NrdXB8ZW58MXx8fHwxNzY5MTYxOTUyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      title: "Рассказ о проекте"
    },
    {
      type: "image" as const,
      url: "https://images.unsplash.com/photo-1702479744062-1880502275b1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWJzaXRlJTIwZGFzaGJvYXJkJTIwc2NyZWVufGVufDF8fHx8MTc2OTE3ODI1M3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      title: "Главная страница проекта"
    },
    {
      type: "image" as const,
      url: "https://images.unsplash.com/photo-1605108222700-0d605d9ebafe?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBhcHAlMjBpbnRlcmZhY2V8ZW58MXx8fHwxNzY5MjA5NTYyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      title: "Мобильная версия"
    }
  ],

  // About Project
  about: {
    description: "EcoTracker — это веб-приложение для отслеживания экологических привычек. Пользователи могут записывать свои действия по сохранению природы и видеть свой вклад в улучшение экологии.",
    problem: "Многие хотят заботиться о природе, но не знают, с чего начать и как отслеживать свой прогресс",
    target: "Школьники и студенты, которые хотят вести экологичный образ жизни",
    features: [
      "Трекер ежедневных эко-привычек",
      "Калькулятор углеродного следа",
      "Статистика и достижения",
      "Советы по экологии",
      "Социальные челленджи"
    ]
  },

  // Author Details
  author: {
    name: "Алексей Иванов",
    age: 14,
    photo: "https://images.unsplash.com/photo-1646756089735-487709743361?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWVuJTIwc3R1ZGVudCUyMGNvZGluZ3xlbnwxfHx8fDE3NjkyNDg3MjJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    course: "Веб-разработка с нуля",
    duration: "6 месяцев",
    before: [
      "Знал только базовый HTML",
      "Никогда не делал полноценные проекты",
      "Боялся JavaScript"
    ],
    after: [
      "Создаю адаптивные сайты",
      "Умею работать с React и современными инструментами",
      "Понимаю архитектуру веб-приложений",
      "Могу защитить свой проект и объяснить каждую строку кода"
    ]
  },

  // Screenshots
  screenshots: [
    {
      url: "https://images.unsplash.com/photo-1702479744062-1880502275b1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWJzaXRlJTIwZGFzaGJvYXJkJTIwc2NyZWVufGVufDF8fHx8MTc2OTE3ODI1M3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      title: "Главная страница",
      description: "Дашборд с общей статистикой"
    },
    {
      url: "https://images.unsplash.com/photo-1750056393300-102f7c4b8bc2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWIlMjBkZXNpZ24lMjBtb2NrdXB8ZW58MXx8fHwxNzY5MTYxOTUyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      title: "Страница трекера",
      description: "Отслеживание ежедневных привычек"
    },
    {
      url: "https://images.unsplash.com/photo-1605108222700-0d605d9ebafe?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBhcHAlMjBpbnRlcmZhY2V8ZW58MXx8fHwxNzY5MjA5NTYyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      title: "Мобильная версия",
      description: "Адаптивная версия для телефонов"
    },
    {
      url: "https://images.unsplash.com/photo-1652696290920-ee4c836c711e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2RpbmclMjB3b3Jrc3BhY2UlMjBsYXB0b3B8ZW58MXx8fHwxNzY5MjMyMTQ4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      title: "Страница статистики",
      description: "Визуализация данных и достижений"
    }
  ],

  // Project Structure
  structure: {
    name: "ecotracker",
    type: "folder",
    children: [
      {
        name: "src",
        type: "folder",
        children: [
          {
            name: "components",
            type: "folder",
            children: [
              { name: "Header.tsx", type: "file", language: "tsx" },
              { name: "Dashboard.tsx", type: "file", language: "tsx" },
              { name: "HabitTracker.tsx", type: "file", language: "tsx" },
              { name: "Statistics.tsx", type: "file", language: "tsx" }
            ]
          },
          {
            name: "pages",
            type: "folder",
            children: [
              { name: "Home.tsx", type: "file", language: "tsx" },
              { name: "Tracker.tsx", type: "file", language: "tsx" },
              { name: "Profile.tsx", type: "file", language: "tsx" }
            ]
          },
          {
            name: "assets",
            type: "folder",
            children: [
              { name: "logo.svg", type: "file", language: "svg" },
              { name: "icons", type: "folder", children: [] }
            ]
          },
          {
            name: "styles",
            type: "folder",
            children: [
              { name: "index.css", type: "file", language: "css" },
              { name: "theme.css", type: "file", language: "css" }
            ]
          },
          { name: "App.tsx", type: "file", language: "tsx" },
          { name: "main.tsx", type: "file", language: "tsx" }
        ]
      },
      { name: "package.json", type: "file", language: "json" },
      { name: "vite.config.ts", type: "file", language: "ts" },
      { name: "README.md", type: "file", language: "md" }
    ]
  },

  technologies: [
    { name: "React", description: "Для создания интерактивного интерфейса" },
    { name: "TypeScript", description: "Для типизации и надежности кода" },
    { name: "Vite", description: "Быстрая сборка проекта" },
    { name: "CSS Modules", description: "Изолированные стили компонентов" },
    { name: "Recharts", description: "Визуализация статистики" }
  ],

  approach: [
    "Компонентная архитектура — каждая часть интерфейса это отдельный компонент",
    "Адаптивный дизайн — сайт отлично работает на всех устройствах",
    "Чистый код — понятные названия, комментарии, структура",
    "Git-контроль — все изменения отслеживаются и сохраняются"
  ],

  // Skills Learned
  skills: [
    {
      category: "HTML & Семантика",
      items: [
        { name: "Семантические теги", completed: true },
        { name: "Доступность (ARIA)", completed: true },
        { name: "SEO-оптимизация", completed: true }
      ]
    },
    {
      category: "CSS & Адаптивность",
      items: [
        { name: "Flexbox", completed: true },
        { name: "CSS Grid", completed: true },
        { name: "Адаптивная верстка", completed: true },
        { name: "Анимации", completed: true }
      ]
    },
    {
      category: "JavaScript & React",
      items: [
        { name: "ES6+ синтаксис", completed: true },
        { name: "React компоненты", completed: true },
        { name: "Hooks (useState, useEffect)", completed: true },
        { name: "Обработка событий", completed: true },
        { name: "Работа с API", completed: true }
      ]
    },
    {
      category: "Работа над проектами",
      items: [
        { name: "Git и GitHub", completed: true },
        { name: "Планирование задач", completed: true },
        { name: "Дедлайны и ответственность", completed: true },
        { name: "Презентация проекта", completed: true },
        { name: "Защита и ответы на вопросы", completed: true }
      ]
    }
  ]
};
