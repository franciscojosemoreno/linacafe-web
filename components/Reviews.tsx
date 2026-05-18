'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const reviews = [
  {
    name: 'Valentina R.',
    stars: 5,
    text: 'Un lugar increíble. El ambiente con los libros y el café de especialidad es una combinación perfecta. Me quedé dos horas sin darme cuenta.',
  },
  {
    name: 'Matías C.',
    stars: 5,
    text: 'El mejor Negroni del barrio. Y los huevos benedictinos son de otro nivel. Ya es mi lugar fijo en Palermo.',
  },
  {
    name: 'Sofía M.',
    stars: 5,
    text: 'Vine por el café y me fui enamorada del espacio. La terraza es preciosa, el equipo es súper amable y la comida riquísima.',
  },
  {
    name: 'Joaquín B.',
    stars: 5,
    text: 'Happy hour desde las 17 y un Aperol Spritz perfectamente preparado. El Artesano Rojo es una joya. Vuelvo siempre.',
  },
  {
    name: 'Carolina F.',
    stars: 5,
    text: 'Pet friendly de verdad. Vine con mi perro y nos trataron de maravilla. La torta de limón y el flat white, impecables.',
  },
  {
    name: 'Sebastián G.',
    stars: 5,
    text: 'El lugar que le faltaba a Plaza Armenia. Café de especialidad, libros para hojear y un vermouth que vale la visita.',
  },
]

function Stars({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5 mb-3">
      {Array.from({ length: count }).map((_, i) => (
        <svg key={i} className="w-3.5 h-3.5 text-warm-500 fill-current" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  )
}

export default function Reviews() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section ref={ref} className="py-24 md:py-36 bg-cream-50">
      <div className="container-custom">

        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="section-label">Opiniones</span>
          <h2 className="section-title text-dark-900">
            Lo que dicen<br />nuestros clientes
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {reviews.map((r, i) => (
            <motion.div
              key={r.name}
              className="bg-white border border-dark-900/8 p-6 hover:border-lina-500/30 transition-colors"
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 + i * 0.08 }}
            >
              <Stars count={r.stars} />
              <p className="font-serif italic text-sm text-dark-900/70 leading-relaxed mb-4">
                {r.text}
              </p>
              <div className="flex items-center gap-2">
                <div className="w-7 h-7 rounded-full bg-lina-500/15 flex items-center justify-center">
                  <span className="font-display font-black text-xs text-lina-500">
                    {r.name[0]}
                  </span>
                </div>
                <span className="font-display font-bold text-xs tracking-wide uppercase text-dark-900/50">
                  {r.name}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Google badge */}
        <motion.div
          className="flex justify-center mt-10"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <a
            href="https://share.google/bDS68NBHV9SdEARcX"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-dark-900/40 hover:text-lina-500 transition-colors"
          >
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 15v-4H7l5-8v4h4l-5 8z" />
            </svg>
            <span className="font-sans text-xs">Ver reseñas en Google</span>
          </a>
        </motion.div>

      </div>
    </section>
  )
}
