'use client'

import { useState, useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { BookOpen, RotateCcw, RotateCw, ZoomIn } from 'lucide-react'
import { useLanguage } from '@/contexts/LanguageContext'

const LegendSection = () => {
  const [currentChapter, setCurrentChapter] = useState(0)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const { t } = useLanguage()

  const legendChapters = [
    {
      title: t('legend.chapter1.title'),
      content: t('legend.chapter1.content'),
      image: "/images/legend-1.jpg"
    },
    {
      title: t('legend.chapter2.title'),
      content: t('legend.chapter2.content'),
      image: "/images/legend-2.jpg"
    },
    {
      title: t('legend.chapter3.title'),
      content: t('legend.chapter3.content'),
      image: "/images/legend-3.jpg"
    },
    {
      title: t('legend.chapter4.title'),
      content: t('legend.chapter4.content'),
      image: "/images/legend-4.jpg"
    }
  ]

  return (
    <section id="legend" ref={ref} className="section-padding bg-gradient-to-b from-white to-nature-50">
      <div className="container-max">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center mb-6">
            <BookOpen className="h-12 w-12 text-nature-600 mr-4" />
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
              {t('legend.title')}
            </h2>
          </div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            {t('legend.subtitle')}
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Legend Story */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            {/* Chapter Navigation */}
            <div className="flex space-x-2 mb-8">
              {legendChapters.map((_, index) => (
                <motion.button
                  key={index}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setCurrentChapter(index)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                    currentChapter === index
                      ? 'bg-nature-500 text-white'
                      : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                  }`}
                >
                  {index + 1}
                </motion.button>
              ))}
            </div>

            {/* Chapter Content */}
            <motion.div
              key={currentChapter}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-2xl p-8 shadow-lg"
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                {legendChapters[currentChapter].title}
              </h3>
              <p className="text-gray-600 leading-relaxed text-lg">
                {legendChapters[currentChapter].content}
              </p>
            </motion.div>

            {/* Navigation Arrows */}
            <div className="flex justify-between">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setCurrentChapter(Math.max(0, currentChapter - 1))}
                disabled={currentChapter === 0}
                className="flex items-center space-x-2 px-6 py-3 bg-gray-100 text-gray-700 rounded-full hover:bg-gray-200 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300"
              >
                <RotateCcw className="h-4 w-4" />
                <span>{t('gallery.previous')}</span>
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setCurrentChapter(Math.min(legendChapters.length - 1, currentChapter + 1))}
                disabled={currentChapter === legendChapters.length - 1}
                className="flex items-center space-x-2 px-6 py-3 bg-nature-500 text-white rounded-full hover:bg-nature-600 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300"
              >
                <span>{t('gallery.next')}</span>
                <RotateCw className="h-4 w-4" />
              </motion.button>
            </div>
          </motion.div>

          {/* 3D Ark Model */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative"
          >
            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <div className="mb-6">
                <h3 className="text-2xl font-bold text-gray-900">
                  {t('legend.title')}
                </h3>
              </div>

              <div className="h-96 bg-gradient-to-b from-sky-200 to-blue-300 rounded-xl flex items-center justify-center relative overflow-hidden">
                {/* Стилизованное изображение ковчега */}
                <div className="text-center text-gray-600">
                  <div className="relative mb-6">
                    {/* Простая CSS анимация ковчега */}
                    <div className="w-32 h-16 bg-amber-800 rounded-lg mx-auto relative animate-float">
                      <div className="absolute -top-2 left-2 right-2 h-4 bg-amber-700 rounded-t-lg"></div>
                      <div className="absolute top-1 left-1 right-1 h-2 bg-amber-600 rounded"></div>
                    </div>
                    {/* Волны */}
                    <div className="absolute -bottom-4 left-0 right-0 h-8 bg-blue-400 opacity-30 rounded-full animate-pulse"></div>
                    <div className="absolute -bottom-2 left-0 right-0 h-6 bg-blue-500 opacity-20 rounded-full animate-pulse" style={{animationDelay: '0.5s'}}></div>
                  </div>
                  <h4 className="text-xl font-semibold text-gray-800 mb-2">
                    {t('legend.title')}
                  </h4>
                  <p className="text-sm text-gray-600 max-w-xs">
                    {t('legend.subtitle')}
                  </p>
                </div>
                
                {/* Декоративные элементы */}
                <div className="absolute top-4 right-4 text-2xl opacity-20">☁️</div>
                <div className="absolute top-8 right-8 text-xl opacity-30">🕊️</div>
                <div className="absolute bottom-4 left-4 text-lg opacity-25">🌊</div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Legend Significance */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16"
        >
          <div className="bg-gradient-to-r from-nature-600 to-sky-600 rounded-2xl p-8 text-white">
            <h3 className="text-3xl font-bold mb-6 text-center">
              {t('legend.modern.significance')}
            </h3>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="bg-white/20 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <BookOpen className="h-8 w-8" />
                </div>
                <h4 className="text-xl font-semibold mb-2">{t('legend.cultural.heritage')}</h4>
                <p className="text-gray-200">
                  {t('legend.cultural.heritage.desc')}
                </p>
              </div>
              <div className="text-center">
                <div className="bg-white/20 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <RotateCcw className="h-8 w-8" />
                </div>
                <h4 className="text-xl font-semibold mb-2">{t('legend.spiritual.significance')}</h4>
                <p className="text-gray-200">
                  {t('legend.spiritual.significance.desc')}
                </p>
              </div>
              <div className="text-center">
                <div className="bg-white/20 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <ZoomIn className="h-8 w-8" />
                </div>
                <h4 className="text-xl font-semibold mb-2">{t('legend.tourism.appeal')}</h4>
                <p className="text-gray-200">
                  {t('legend.tourism.appeal.desc')}
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default LegendSection
