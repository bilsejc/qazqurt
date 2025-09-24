'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { MapPin, Navigation, Car, Bus, Plane } from 'lucide-react'

const ContactSection = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const locationInfo = [
    {
      icon: <MapPin className="h-6 w-6" />,
      title: "Мекенжай",
      details: "Қазығұрт тауы, Оңтүстік Қазақстан облысы, Қазақстан",
      description: "Координаттар: 42.5°N, 70.0°E"
    }
  ]

  const transportOptions = [
    {
      icon: <Car className="h-8 w-8" />,
      title: "Автокөлікпен",
      description: "Алматыдан: А-2 трассасы бойынша 3-4 сағат",
      details: "Шымкенттен: аймақтық жол бойынша 1-2 сағат",
      tips: "Тауға көтерілу үшін жер асты көлігі ұсынылады"
    },
    {
      icon: <Bus className="h-8 w-8" />,
      title: "Автобуспен",
      description: "Алматы мен Шымкенттен тұрақты рейстер",
      details: "Аялдама: Қазығұрт ауылы",
      tips: "Аялдамадан тауға дейін 2 км жаяу"
    },
    {
      icon: <Plane className="h-8 w-8" />,
      title: "Ұшақпен",
      description: "Ең жақын әуежай: Шымкент",
      details: "Одан әрі тауға дейін трансфер (1-2 сағат)",
      tips: "Трансферді алдын ала брондаңыз"
    }
  ]


  return (
    <section id="contact" ref={ref} className="section-padding bg-gradient-to-b from-sky-50 to-white">
      <div className="container-max">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            <span className="text-gradient">Мекенжай</span> және қалай жету керек
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Қазығұрт тауының орналасуы және оған қалай жету керектігі туралы ақпарат
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Location Information */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Мекенжай
            </h3>
            
            <div className="space-y-6">
              {locationInfo.map((info, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                  className="flex items-start space-x-4 p-4 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300"
                >
                  <div className="flex-shrink-0 p-3 bg-nature-100 rounded-lg text-nature-600">
                    {info.icon}
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-1">
                      {info.title}
                    </h4>
                    <p className="text-gray-700 font-medium mb-1">
                      {info.details}
                    </p>
                    <p className="text-gray-500 text-sm">
                      {info.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Map and Transport */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-8"
          >
            {/* Map */}
            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                <Navigation className="h-6 w-6 mr-2 text-nature-600" />
                Мекенжай
              </h3>
              <div className="relative h-64 bg-gradient-to-br from-nature-100 to-sky-100 rounded-xl overflow-hidden">
                {/* Placeholder for map - in real app would use Google Maps or similar */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <MapPin className="h-12 w-12 text-nature-600 mx-auto mb-2" />
                    <p className="text-gray-600 font-medium">Қазығұрт тауы</p>
                    <p className="text-gray-500 text-sm">Оңтүстік Қазақстан облысы</p>
                  </div>
                </div>
                
                {/* Map overlay with route info */}
                <div className="absolute bottom-4 left-4 right-4 bg-white/90 backdrop-blur-sm rounded-lg p-3">
                  <p className="text-sm text-gray-700">
                    <strong>Алматыдан арақашықтығы:</strong> 280 км
                  </p>  
                  <p className="text-sm text-gray-700">
                    <strong>Шымкенттен арақашықтығы:</strong> 120 км
                  </p>
                </div>
              </div>
            </div>

            {/* Transport Options */}
            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Қалай жету керек
              </h3>
              <div className="space-y-6">
                {transportOptions.map((option, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                    className="flex items-start space-x-4 p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors duration-300"
                  >
                    <div className="flex-shrink-0 p-3 bg-nature-100 rounded-lg text-nature-600">
                      {option.icon}
                    </div>
                    <div className="flex-1">
                      <h4 className="text-lg font-semibold text-gray-900 mb-2">
                        {option.title}
                      </h4>
                      <p className="text-gray-700 mb-1">
                        {option.description}
                      </p>
                      <p className="text-gray-600 text-sm mb-2">
                        {option.details}
                      </p>
                      <p className="text-nature-600 text-sm font-medium">
                        💡 {option.tips}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default ContactSection
