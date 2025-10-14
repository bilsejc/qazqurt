'use client'

export default function HomeSimple() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-sky-50 to-white">
      {/* Hero Section */}
      <section className="h-screen flex items-center justify-center bg-gradient-to-br from-nature-500 to-sky-500">
        <div className="text-center text-white">
          <h1 className="text-6xl font-bold mb-6">
            Гора Казыгурт
          </h1>
          <p className="text-2xl mb-8">
            Легенда, ожившая в сердце Казахстана
          </p>
          <button className="bg-white text-nature-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors">
            Исследовать
          </button>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">
            О горе Казыгурт
          </h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Древняя легенда
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Согласно древним преданиям, именно на горе Казыгурт остановился Ноев ковчег 
                после Великого потопа. Местные жители веками передают эту легенду из поколения в поколение.
              </p>
            </div>
            <div className="bg-gray-200 h-64 rounded-lg flex items-center justify-center">
              <p className="text-gray-500">Изображение горы</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-4 bg-gray-100">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-8">
            Контакты
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Свяжитесь с нами для получения дополнительной информации
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Адрес</h3>
              <p className="text-gray-600">Гора Казыгурт, ЮКО, Казахстан</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Телефон</h3>
              <p className="text-gray-600">+7 (727) 123-45-67</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Email</h3>
              <p className="text-gray-600">info@kazygurt-mountain.kz</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
