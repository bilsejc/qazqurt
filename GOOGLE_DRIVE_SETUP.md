# Настройка Google Drive для медиафайлов

## 📋 Инструкция по настройке

### 1. Загрузка файлов в Google Drive

1. **Создайте папку** в Google Drive для вашего проекта (например, "Kazygurt Mountain Website")
2. **Загрузите все медиафайлы** в эту папку:
   - Видео файлы (mountain-hero.mp4)
   - Изображения для галереи (mountain-view-1.jpg до mountain-view-8.jpg)
   - Постер изображение (mountain-poster.jpg)

### 2. Получение прямых ссылок

Для каждого файла:

1. **Откройте файл** в Google Drive
2. **Нажмите "Поделиться"** (Share)
3. **Измените доступ** на "Любой, у кого есть ссылка" (Anyone with the link)
4. **Скопируйте ссылку** - она будет выглядеть так:
   ```
   https://drive.google.com/file/d/FILE_ID_HERE/view?usp=sharing
   ```

### 3. Извлечение ID файла

Из ссылки `https://drive.google.com/file/d/FILE_ID_HERE/view?usp=sharing`
извлеките `FILE_ID_HERE` - это ID вашего файла.

### 4. Обновление конфигурации

Откройте файл `config/media.ts` и замените `YOUR_VIDEO_ID_HERE`, `YOUR_IMAGE_ID_1` и т.д. на реальные ID файлов:

```typescript
export const mediaConfig = {
  videos: {
    mountainHero: "https://drive.google.com/uc?export=download&id=1ABC123DEF456GHI789JKL", // Замените на ваш ID
  },
  
  gallery: {
    mountainView1: "https://drive.google.com/uc?export=download&id=1XYZ789ABC123DEF456", // Замените на ваш ID
    mountainView2: "https://drive.google.com/uc?export=download&id=1MNO456PQR789STU012", // Замените на ваш ID
    // ... и так далее для всех изображений
  },
  
  images: {
    mountainPoster: "https://drive.google.com/uc?export=download&id=1VWX345YZA678BCD901", // Замените на ваш ID
  }
}
```

### 5. Форматы ссылок

- **Для скачивания**: `https://drive.google.com/uc?export=download&id=FILE_ID`
- **Для превью**: `https://drive.google.com/thumbnail?id=FILE_ID&sz=w1000`

### 6. Проверка

После обновления конфигурации:
1. Запустите проект локально: `npm run dev`
2. Проверьте, что все изображения и видео загружаются корректно
3. Если что-то не работает, убедитесь, что файлы имеют публичный доступ

## 🔧 Альтернативные варианты

### Если Google Drive не работает:

1. **Imgur** - для изображений
2. **YouTube** - для видео (встроить через iframe)
3. **Cloudinary** - профессиональный сервис для медиа
4. **AWS S3** - для больших проектов

## 📝 Примеры ID файлов

```
Видео: 1ABC123DEF456GHI789JKL
Изображение 1: 1XYZ789ABC123DEF456
Изображение 2: 1MNO456PQR789STU012
Постер: 1VWX345YZA678BCD901
```

## ⚠️ Важные замечания

1. **Размер файлов**: Google Drive имеет лимиты на размер файлов
2. **Скорость загрузки**: Прямые ссылки могут быть медленнее локальных файлов
3. **Доступность**: Убедитесь, что файлы всегда доступны публично
4. **Резервные копии**: Храните оригинальные файлы в безопасном месте

## 🚀 После настройки

1. Обновите `config/media.ts` с реальными ID
2. Зафиксируйте изменения: `git add . && git commit -m "Update media config"`
3. Отправьте в GitHub: `git push origin master`
4. Задеплойте на Vercel
