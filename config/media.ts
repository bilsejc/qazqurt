// Google Drive Media Configuration
// Замените эти ссылки на ваши реальные Google Drive ссылки

export const mediaConfig = {
  // Видео файлы
  videos: {
    mountainHero: "https://drive.google.com/uc?export=download&id=YOUR_VIDEO_ID_HERE",
    // Добавьте другие видео файлы по необходимости
  },
  
  // Изображения для галереи
  gallery: {
    mountainView1: "https://drive.google.com/uc?export=download&id=YOUR_IMAGE_ID_1",
    mountainView2: "https://drive.google.com/uc?export=download&id=YOUR_IMAGE_ID_2", 
    mountainView3: "https://drive.google.com/uc?export=download&id=YOUR_IMAGE_ID_3",
    mountainView4: "https://drive.google.com/uc?export=download&id=YOUR_IMAGE_ID_4",
    mountainView5: "https://drive.google.com/uc?export=download&id=YOUR_IMAGE_ID_5",
    mountainView6: "https://drive.google.com/uc?export=download&id=YOUR_IMAGE_ID_6",
    mountainView7: "https://drive.google.com/uc?export=download&id=YOUR_IMAGE_ID_7",
    mountainView8: "https://drive.google.com/uc?export=download&id=YOUR_IMAGE_ID_8",
  },
  
  // Другие изображения
  images: {
    mountainPoster: "https://drive.google.com/uc?export=download&id=YOUR_POSTER_ID",
    // Добавьте другие изображения по необходимости
  }
}

// Функция для получения прямой ссылки Google Drive
export const getGoogleDriveUrl = (fileId: string): string => {
  return `https://drive.google.com/uc?export=download&id=${fileId}`
}

// Функция для получения ссылки на превью изображения
export const getGoogleDrivePreviewUrl = (fileId: string): string => {
  return `https://drive.google.com/thumbnail?id=${fileId}&sz=w1000`
}
