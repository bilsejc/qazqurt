'use client'

import { useState, useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Mountain, MapPin, Calendar, Users, Star, ChevronRight } from 'lucide-react'

const AboutSection = () => {
  const [activeFact, setActiveFact] = useState(0)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const facts = [
    {
      icon: <Mountain className="h-8 w-8" />,
      title: "Биіктігі",
      value: "1,768 м",
      description: "Теңіз деңгейінен"
    },
    {
      icon: <MapPin className="h-8 w-8" />,
      title: "Орналасуы",
      value: "Оңтүстік Қазақстан",
      description: "Оңтүстік Қазақстан облысы"
    },
    {
      icon: <Calendar className="h-8 w-8" />,
      title: "Жасы",
      value: "~65 млн жыл",
      description: "Бор кезеңінде қалыптасқан"
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "Қонақтар",
      value: "10,000+",
      description: "Жылына туристер"
    }
  ]

  const features = [
    {
      title: "Геологиялық керемет",
      description: "Қазығұрт тауы бай қалыптасу тарихы бар бірегей геологиялық құрылымды білдіреді.",
      image: "/images/geology.jpg"
    },
    {
      title: "Биоалуантүрлілік",
      description: "Тау беткейлерінде дала аймағына тән сирек өсімдік және жануар түрлерінің көптеген түрлері мекендейді.",
      image: "/images/biodiversity.jpg"
    },
    {
      title: "Мәдени мұра",
      description: "Тау жергілікті тұрғындар үшін үлкен маңызға ие және Қазақстанның мәдени мұрасының бөлігі болып табылады.",
      image: "/images/culture.jpg"
    },
    {
      title: "Туризмдік әлеует",
      description: "Жыл сайын тау ежелгі сырларға қол тигізгісі келетін көбірек туристерді тартады.",
      image: "/images/tourism.jpg"
    }
  ]

  return (
    <section id="about" ref={ref} className="section-padding bg-gradient-to-b from-sky-50 to-white">
      <div className="container-max">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            <span className="text-gradient">Қазығұрт</span> тауы туралы
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Мыңжылдық сырларды өзінде сақтаған ежелгі тау, бірегей сұлулығымен 
            әлемнің барлық бұрыштарынан келген саяхатшыларды шабыттандырады
          </p>
        </motion.div>

        {/* Facts Grid */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20"
        >
          {facts.map((fact, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05, y: -5 }}
              className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 text-center"
            >
              <div className="text-nature-600 mb-4 flex justify-center">
                {fact.icon}
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">{fact.value}</h3>
              <p className="text-nature-600 font-semibold mb-1">{fact.title}</p>
              <p className="text-gray-500 text-sm">{fact.description}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Interactive Features */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Features List */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-6"
          >
            <h3 className="text-3xl font-bold text-gray-900 mb-8">
              Тауды ерекше ететін нәрсе не?
            </h3>
            
            {features.map((feature, index) => (
              <motion.div
                key={index}
                whileHover={{ x: 10 }}
                className={`p-6 rounded-xl cursor-pointer transition-all duration-300 ${
                  activeFact === index
                    ? 'bg-nature-50 border-l-4 border-nature-500 shadow-lg'
                    : 'bg-white hover:bg-gray-50 shadow-md'
                }`}
                onClick={() => setActiveFact(index)}
              >
                <div className="flex items-start space-x-4">
                  <div className={`p-2 rounded-lg ${
                    activeFact === index ? 'bg-nature-500 text-white' : 'bg-gray-100 text-gray-600'
                  }`}>
                    <ChevronRight className={`h-5 w-5 transition-transform duration-300 ${
                      activeFact === index ? 'rotate-90' : ''
                    }`} />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-xl font-semibold text-gray-900 mb-2">
                      {feature.title}
                    </h4>
                    <p className="text-gray-600 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Interactive Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <motion.img
                key={activeFact}
                initial={{ opacity: 0, scale: 1.1 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                src={features[activeFact].image}
                alt={features[activeFact].title}
                className="w-full h-96 object-cover"
              />
              
              {/* Overlay with feature info */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6"
              >
                <h4 className="text-white text-xl font-semibold mb-2">
                  {features[activeFact].title}
                </h4>
                <p className="text-gray-200 text-sm">
                  {features[activeFact].description}
                </p>
              </motion.div>

              {/* Floating elements */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full p-3 shadow-lg"
              >
                <Star className="h-6 w-6 text-yellow-500" />
              </motion.div>
            </div>

            {/* Image indicators */}
            <div className="flex justify-center space-x-2 mt-6">
              {features.map((_, index) => (
                <motion.button
                  key={index}
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={() => setActiveFact(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    activeFact === index ? 'bg-nature-500' : 'bg-gray-300'
                  }`}
                />
              ))}
            </div>
          </motion.div>
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-nature-500 to-sky-500 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">
              Бұл керемет тауды өзіңіз үшін ашқыңыз келе ме?
            </h3>
            <p className="text-lg mb-6 opacity-90">
              Қазығұрт тауының сиқырын өздері үшін ашқан мыңдаған саяхатшыларға қосылыңыз
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-nature-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors duration-300"
            >
              Көбірек білу
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default AboutSection
