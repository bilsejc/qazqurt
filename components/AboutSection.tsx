'use client'

import { useState, useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Mountain, MapPin, Calendar, Users, Star, ChevronRight } from 'lucide-react'
import Luma3D from './Luma3D'
import { useLanguage } from '@/contexts/LanguageContext'

const AboutSection = () => {
  const [activeFact, setActiveFact] = useState(0)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const { t } = useLanguage()

  const facts = [
    {
      icon: <Mountain className="h-8 w-8" />,
      title: t('about.height'),
      value: t('about.height.value'),
      description: t('about.height.desc')
    },
    {
      icon: <MapPin className="h-8 w-8" />,
      title: t('about.location'),
      value: t('about.location.value'),
      description: t('about.location.desc')
    },
    {
      icon: <Calendar className="h-8 w-8" />,
      title: t('about.age'),
      value: t('about.age.value'),
      description: t('about.age.desc')
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: t('about.visitors'),
      value: t('about.visitors.value'),
      description: t('about.visitors.desc')
    }
  ]

  const features = [
    {
      title: t('about.features.geology'),
      description: t('about.features.geology.desc'),
      image: "/images/geology.jpg"
    },
    {
      title: t('about.features.biodiversity'),
      description: t('about.features.biodiversity.desc'),
      image: "/images/biodiversity.jpg"
    },
    {
      title: t('about.features.culture'),
      description: t('about.features.culture.desc'),
      image: "/images/culture.jpg"
    },
    {
      title: t('about.features.tourism'),
      description: t('about.features.tourism.desc'),
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
            {t('about.title')}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            {t('about.subtitle')}
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
              {t('about.features.title')}
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

          {/* Interactive 3D Models */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="relative"
          >
            {/* 3D Models Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* First 3D Model */}
              <div className="relative">
                <Luma3D 
                  modelUrl="https://lumalabs.ai/embed/32e56d87-453b-4164-8346-d259861e81be?mode=sparkles&background=%23ffffff&color=%23000000&showTitle=true&loadBg=true&logoPosition=bottom-left&infoPosition=bottom-right&cinematicVideo=undefined&showMenu=false"
                  title="Қазығұрт тауы - 3D модель 2"
                  className="h-[300px] sm:h-[400px] md:h-[500px]"
                />
                
                {/* Feature info overlay */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4 rounded-b-2xl"
                >
                  <h4 className="text-white text-lg font-semibold mb-1">
                    {features[activeFact].title}
                  </h4>
                  <p className="text-gray-200 text-xs">
                    {features[activeFact].description}
                  </p>
                </motion.div>
              </div>

              {/* Second 3D Model */}
              <div className="relative">
                <Luma3D 
                  modelUrl="https://lumalabs.ai/embed/bd72deb2-1b0a-466f-acc6-309d19044cb4?mode=sparkles&background=%23ffffff&color=%23000000&showTitle=true&loadBg=true&logoPosition=bottom-left&infoPosition=bottom-right&cinematicVideo=undefined&showMenu=false"
                  title="Қазығұрт тауы - 3D модель"
                  className="h-[300px] sm:h-[400px] md:h-[500px]"
                />
                
                {/* Additional info overlay */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                  className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4 rounded-b-2xl"
                >
                  <h4 className="text-white text-lg font-semibold mb-1">
                    {t('about.model.title')}
                  </h4>
                  <p className="text-gray-200 text-xs">
                    {t('about.model.desc')}
                  </p>
                </motion.div>
              </div>
            </div>

            {/* Feature indicators */}
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
      </div>
    </section>
  )
}

export default AboutSection
