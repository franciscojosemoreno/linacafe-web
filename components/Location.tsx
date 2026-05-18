'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { siteConfig } from '@/config/site'

export default function Location() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  const loc = siteConfig.location

  return (
    <section id="locales" ref={ref} className="py-24 md:py-36 bg-cream-100">
      <div className="container-custom">

        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="section-label">Dónde estamos</span>
          <h2 className="section-title text-dark-900">
            Visitanos
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 items-start">

          {/* Info card */}
          <motion.div
            className="bg-white border border-dark-900/10 p-8 md:p-10"
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h3 className="font-display font-black text-2xl uppercase tracking-wide text-dark-900 mb-6">
              {loc.name}
            </h3>

            <div className="flex flex-col gap-5">
              {/* Address */}
              <div>
                <p className="font-display font-bold text-[10px] tracking-[0.2em] uppercase text-lina-500 mb-1">
                  Dirección
                </p>
                <p className="font-sans text-sm text-dark-900/70">{loc.address}</p>
                <p className="font-sans text-xs text-dark-900/40">{loc.neighborhood}</p>
              </div>

              {/* Hours */}
              <div>
                <p className="font-display font-bold text-[10px] tracking-[0.2em] uppercase text-lina-500 mb-1">
                  Horarios
                </p>
                <p className="font-sans text-sm text-dark-900/70">{loc.hours}</p>
              </div>

              {/* Happy hour */}
              <div>
                <p className="font-display font-bold text-[10px] tracking-[0.2em] uppercase text-warm-500 mb-1">
                  Happy Hour
                </p>
                <p className="font-sans text-sm text-dark-900/70">{loc.happyHour}</p>
              </div>
            </div>

            <a
              href={loc.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-lina mt-8 inline-block"
            >
              Cómo llegar →
            </a>
          </motion.div>

          {/* Map */}
          <motion.div
            className="h-80 md:h-full min-h-[360px] overflow-hidden"
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <iframe
              src={loc.mapSrc}
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: '360px' }}
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
