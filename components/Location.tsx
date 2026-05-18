'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { siteConfig } from '@/config/site'

export default function Location() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  const loc = siteConfig.location

  return (
    <section id="locales" ref={ref} className="py-28 md:py-40 bg-cream-100">
      <div className="container-custom">

        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="section-label">Dónde estamos</span>
          <h2 className="section-title text-dark-900">
            Visitanos
          </h2>
        </motion.div>

        {/* items-stretch hace que la tarjeta y el mapa tengan la misma altura */}
        <div className="grid md:grid-cols-2 gap-0 items-stretch">

          {/* Info card */}
          <motion.div
            className="bg-white border border-dark-900/10 p-10 md:p-14 flex flex-col justify-between"
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <div>
              <h3 className="font-display font-black text-2xl uppercase tracking-wide text-dark-900 mb-10">
                {loc.name}
              </h3>

              <div className="flex flex-col gap-8">
                {/* Address */}
                <div>
                  <p className="font-display font-bold text-[10px] tracking-[0.2em] uppercase text-lina-500 mb-2">
                    Dirección
                  </p>
                  <p className="font-sans text-sm text-dark-900/70">{loc.address}</p>
                  <p className="font-sans text-xs text-dark-900/40 mt-1">{loc.neighborhood}</p>
                </div>

                {/* Hours */}
                <div>
                  <p className="font-display font-bold text-[10px] tracking-[0.2em] uppercase text-lina-500 mb-2">
                    Horarios
                  </p>
                  <p className="font-sans text-sm text-dark-900/70">{loc.hours}</p>
                </div>

                {/* Happy hour */}
                <div>
                  <p className="font-display font-bold text-[10px] tracking-[0.2em] uppercase text-warm-500 mb-2">
                    Happy Hour
                  </p>
                  <p className="font-sans text-sm text-dark-900/70">{loc.happyHour}</p>
                </div>
              </div>
            </div>

            <a
              href={loc.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-lina mt-12 inline-block self-start"
            >
              Cómo llegar →
            </a>
          </motion.div>

          {/* Map — misma altura que la tarjeta */}
          <motion.div
            className="min-h-[420px] overflow-hidden"
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <iframe
              src={loc.mapSrc}
              width="100%"
              height="100%"
              style={{ border: 0, display: 'block', height: '100%', minHeight: '420px' }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title={`Mapa ${loc.name}`}
            />
          </motion.div>

        </div>

      </div>
    </section>
  )
}
