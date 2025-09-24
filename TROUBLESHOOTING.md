# Устранение неполадок

## Ошибка "Unsupported Server Component type: undefined"

Эта ошибка возникает из-за проблем с Server Components в Next.js 14. Вот что было исправлено:

### 1. Разделение серверных и клиентских компонентов

**Проблема:** Клиентские компоненты импортировались в серверный layout.

**Решение:** Создан `ClientLayout` компонент для обертки всех клиентских компонентов.

```tsx
// app/layout.tsx (серверный компонент)
import ClientLayout from '@/components/ClientLayout'

export default function RootLayout({ children }) {
  return (
    <html lang="ru">
      <body>
        <ClientLayout>
          {children}
        </ClientLayout>
      </body>
    </html>
  )
}
```

### 2. Исправление экспорта компонентов

**Проблема:** Неправильный экспорт в ThemeProvider.

**Решение:** Изменен с именованного на дефолтный экспорт.

```tsx
// Было
export function ThemeProvider({ children, ...props }) {
  return <NextThemesProvider {...props}>{children}</NextThemesProvider>
}

// Стало
export default function ThemeProvider({ children, ...props }) {
  return <NextThemesProvider {...props}>{children}</NextThemesProvider>
}
```

### 3. Упрощение 3D компонентов

**Проблема:** Создание геометрии внутри компонента может вызывать проблемы.

**Решение:** Использование JSX элементов вместо создания объектов.

```tsx
// Было
const mountainGeometry = new THREE.ConeGeometry(3, 4, 8)

// Стало
<coneGeometry args={[3, 4, 8]} />
```

### 4. Временное упрощение главной страницы

Для тестирования создана упрощенная версия главной страницы без сложных компонентов.

## Пошаговое восстановление полной функциональности

### Шаг 1: Проверка базовой работы
1. Убедитесь, что упрощенная версия работает
2. Откройте http://localhost:3000
3. Проверьте, что нет ошибок в консоли

### Шаг 2: Постепенное добавление компонентов

1. **Добавьте навигацию:**
```tsx
// В ClientLayout.tsx
import Navigation from './Navigation'

return (
  <ThemeProvider>
    <Navigation />
    <main className="min-h-screen">
      {children}
    </main>
  </ThemeProvider>
)
```

2. **Добавьте HeroSection:**
```tsx
// В app/page.tsx
import HeroSection from '@/components/HeroSection'

export default function Home() {
  return (
    <div>
      <HeroSection />
      {/* остальной контент */}
    </div>
  )
}
```

3. **Добавьте остальные секции по одной**

### Шаг 3: Проверка 3D компонентов

1. Убедитесь, что Three.js правильно установлен
2. Проверьте, что все зависимости @react-three/* установлены
3. Тестируйте 3D компоненты отдельно

### Шаг 4: Добавление медиа-файлов

1. Добавьте изображения в `public/images/`
2. Добавьте видео в `public/videos/`
3. Обновите пути в компонентах

## Частые проблемы и решения

### Проблема: "Module not found"
**Решение:** Убедитесь, что все зависимости установлены:
```bash
npm install
```

### Проблема: "Cannot resolve module"
**Решение:** Проверьте пути импорта и убедитесь, что файлы существуют.

### Проблема: "Hydration mismatch"
**Решение:** Убедитесь, что клиентские компоненты помечены директивой `'use client'`.

### Проблема: 3D модели не загружаются
**Решение:** 
1. Проверьте, что Three.js установлен
2. Убедитесь, что Canvas обернут в Suspense
3. Проверьте консоль браузера на ошибки

## Восстановление полной версии

После того как базовая версия работает, можно восстановить полную функциональность:

1. Замените содержимое `app/page.tsx` на полную версию
2. Добавьте все компоненты в `ClientLayout.tsx`
3. Проверьте каждый компонент отдельно
4. Добавьте медиа-файлы

## Контакты для поддержки

Если проблемы продолжаются:
- Проверьте документацию Next.js 14
- Убедитесь, что все зависимости совместимы
- Проверьте консоль браузера на дополнительные ошибки
