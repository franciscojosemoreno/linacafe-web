'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { images } from '@/config/images'

export default function PetFriendly() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section ref={ref} className="py-24 md:py-36 bg-lina-600 overflow-hidden">
      <div className="container-custom">
        <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-center">

          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
          >
            <span className="section-label text-warm-300">Bienvenidos todos</span>
            <h2 className="section-title text-white mb-6">
              Pet<br />Friendly
            </h2>
            <p className="font-sans text-sm text-white/60 leading-relaxed max-w-sm mb-8">
              Palermo nos abraza con su cultura petfriendly. Traé a tu compañero de cuatro patas — en nuestra terraza siempre hay lugar para toda la familia.
            </p>
            <div className="flex gap-6">
              <div>
                <p className="font-display font-black text-3xl text-white">100%</p>
                <p className="font-sans text-xs text-white/40 uppercase tracking-wide mt-1">Pet Friendly</p>
              </div>
              <div className="w-px bg-white/20" />
              <div>
                <p className="font-display font-black text-3xl text-white">Terraza</p>
                <p className="font-sans text-xs text-white/40 uppercase tracking-wide mt-1">Aire libre</p>
              </div>
              <div className="w-px bg-white/20" />
              <div>
                <p className="font-display font-black text-3xl text-white">Sin TACC</p>
                <p className="font-sans text-xs text-white/40 uppercase tracking-wide mt-1">Opciones GF</p>
              </div>
            </div>
          </motion.div>

          {/* Images */}
          <motion.div
            className="grid grid-cols-2 gap-3"
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            {images.petFriendly.map((src, i) => (
              <img
                key={src}
                src={src}
                alt={`Pet friendly ${i + 1}`}
                className={`w-full object-cover ${i === 0 ? 'h-64 col-span-2' : 'h-40'}`}
              />
            ))}
          </motion.div>

        </div>
      </div>
    </section>
  )
}
