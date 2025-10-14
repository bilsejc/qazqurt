'use client'

import { useState, useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { MapPin, Info, Mountain, Eye, Compass } from 'lucide-react'
import { useLanguage } from '@/contexts/LanguageContext'

const MountainInfo = () => {
  const [activePoint, setActivePoint] = useState(0)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const { t } = useLanguage()

  const pointsOfInterest = [
    {
      id: 1,
      title: t('mountain.point1.title'),
      description: t('mountain.point1.desc'),
      icon: <Mountain className="h-6 w-6" />,
      color: "bg-red-500",
      position: "top-4 left-1/2 transform -translate-x-1/2"
    },
    {
      id: 2,
      title: t('mountain.point2.title'),
      description: t('mountain.point2.desc'),
      icon: <Eye className="h-6 w-6" />,
      color: "bg-blue-500",
      position: "bottom-8 left-8"
    },
    {
      id: 3,
      title: t('mountain.point3.title'),
      description: t('mountain.point3.desc'),
      icon: <Compass className="h-6 w-6" />,
      color: "bg-green-500",
      position: "bottom-8 right-8"
    },
    {
      id: 4,
      title: t('mountain.point4.title'),
      description: t('mountain.point4.desc'),
      icon: <MapPin className="h-6 w-6" />,
      color: "bg-yellow-500",
      position: "top-1/2 left-4 transform -translate-y-1/2"
    }
  ]

  return (
    <section id="mountain-info" ref={ref} className="section-padding bg-gradient-to-b from-nature-50 to-white">
      <div className="container-max">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            {t('mountain.title')}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            {t('mountain.subtitle')}
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Interactive Mountain Map */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="bg-white rounded-2xl p-6 shadow-xl">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <MapPin className="h-6 w-6 mr-2 text-nature-600" />
                {t('mountain.name')}
              </h3>

              <div className="relative h-96 rounded-xl overflow-hidden">
                {/* Mountain Photo */}
                <img 
                  src="/images/kazygurt-mountain.jpg" 
                  alt={t('mountain.name')}
                  className="w-full h-full object-cover"
                />

                {/* Interactive Points */}
                {pointsOfInterest.map((point, index) => (
                  <motion.button
                    key={point.id}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={() => setActivePoint(point.id)}
                    className={`absolute ${point.position} p-3 ${point.color} text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 ${
                      activePoint === point.id ? 'ring-4 ring-white ring-opacity-50' : ''
                    }`}
                  >
                    {point.icon}
                  </motion.button>
                ))}

                {/* Floating clouds */}
                <motion.div
                  animate={{ x: [0, 20, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute top-4 left-8 text-2xl opacity-30"
                >
                  ☁️
                </motion.div>
                <motion.div
                  animate={{ x: [0, -15, 0] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                  className="absolute top-8 right-12 text-xl opacity-25"
                >
                  ☁️
                </motion.div>
              </div>

              {/* Instructions */}
              <div className="mt-4 bg-gray-50 rounded-lg p-4">
                <div className="flex items-center space-x-2 mb-2">
                  <Info className="h-4 w-4 text-nature-600" />
                  <h4 className="font-semibold text-gray-900">{t('mountain.controls')}</h4>
                </div>
                <p className="text-sm text-gray-600">
                  {t('mountain.controls.tip')}
                </p>
              </div>
            </div>
          </motion.div>

          {/* Point Information */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              {t('mountain.point.info')}
            </h3>
            
            {pointsOfInterest.map((point, index) => (
              <motion.div
                key={point.id}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                className={`p-6 rounded-xl cursor-pointer transition-all duration-300 ${
                  activePoint === point.id
                    ? 'bg-nature-50 border-l-4 border-nature-500 shadow-lg'
                    : 'bg-white hover:bg-gray-50 shadow-md'
                }`}
                onClick={() => setActivePoint(point.id)}
              >
                <div className="flex items-start space-x-4">
                  <div className={`p-3 rounded-lg ${
                    activePoint === point.id ? 'bg-nature-500 text-white' : 'bg-gray-100 text-gray-600'
                  }`}>
                    {point.icon}
                  </div>
                  <div className="flex-1">
                    <h4 className="text-xl font-semibold text-gray-900 mb-2">
                      {point.title}
                    </h4>
                    <p className="text-gray-600 leading-relaxed">
                      {point.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Features List */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16"
        >
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-nature-100 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <MapPin className="h-8 w-8 text-nature-600" />
              </div>
              <h4 className="text-xl font-semibold text-gray-900 mb-2">{t('mountain.interactive.points')}</h4>
              <p className="text-gray-600">
                {t('mountain.controls.tip')}
              </p>
            </div>
            <div className="text-center">
              <div className="bg-sky-100 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Info className="h-8 w-8 text-sky-600" />
              </div>
              <h4 className="text-xl font-semibold text-gray-900 mb-2">{t('mountain.full.info')}</h4>
              <p className="text-gray-600">
                {t('mountain.full.info.desc')}
              </p>
            </div>
            <div className="text-center">
              <div className="bg-mountain-100 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Eye className="h-8 w-8 text-mountain-600" />
              </div>
              <h4 className="text-xl font-semibold text-gray-900 mb-2">{t('mountain.visual.view')}</h4>
              <p className="text-gray-600">
                {t('mountain.visual.view.desc')}
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default MountainInfo
