'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { siteConfig } from '@/config/site'

export default function SignatureDrinks() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="bebidas" ref={ref} className="py-32 md:py-48 bg-dark-800 overflow-hidden">
      <div className="container-custom">

        {/* Header */}
        <motion.div
          className="text-center mb-28"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="section-label text-warm-300">Para Entonarse</span>
          <h2 className="section-title text-white mb-8">
            Nuestras Bebidas<br />Signature
          </h2>
          <p className="font-sans text-sm text-white/40 max-w-md mx-auto leading-loose text-center">
            Happy Hour todos los días desde las 17 hs.<br />
            Creadas para el final de tarde y para quedarse.
          </p>
        </motion.div>

        {/* 13 drinks grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-x-6 gap-y-16 md:gap-x-10 md:gap-y-24">
          {siteConfig.signatureDrinks.map((drink, i) => (
            <motion.div
              key={drink.id}
              className="group flex flex-col items-center text-center"
              initial={{ opacity: 0, y: 60 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.05 + i * 0.07, ease: 'easeOut' }}
            >
              {/* Drink image */}
              <div className="relative w-full flex justify-center mb-8">
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-28 h-12 bg-warm-500/15 rounded-full blur-2xl" />
                <motion.img
                  src={drink.image}
                  alt={drink.name}
                  className="relative z-10 h-[200px] md:h-[240px] w-auto object-contain drop-shadow-2xl group-hover:scale-105 transition-transform duration-700"
                  style={{ filter: 'drop-shadow(0 16px 32px rgba(46,104,116,0.2))' }}
                />
              </div>

              {/* Accent line */}
              <div className="w-6 h-0.5 bg-lina-500 mb-5" />

              {/* Name */}
              <h3 className="font-display font-black text-lg md:text-xl uppercase tracking-wide text-white mb-3 leading-tight">
                {drink.name}
              </h3>

              {/* Description */}
              <p className="font-serif italic text-xs text-white/40 leading-relaxed max-w-[160px]">
                {drink.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Happy hour badge */}
        <motion.div
          className="flex justify-center mt-24"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 1.2 }}
        >
          <div className="border border-lina-500/40 px-12 py-7 text-center">
            <p className="font-display font-black text-xs tracking-[0.25em] uppercase text-lina-400 mb-2">
              Happy Hour
            </p>
            <p className="font-serif italic text-white/60 text-sm">
              Todos los días desde las 17 hs
            </p>
          </div>
        </motion.div>

      </div>
    </section>
  )
}
