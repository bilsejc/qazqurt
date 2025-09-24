# Настройка проекта

## Первоначальная настройка

1. **Установите зависимости:**
```bash
npm install
```

2. **Создайте файл .env.local:**
```bash
cp .env.example .env.local
```

3. **Заполните переменные окружения в .env.local:**
```env
NEXT_PUBLIC_SITE_URL=http://localhost:3000
NEXT_PUBLIC_SITE_NAME="Гора Казыгурт"
CONTACT_EMAIL=info@kazygurt-mountain.kz
```

## Добавление медиа-файлов

### Изображения
Поместите изображения в папку `public/images/`:

```
public/images/
├── gallery/
│   ├── mountain-view-1.jpg
│   ├── mountain-view-2.jpg
│   └── ...
├── legend-1.jpg
├── legend-2.jpg
├── legend-3.jpg
├── legend-4.jpg
├── geology.jpg
├── biodiversity.jpg
├── culture.jpg
├── tourism.jpg
└── mountain-poster.jpg
```

### Видео
Поместите видео в папку `public/videos/`:

```
public/videos/
├── mountain-hero.mp4
└── mountain-hero.webm
```

## Настройка 3D-моделей

### Модель горы
Для более детальной модели горы:
1. Создайте модель в Blender
2. Экспортируйте в формат GLB
3. Поместите в `public/models/mountain.glb`
4. Обновите компонент `Mountain3D.tsx`

### Модель ковчега
Для более детальной модели ковчега:
1. Создайте модель в Blender
2. Экспортируйте в формат GLB
3. Поместите в `public/models/ark.glb`
4. Обновите компонент `NoahArk3D.tsx`

## Настройка карты

Для интеграции с Google Maps:
1. Получите API ключ в Google Cloud Console
2. Добавьте в .env.local:
```env
NEXT_PUBLIC_GOOGLE_MAPS_API_KEY=your-api-key
```
3. Обновите компонент `ContactSection.tsx`

## Настройка форм

Для работы контактной формы:
1. Настройте SMTP сервер
2. Добавьте в .env.local:
```env
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your-email@gmail.com
SMTP_PASS=your-app-password
```

## Настройка аналитики

Для Google Analytics:
1. Создайте аккаунт GA4
2. Добавьте в .env.local:
```env
NEXT_PUBLIC_GA_ID=your-ga-id
```

## Запуск проекта

```bash
# Режим разработки
npm run dev

# Сборка для продакшена
npm run build

# Запуск продакшен версии
npm start
```

## Проверка

После настройки проверьте:
- [ ] Все изображения загружаются
- [ ] Видео воспроизводится
- [ ] 3D-модели отображаются
- [ ] Формы работают
- [ ] Анимации плавные
- [ ] Сайт адаптивный
