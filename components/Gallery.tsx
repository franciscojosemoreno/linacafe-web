'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { images } from '@/config/images'

export default function Gallery() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="galeria" ref={ref} className="py-32 md:py-48 bg-cream-100">
      <div className="container-custom">

        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="section-label">Galería</span>
          <h2 className="section-title text-dark-900">
            El Espacio
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4">
          {images.gallery.map((src, i) => (
            <motion.div
              key={src}
              className={`overflow-hidden ${i === 0 ? 'col-span-2 row-span-2' : ''}`}
              initial={{ opacity: 0, scale: 0.96 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.05 + i * 0.04 }}
            >
              <img
                src={src}
                alt={`LINA CAFÉ ${i + 1}`}
                className={`w-full object-cover hover:scale-105 transition-transform duration-700 ${
                  i === 0 ? 'h-[420px] md:h-[520px]' : 'h-[190px] md:h-[240px]'
                }`}
              />
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}
