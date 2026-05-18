'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { images } from '@/config/images'

export default function Gallery() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="galeria" ref={ref} className="py-24 md:py-36 bg-dark-800">
      <div className="container-custom">

        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="section-label">Galería</span>
          <h2 className="section-title text-white">
            El Espacio
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 md:gap-3">
          {images.gallery.map((src, i) => (
            <motion.div
              key={src}
              className={`overflow-hidden ${i === 0 ? 'col-span-2 row-span-2' : ''}`}
              style={{ height: i === 0 ? '500px' : '240px' }}
              initial={{ opacity: 0, scale: 0.96 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.03 * i }}
            >
              <img
                src={src}
                alt={`LINA CAFÉ ${i + 1}`}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}
