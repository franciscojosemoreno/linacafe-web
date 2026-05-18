'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { siteConfig } from '@/config/site'

export default function Location() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  const loc = siteConfig.location

  return (
    <section id="locales" ref={ref} className="py-24 md:py-36 bg-white">
      <div className="container-custom">

        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="section-label">Local</span>
          <h2 className="section-title text-dark-900">
            Encontranos
          </h2>
        </motion.div>

        <motion.div
          className="border border-dark-900/10 overflow-hidden hover:border-lina-500/40 transition-colors max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          {/* Map */}
          <div className="aspect-video">
            <iframe
              src={loc.mapSrc}
              className="w-full h-full"
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
              title={loc.name}
            />
          </div>

          {/* Info */}
          <div className="p-6 bg-white">
            <h3 className="font-display font-black text-xl uppercase tracking-wide text-dark-900 mb-1">
              {loc.name}
            </h3>
            <p className="font-sans text-sm text-lina-500 mb-4">
              {loc.address} · {loc.neighborhood}
            </p>

            <div className="flex items-center gap-2 mb-2">
              <svg className="w-4 h-4 text-dark-900/30 flex-none" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <p className="font-sans text-xs text-dark-900/50">{loc.hours}</p>
            </div>

            <div className="flex items-center gap-2 mb-6">
              <svg className="w-4 h-4 text-lina-500/60 flex-none" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
              </svg>
              <p className="font-sans text-xs text-lina-500">{loc.happyHour}</p>
            </div>

            <a
              href={loc.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-lina text-xs py-3 px-5"
            >
              Cómo llegar
            </a>
          </div>
        </motion.div>

      </div>
    </section>
  )
}
