'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { siteConfig } from '@/config/site'

export default function SignatureDrinks() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="bebidas" ref={ref} className="py-24 md:py-36 bg-lina-600 overflow-hidden">
      <div className="container-custom">

        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="section-label text-white/60">Para Entonarse</span>
          <h2 className="section-title text-white mb-5">
            Nuestras Bebidas<br />Signature
          </h2>
          <p className="font-sans text-sm text-white/60 max-w-md mx-auto">
            Happy Hour todos los días desde las 17 hs. Creadas para el final de tarde y para quedarse.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 md:gap-8">
          {siteConfig.signatureDrinks.map((drink, i) => (
            <motion.div
              key={drink.id}
              className="group flex flex-col items-center text-center"
              initial={{ opacity: 0, y: 60 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.1 + i * 0.07, ease: 'easeOut' }}
            >
              <div className="relative w-full flex justify-center mb-8">
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-40 h-20 bg-white/10 rounded-full blur-2xl" />
                <motion.img
                  src={drink.image}
                  alt={drink.name}
                  className="relative z-10 h-[280px] md:h-[340px] w-auto object-contain drop-shadow-2xl group-hover:scale-105 transition-transform duration-700"
                  style={{ filter: 'drop-shadow(0 20px 40px rgba(0,0,0,0.25))' }}
                />
              </div>

              <div className="w-8 h-0.5 bg-white/50 mb-4" />

              <h3 className="font-display font-black text-2xl md:text-3xl uppercase tracking-wide text-white mb-3 leading-tight">
                {drink.name}
              </h3>

              <p className="font-sans text-xs text-white/60 leading-relaxed max-w-[220px]">
                {drink.description}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.7 }}
        >
          <div className="border border-white/30 inline-block px-10 py-6 text-center">
            <p className="font-display font-black text-xs tracking-[0.25em] uppercase text-white/70 mb-1">
              Happy Hour
            </p>
            <p className="font-serif italic text-white/80 text-sm">
              Todos los días desde las 17 hs
            </p>
          </div>
        </motion.div>

      </div>
    </section>
  )
}
