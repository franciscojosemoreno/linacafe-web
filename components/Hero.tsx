'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { images } from '@/config/images'
import { siteConfig } from '@/config/site'

export default function Hero() {
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    const id = setInterval(() => {
      setCurrent((c) => (c + 1) % images.carousel.length)
    }, 4500)
    return () => clearInterval(id)
  }, [])

  return (
    <section className="relative h-screen min-h-[600px] overflow-hidden">
      {/* Carousel */}
      <AnimatePresence initial={false}>
        <motion.img
          key={current}
          src={images.carousel[current]}
          alt=""
          className="absolute inset-0 w-full h-full object-cover"
          initial={{ opacity: 0, scale: 1.04 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
        />
      </AnimatePresence>

      {/* Overlay */}
      <div className="absolute inset-0 bg-dark-900/55" />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-6">
        <motion.span
          className="section-label text-warm-300 mb-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Palermo · Buenos Aires
        </motion.span>

        <motion.h1
          className="font-display font-black text-white uppercase leading-none tracking-tight mb-6"
          style={{ fontSize: 'clamp(3.5rem, 12vw, 9rem)' }}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
        >
          LINA<br />CAFÉ
        </motion.h1>

        <motion.p
          className="font-serif italic text-white/70 text-lg md:text-xl mb-10 max-w-sm"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          {siteConfig.tagline}
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.65 }}
        >
          <a href="#menu" className="btn-lina">
            Ver Menú
          </a>
          <a href="#locales" className="btn-outline-white">
            Cómo llegar
          </a>
        </motion.div>

        {/* Location tag */}
        <motion.div
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex items-center gap-2 text-white/50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.9 }}
        >
          <div className="w-4 h-0.5 bg-white/30" />
          <span className="font-display font-bold text-[10px] tracking-[0.2em] uppercase">
            Costa Rica 4568 · Plaza Armenia
          </span>
          <div className="w-4 h-0.5 bg-white/30" />
        </motion.div>
      </div>

      {/* Dot indicators */}
      <div className="absolute bottom-8 right-8 flex gap-1.5 z-10">
        {images.carousel.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`w-1.5 h-1.5 rounded-full transition-all ${
              i === current ? 'bg-white w-5' : 'bg-white/40'
            }`}
          />
        ))}
      </div>
    </section>
  )
}
