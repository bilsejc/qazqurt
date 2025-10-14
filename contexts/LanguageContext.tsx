'use client'

import { createContext, useContext, useState, useEffect, ReactNode } from 'react'

export type Language = 'kk' | 'ru' | 'en'

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
  t: (key: string) => string
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

interface LanguageProviderProps {
  children: ReactNode
}

export function LanguageProvider({ children }: LanguageProviderProps) {
  const [language, setLanguage] = useState<Language>('kk')

  // Загружаем сохраненный язык из localStorage
  useEffect(() => {
    const savedLanguage = localStorage.getItem('language') as Language
    if (savedLanguage && ['kk', 'ru', 'en'].includes(savedLanguage)) {
      setLanguage(savedLanguage)
    }
  }, [])

  // Сохраняем язык в localStorage при изменении
  useEffect(() => {
    localStorage.setItem('language', language)
  }, [language])

  // Функция для получения перевода
  const t = (key: string): string => {
    const translations = {
      // Navigation
      'nav.home': {
        kk: 'Басты бет',
        ru: 'Главная',
        en: 'Home'
      },
      'nav.about': {
        kk: 'Тау туралы',
        ru: 'О горе',
        en: 'About'
      },
      'nav.legend': {
        kk: 'Аңыз',
        ru: 'Легенда',
        en: 'Legend'
      },
      'nav.mountain-info': {
        kk: 'Тау картасы',
        ru: 'Карта горы',
        en: 'Mountain Map'
      },
      'nav.gallery': {
        kk: 'Галерея',
        ru: 'Галерея',
        en: 'Gallery'
      },
      'nav.contact': {
        kk: 'Байланыс',
        ru: 'Контакты',
        en: 'Contact'
      },
      
      // About Section
      'about.title': {
        kk: 'Қазығұрт тауы туралы',
        ru: 'О горе Казыгурт',
        en: 'About Kazygurt Mountain'
      },
      'about.subtitle': {
        kk: 'Мыңжылдық сырларды өзінде сақтаған ежелгі тау, бірегей сұлулығымен әлемнің барлық бұрыштарынан келген саяхатшыларды шабыттандырады',
        ru: 'Древняя гора, хранящая тысячелетние тайны, вдохновляет путешественников со всего мира своей уникальной красотой',
        en: 'An ancient mountain that preserves millennial secrets, inspiring travelers from all corners of the world with its unique beauty'
      },
      'about.height': {
        kk: 'Биіктігі',
        ru: 'Высота',
        en: 'Height'
      },
      'about.height.value': {
        kk: '1,768 м',
        ru: '1,768 м',
        en: '1,768 m'
      },
      'about.height.desc': {
        kk: 'Теңіз деңгейінен',
        ru: 'Над уровнем моря',
        en: 'Above sea level'
      },
      'about.location': {
        kk: 'Орналасуы',
        ru: 'Расположение',
        en: 'Location'
      },
      'about.location.value': {
        kk: 'Оңтүстік Қазақстан',
        ru: 'Южный Казахстан',
        en: 'South Kazakhstan'
      },
      'about.location.desc': {
        kk: 'Оңтүстік Қазақстан облысы',
        ru: 'Южно-Казахстанская область',
        en: 'South Kazakhstan Region'
      },
      'about.age': {
        kk: 'Жасы',
        ru: 'Возраст',
        en: 'Age'
      },
      'about.age.value': {
        kk: '~65 млн жыл',
        ru: '~65 млн лет',
        en: '~65 million years'
      },
      'about.age.desc': {
        kk: 'Бор кезеңінде қалыптасқан',
        ru: 'Сформировался в меловой период',
        en: 'Formed in the Cretaceous period'
      },
      'about.visitors': {
        kk: 'Қонақтар',
        ru: 'Посетители',
        en: 'Visitors'
      },
      'about.visitors.value': {
        kk: '10,000+',
        ru: '10,000+',
        en: '10,000+'
      },
      'about.visitors.desc': {
        kk: 'Жылына туристер',
        ru: 'Туристов в год',
        en: 'Tourists per year'
      },
      'about.features.title': {
        kk: 'Тауды ерекше ететін нәрсе не?',
        ru: 'Что делает гору особенной?',
        en: 'What makes the mountain special?'
      },
      'about.features.geology': {
        kk: 'Геологиялық керемет',
        ru: 'Геологическое чудо',
        en: 'Geological wonder'
      },
      'about.features.geology.desc': {
        kk: 'Қазығұрт тауы бай қалыптасу тарихы бар бірегей геологиялық құрылымды білдіреді.',
        ru: 'Гора Казыгурт представляет уникальную геологическую структуру с богатой историей формирования.',
        en: 'Kazygurt Mountain represents a unique geological structure with a rich formation history.'
      },
      'about.features.biodiversity': {
        kk: 'Биоалуантүрлілік',
        ru: 'Биоразнообразие',
        en: 'Biodiversity'
      },
      'about.features.biodiversity.desc': {
        kk: 'Тау беткейлерінде дала аймағына тән сирек өсімдік және жануар түрлерінің көптеген түрлері мекендейді.',
        ru: 'На склонах горы обитает множество редких видов растений и животных, характерных для степной зоны.',
        en: 'The mountain slopes are home to many rare species of plants and animals characteristic of the steppe zone.'
      },
      'about.features.culture': {
        kk: 'Мәдени мұра',
        ru: 'Культурное наследие',
        en: 'Cultural heritage'
      },
      'about.features.culture.desc': {
        kk: 'Тау жергілікті тұрғындар үшін үлкен маңызға ие және Қазақстанның мәдени мұрасының бөлігі болып табылады.',
        ru: 'Гора имеет большое значение для местных жителей и является частью культурного наследия Казахстана.',
        en: 'The mountain has great significance for local residents and is part of Kazakhstan\'s cultural heritage.'
      },
      'about.features.tourism': {
        kk: 'Туризмдік әлеует',
        ru: 'Туристический потенциал',
        en: 'Tourism potential'
      },
      'about.features.tourism.desc': {
        kk: 'Жыл сайын тау ежелгі сырларға қол тигізгісі келетін көбірек туристерді тартады.',
        ru: 'С каждым годом гора привлекает все больше туристов, желающих прикоснуться к древним тайнам.',
        en: 'Every year the mountain attracts more tourists who want to touch the ancient secrets.'
      },
      'about.cta.title': {
        kk: 'Бұл керемет тауды өзіңіз үшін ашқыңыз келе ме?',
        ru: 'Хотите ли вы открыть для себя эту удивительную гору?',
        en: 'Would you like to discover this amazing mountain for yourself?'
      },
      'about.cta.subtitle': {
        kk: 'Қазығұрт тауының сиқырын өздері үшін ашқан мыңдаған саяхатшыларға қосылыңыз',
        ru: 'Присоединяйтесь к тысячам путешественников, которые открыли для себя магию горы Казыгурт',
        en: 'Join thousands of travelers who have discovered the magic of Kazygurt Mountain for themselves'
      },
      'about.cta.button': {
        kk: 'Көбірек білу',
        ru: 'Узнать больше',
        en: 'Learn more'
      },
      'about.model.title': {
        kk: 'Таудың 360° көрінісі',
        ru: '360° вид горы',
        en: '360° view of the mountain'
      },
      'about.model.desc': {
        kk: 'Қазығұрт тауының толық панорамалық көрінісі',
        ru: 'Полная панорамная панорама горы Казыгурт',
        en: 'Full panoramic view of Kazygurt Mountain'
      },

      // Hero Section
      'hero.title': {
        kk: 'Қазығұрт тауы',
        ru: 'Гора Казыгурт',
        en: 'Kazygurt Mountain'
      },
      'hero.subtitle': {
        kk: 'Қазақстанның жүрегінде тіріленген аңыз',
        ru: 'Легенда, ожившая в сердце Казахстана',
        en: 'Legend come alive in the heart of Kazakhstan'
      },
      'hero.description': {
        kk: 'Қазақстанның ең сырлы тауларының бірінің ежелгі сырларын, табиғи сұлулығын және мистикалық аңыздарын ашыңыз',
        ru: 'Откройте древние тайны, природную красоту и мистические легенды одной из самых загадочных гор Казахстана',
        en: 'Discover the ancient secrets, natural beauty and mystical legends of one of Kazakhstan\'s most mysterious mountains'
      },
      'hero.explore': {
        kk: 'Зерттеу',
        ru: 'Исследовать',
        en: 'Explore'
      },
      'hero.watch': {
        kk: 'Видео көру',
        ru: 'Смотреть видео',
        en: 'Watch Video'
      },

      // Legend Section
      'legend.title': {
        kk: 'Нұх туралы аңыз',
        ru: 'Легенда о Ное',
        en: 'Legend of Noah'
      },
      'legend.subtitle': {
        kk: 'Қазығұрт тауын Нұх кемесі туралы ең танымал құдайлық аңыздардың бірімен байланыстыратын ежелгі аңыз',
        ru: 'Древняя легенда, связывающая гору Казыгурт с одной из самых известных божественных легенд о ковчеге Ноя',
        en: 'Ancient legend connecting Kazygurt Mountain with one of the most famous divine legends about Noah\'s Ark'
      },
      'legend.chapter1.title': {
        kk: 'Аңыздың басталуы',
        ru: 'Начало легенды',
        en: 'Beginning of the legend'
      },
      'legend.chapter1.content': {
        kk: 'Ежелгі аңыздар бойынша, Ұлы су тасқынынан кейін дәл Қазығұрт тауында Нұх кемесі тоқтаған. Жергілікті тұрғындар ғасырлар бойы бұл аңызды ұрпақтан ұрпаққа жеткізген.',
        ru: 'Согласно древним легендам, именно на горе Казыгурт остановился ковчег Ноя после Великого потопа. Местные жители передавали эту легенду из поколения в поколение на протяжении веков.',
        en: 'According to ancient legends, it was on Kazygurt Mountain that Noah\'s ark stopped after the Great Flood. Local residents have passed this legend from generation to generation for centuries.'
      },
      'legend.chapter2.title': {
        kk: 'Ұлы су тасқыны',
        ru: 'Великий потоп',
        en: 'The Great Flood'
      },
      'legend.chapter2.content': {
        kk: 'Су тасқынының сулары кері шегіне бастағанда, Нұх кемесі Қазығұрт тауының шыңына жетті. Мұнда су тасқынынан құтқарылған барлық тірі жануарлар үшін жаңа өмір басталды.',
        ru: 'Когда воды потопа начали отступать, ковчег Ноя достиг вершины горы Казыгурт. Здесь началась новая жизнь для всех живых существ, спасенных от потопа.',
        en: 'When the flood waters began to recede, Noah\'s ark reached the summit of Kazygurt Mountain. Here began a new life for all living creatures saved from the flood.'
      },
      'legend.chapter3.title': {
        kk: 'Жаңа бастау',
        ru: 'Новое начало',
        en: 'New beginning'
      },
      'legend.chapter3.content': {
        kk: 'Қазығұрт тауынан Нұх пен оның отбасы жерді мекендеуге бастады. Тау бүкіл адамзат үшін үміт, қайта туу және жаңа өмір символына айналды.',
        ru: 'С горы Казыгурт Ной и его семья начали заселять землю. Гора стала символом надежды, возрождения и новой жизни для всего человечества.',
        en: 'From Kazygurt Mountain, Noah and his family began to populate the earth. The mountain became a symbol of hope, rebirth and new life for all mankind.'
      },
      'legend.chapter4.title': {
        kk: 'Қасиетті орын',
        ru: 'Священное место',
        en: 'Sacred place'
      },
      'legend.chapter4.content': {
        kk: 'Бүгінгі күні Қазығұрт тауы қасиетті орын ретінде құрметтеледі. Мұнда ежелгі тарихқа қол тигізу және аңыздық оқиғалармен байланысты сезіну үшін зияратшылар мен туристер келеді.',
        ru: 'Сегодня гора Казыгурт почитается как священное место. Сюда приходят паломники и туристы, чтобы прикоснуться к древней истории и почувствовать связь с легендарными событиями.',
        en: 'Today, Kazygurt Mountain is revered as a sacred place. Pilgrims and tourists come here to touch ancient history and feel connected to legendary events.'
      },

      // Mountain Info Section
      'mountain.title': {
        kk: 'Интерактивті тау картасы',
        ru: 'Интерактивная карта горы',
        en: 'Interactive mountain map'
      },
      'mountain.subtitle': {
        kk: 'Қазығұрт тауындағы қызықты нүктелерді зерттеңіз. Толық ақпарат алу үшін нүктелерге басыңыз',
        ru: 'Исследуйте интересные точки на горе Казыгурт. Нажмите на точки для получения полной информации',
        en: 'Explore interesting points on Kazygurt Mountain. Click on points for complete information'
      },
      'mountain.point1.title': {
        kk: 'Таудың шыңы',
        ru: 'Вершина горы',
        en: 'Mountain peak'
      },
      'mountain.point1.desc': {
        kk: 'Қазығұрт тауының ең биік нүктесі - 1768 метр',
        ru: 'Самая высокая точка горы Казыгурт - 1768 метров',
        en: 'The highest point of Kazygurt Mountain - 1768 meters'
      },
      'mountain.point2.title': {
        kk: 'Тарихи орын',
        ru: 'Историческое место',
        en: 'Historical site'
      },
      'mountain.point2.desc': {
        kk: 'Ежелгі аңыздарға сәйкес Нұх кемесі тоқтаған жер',
        ru: 'Место, где согласно древним легендам остановился ковчег Ноя',
        en: 'The place where according to ancient legends Noah\'s ark stopped'
      },
      'mountain.point3.title': {
        kk: 'Табиғи көрініс',
        ru: 'Природный вид',
        en: 'Natural view'
      },
      'mountain.point3.desc': {
        kk: 'Таудың ең әдемі көріністерінің бірі',
        ru: 'Один из самых красивых видов горы',
        en: 'One of the most beautiful views of the mountain'
      },
      'mountain.point4.title': {
        kk: 'Жол',
        ru: 'Дорога',
        en: 'Path'
      },
      'mountain.point4.desc': {
        kk: 'Тау шыңына апаратын туризмдік жол',
        ru: 'Туристическая дорога к вершине горы',
        en: 'Tourist path to the mountain peak'
      },

      // Contact Section
      'contact.title': {
        kk: 'Байланыс',
        ru: 'Контакты',
        en: 'Contact'
      },
      'contact.subtitle': {
        kk: 'Қазығұрт тауы туралы көбірек білгіңіз келе ме? Бізбен байланысыңыз!',
        ru: 'Хотите узнать больше о горе Казыгурт? Свяжитесь с нами!',
        en: 'Want to learn more about Kazygurt Mountain? Contact us!'
      },
      'contact.name': {
        kk: 'Атыңыз',
        ru: 'Ваше имя',
        en: 'Your name'
      },
      'contact.email': {
        kk: 'Электрондық пошта',
        ru: 'Электронная почта',
        en: 'Email'
      },
      'contact.message': {
        kk: 'Хабарлама',
        ru: 'Сообщение',
        en: 'Message'
      },
      'contact.send': {
        kk: 'Жіберу',
        ru: 'Отправить',
        en: 'Send'
      },

      // Footer
      'footer.description': {
        kk: 'Қазығұрт тауы - Қазақстанның тарихи және мәдени мұрасының бөлігі',
        ru: 'Гора Казыгурт - часть исторического и культурного наследия Казахстана',
        en: 'Kazygurt Mountain is part of Kazakhstan\'s historical and cultural heritage'
      },
      'footer.rights': {
        kk: 'Все права будут защищены скоро',
        ru: 'Все права будут защищены скоро',
        en: 'Все права будут защищены скоро'
      },

      // Gallery Section
      'gallery.title': {
        kk: 'Қазығұрттың галереясы',
        ru: 'Галерея Казыгурта',
        en: 'Kazygurt Gallery'
      },
      'gallery.subtitle': {
        kk: 'Қазығұрт тауының сұлулығына біздің керемет фотосуреттер жинағы арқылы сүңгіп кіріңіз',
        ru: 'Погрузитесь в красоту горы Казыгурт через нашу коллекцию потрясающих фотографий',
        en: 'Immerse yourself in the beauty of Kazygurt Mountain through our collection of stunning photographs'
      },
      'gallery.all': {
        kk: 'Барлығы',
        ru: 'Все',
        en: 'All'
      },
      'gallery.landscapes': {
        kk: 'Пейзаждар',
        ru: 'Пейзажи',
        en: 'Landscapes'
      },
      'gallery.peak': {
        kk: 'Шың',
        ru: 'Вершина',
        en: 'Peak'
      },
      'gallery.nature': {
        kk: 'Табиғат',
        ru: 'Природа',
        en: 'Nature'
      },
      'gallery.caves': {
        kk: 'Үңгірлер',
        ru: 'Пещеры',
        en: 'Caves'
      },
      'gallery.previous': {
        kk: 'Алдыңғы',
        ru: 'Предыдущая',
        en: 'Previous'
      },
      'gallery.next': {
        kk: 'Келесі',
        ru: 'Следующая',
        en: 'Next'
      },
      'gallery.close': {
        kk: 'Жабу',
        ru: 'Закрыть',
        en: 'Close'
      },

      // Contact Section - Additional translations
      'contact.location.title': {
        kk: 'Мекенжай және қалай жету керек',
        ru: 'Адрес и как добраться',
        en: 'Location and how to get there'
      },
      'contact.location.subtitle': {
        kk: 'Қазығұрт тауының орналасуы және оған қалай жету керектігі туралы ақпарат',
        ru: 'Информация о расположении горы Казыгурт и как до неё добраться',
        en: 'Information about the location of Kazygurt Mountain and how to get there'
      },
      'contact.address': {
        kk: 'Мекенжай',
        ru: 'Адрес',
        en: 'Address'
      },
      'contact.address.details': {
        kk: 'Қазығұрт тауы, Оңтүстік Қазақстан облысы, Қазақстан',
        ru: 'Гора Казыгурт, Южно-Казахстанская область, Казахстан',
        en: 'Kazygurt Mountain, South Kazakhstan Region, Kazakhstan'
      },
      'contact.coordinates': {
        kk: 'Координаттар: 42.5°N, 70.0°E',
        ru: 'Координаты: 42.5°N, 70.0°E',
        en: 'Coordinates: 42.5°N, 70.0°E'
      },
      'contact.distance.almaty': {
        kk: 'Алматыдан арақашықтығы: 280 км',
        ru: 'Расстояние от Алматы: 280 км',
        en: 'Distance from Almaty: 280 km'
      },
      'contact.distance.shymkent': {
        kk: 'Шымкенттен арақашықтығы: 120 км',
        ru: 'Расстояние от Шымкента: 120 км',
        en: 'Distance from Shymkent: 120 km'
      },
      'contact.transport.car': {
        kk: 'Автокөлікпен',
        ru: 'На автомобиле',
        en: 'By car'
      },
      'contact.transport.car.almaty': {
        kk: 'Алматыдан: А-2 трассасы бойынша 3-4 сағат',
        ru: 'Из Алматы: по трассе А-2 3-4 часа',
        en: 'From Almaty: via A-2 highway 3-4 hours'
      },
      'contact.transport.car.shymkent': {
        kk: 'Шымкенттен: аймақтық жол бойынша 1-2 сағат',
        ru: 'Из Шымкента: по региональной дороге 1-2 часа',
        en: 'From Shymkent: via regional road 1-2 hours'
      },
      'contact.transport.car.tip': {
        kk: '💡 Тауға көтерілу үшін жер асты көлігі ұсынылады',
        ru: '💡 Для подъема на гору рекомендуется внедорожник',
        en: '💡 Off-road vehicle recommended for mountain climbing'
      },
      'contact.transport.bus': {
        kk: 'Автобуспен',
        ru: 'На автобусе',
        en: 'By bus'
      },
      'contact.transport.bus.routes': {
        kk: 'Алматы мен Шымкенттен тұрақты рейстер',
        ru: 'Регулярные рейсы из Алматы и Шымкента',
        en: 'Regular routes from Almaty and Shymkent'
      },
      'contact.transport.bus.stop': {
        kk: 'Аялдама: Қазығұрт ауылы',
        ru: 'Остановка: село Казыгурт',
        en: 'Stop: Kazygurt village'
      },
      'contact.transport.bus.tip': {
        kk: '💡 Аялдамадан тауға дейін 2 км жаяу',
        ru: '💡 От остановки до горы 2 км пешком',
        en: '💡 2 km walk from stop to mountain'
      },
      'contact.transport.plane': {
        kk: 'Ұшақпен',
        ru: 'На самолете',
        en: 'By plane'
      },
      'contact.transport.plane.airport': {
        kk: 'Ең жақын әуежай: Шымкент',
        ru: 'Ближайший аэропорт: Шымкент',
        en: 'Nearest airport: Shymkent'
      },
      'contact.transport.plane.transfer': {
        kk: 'Одан әрі тауға дейін трансфер (1-2 сағат)',
        ru: 'Далее трансфер до горы (1-2 часа)',
        en: 'Further transfer to mountain (1-2 hours)'
      },
      'contact.transport.plane.tip': {
        kk: '💡 Трансферді алдын ала брондаңыз',
        ru: '💡 Забронируйте трансфер заранее',
        en: '💡 Book transfer in advance'
      },

      // Mountain Info - Additional translations
      'mountain.controls': {
        kk: 'Басқару',
        ru: 'Управление',
        en: 'Controls'
      },
      'mountain.controls.tip': {
        kk: 'Негізгі орындар туралы ақпарат алу үшін түсті нүктелерге басыңыз',
        ru: 'Нажмите на цветные точки для получения информации об основных местах',
        en: 'Click on colored points for information about main locations'
      },
      'mountain.point.info': {
        kk: 'Нүкте туралы ақпарат',
        ru: 'Информация о точке',
        en: 'Point information'
      },
      'mountain.interactive.points': {
        kk: 'Интерактивті нүктелер',
        ru: 'Интерактивные точки',
        en: 'Interactive points'
      },
      'mountain.full.info': {
        kk: 'Толық ақпарат',
        ru: 'Полная информация',
        en: 'Full information'
      },
      'mountain.full.info.desc': {
        kk: 'Таудағы әрбір қызықты орын туралы көбірек біліңіз',
        ru: 'Узнайте больше о каждом интересном месте на горе',
        en: 'Learn more about every interesting place on the mountain'
      },
      'mountain.visual.view': {
        kk: 'Көрнекі көрініс',
        ru: 'Визуальный вид',
        en: 'Visual view'
      },
      'mountain.visual.view.desc': {
        kk: 'Анимирленген элементтері бар таудың әдемі көрінісі',
        ru: 'Красивый вид горы с анимированными элементами',
        en: 'Beautiful view of the mountain with animated elements'
      },

      // Legend - Additional translations
      'legend.modern.significance': {
        kk: 'Аңыздың қазіргі заман үшін маңызы',
        ru: 'Значение легенды для современности',
        en: 'Significance of the legend for modern times'
      },
      'legend.cultural.heritage': {
        kk: 'Мәдени мұра',
        ru: 'Культурное наследие',
        en: 'Cultural heritage'
      },
      'legend.cultural.heritage.desc': {
        kk: 'Аңыз аймақтың мәдени мұрасының маңызды бөлігі болып табылады',
        ru: 'Легенда является важной частью культурного наследия региона',
        en: 'The legend is an important part of the region\'s cultural heritage'
      },
      'legend.spiritual.significance': {
        kk: 'Рухани маңыз',
        ru: 'Духовное значение',
        en: 'Spiritual significance'
      },
      'legend.spiritual.significance.desc': {
        kk: 'Орын имандылар үшін ерекше рухани маңызға ие',
        ru: 'Место имеет особое духовное значение для верующих',
        en: 'The place has special spiritual significance for believers'
      },
      'legend.tourism.appeal': {
        kk: 'Туризмдік тартымдылық',
        ru: 'Туристическая привлекательность',
        en: 'Tourist appeal'
      },
      'legend.tourism.appeal.desc': {
        kk: 'Тарихымен әлемнің барлық бұрыштарынан туристерді тартады',
        ru: 'Привлекает туристов со всех уголков мира своей историей',
        en: 'Attracts tourists from all corners of the world with its history'
      },

      // Footer - Additional translations
      'footer.about.links': {
        kk: 'Тау туралы',
        ru: 'О горе',
        en: 'About mountain'
      },
      'footer.services.tours': {
        kk: 'Туризмдік турлар',
        ru: 'Туристические туры',
        en: 'Tourist tours'
      },
      'footer.services.excursions': {
        kk: 'Экскурсиялар',
        ru: 'Экскурсии',
        en: 'Excursions'
      },
      'footer.services.hiking': {
        kk: 'Тау жорықтары',
        ru: 'Горные походы',
        en: 'Mountain hiking'
      },
      'footer.services.photos': {
        kk: 'Фотосессиялар',
        ru: 'Фотосессии',
        en: 'Photo sessions'
      },
      'footer.info.how_to_get': {
        kk: 'Қалай жету керек',
        ru: 'Как добраться',
        en: 'How to get there'
      },
      'footer.info.accommodation': {
        kk: 'Тұру',
        ru: 'Проживание',
        en: 'Accommodation'
      },
      'footer.info.weather': {
        kk: 'Ауа райы',
        ru: 'Погода',
        en: 'Weather'
      },
      'footer.info.safety': {
        kk: 'Қауіпсіздік',
        ru: 'Безопасность',
        en: 'Safety'
      },
      'footer.newsletter.title': {
        kk: 'Жаңалықтарға жазылыңыз',
        ru: 'Подпишитесь на новости',
        en: 'Subscribe to news'
      },
      'footer.newsletter.desc': {
        kk: 'Жаңа турлар мен арнайы ұсыныстар туралы ақпарат алыңыз',
        ru: 'Получайте информацию о новых турах и специальных предложениях',
        en: 'Get information about new tours and special offers'
      },
      'footer.newsletter.email': {
        kk: 'Сіздің email',
        ru: 'Ваш email',
        en: 'Your email'
      },
      'footer.newsletter.subscribe': {
        kk: 'Жазылу',
        ru: 'Подписаться',
        en: 'Subscribe'
      },
      'footer.privacy': {
        kk: 'Құпиялылық саясаты',
        ru: 'Политика конфиденциальности',
        en: 'Privacy policy'
      },
      'footer.terms': {
        kk: 'Пайдалану шарттары',
        ru: 'Условия использования',
        en: 'Terms of use'
      },
      'footer.authors': {
        kk: 'Авторлар',
        ru: 'Авторы',
        en: 'Authors'
      },

      // Gallery images
      'gallery.image1.title': {
        kk: 'Қазығұрт үстіндегі күн шығу',
        ru: 'Восход солнца над Казыгуртом',
        en: 'Sunrise over Kazygurt'
      },
      'gallery.image1.desc': {
        kk: 'Таңғы күн сәулелеріндегі таудың керемет көрінісі',
        ru: 'Прекрасный вид горы в лучах утреннего солнца',
        en: 'Beautiful mountain view in the morning sunlight'
      },
      'gallery.image2.title': {
        kk: 'Аңыздың шыңы',
        ru: 'Вершина легенды',
        en: 'Peak of legend'
      },
      'gallery.image2.desc': {
        kk: 'Аңыз бойынша Нұх кемесі тоқтаған сырлы шың',
        ru: 'Таинственная вершина, где по легенде остановился ковчег Ноя',
        en: 'Mysterious peak where Noah\'s ark stopped according to legend'
      },
      'gallery.image3.title': {
        kk: 'Жасыл беткейлер',
        ru: 'Зеленые склоны',
        en: 'Green slopes'
      },
      'gallery.image3.desc': {
        kk: 'Тау беткейлеріндегі бай өсімдіктер',
        ru: 'Богатая растительность на склонах горы',
        en: 'Rich vegetation on mountain slopes'
      },
      'gallery.image4.title': {
        kk: 'Қасиетті үңгір',
        ru: 'Священная пещера',
        en: 'Sacred cave'
      },
      'gallery.image4.desc': {
        kk: 'Нұх аңызымен байланысты ежелгі үңгір',
        ru: 'Древняя пещера, связанная с легендой о Ное',
        en: 'Ancient cave associated with the legend of Noah'
      },
      'gallery.image5.title': {
        kk: 'Алтын күн бату',
        ru: 'Золотой закат',
        en: 'Golden sunset'
      },
      'gallery.image5.desc': {
        kk: 'Тауды алтын түстерге бояйтын сиқырлы күн бату',
        ru: 'Волшебный закат, окрашивающий гору в золотые цвета',
        en: 'Magical sunset painting the mountain in golden colors'
      },
      'gallery.image6.title': {
        kk: 'Қасиетті көз',
        ru: 'Священный источник',
        en: 'Sacred spring'
      },
      'gallery.image6.desc': {
        kk: 'Емдік суы бар таза тау бұлағы',
        ru: 'Чистый горный источник с целебной водой',
        en: 'Pure mountain spring with healing water'
      },
      'gallery.image7.title': {
        kk: 'Жұлдызды түн',
        ru: 'Звездная ночь',
        en: 'Starry night'
      },
      'gallery.image7.desc': {
        kk: 'Жұлдызды аспан астындағы тау - сенімсіз сұлулық көрінісі',
        ru: 'Гора под звездным небом - невероятно красивый вид',
        en: 'Mountain under starry sky - incredibly beautiful view'
      },

      // Mountain map
      'mountain.name': {
        kk: 'Қазығұрт тауы',
        ru: 'Гора Казыгурт',
        en: 'Kazygurt Mountain'
      },
      'mountain.region': {
        kk: 'Оңтүстік Қазақстан облысы',
        ru: 'Южно-Казахстанская область',
        en: 'South Kazakhstan Region'
      }
    }

    const translation = translations[key as keyof typeof translations]
    if (translation && typeof translation === 'object') {
      return translation[language] || key
    }
    return key
  }

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider')
  }
  return context
}
