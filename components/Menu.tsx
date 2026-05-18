'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const categories = [
  {
    label: 'Todo el Día',
    items: ['Tostadas & Bagels', 'Yogur con granola', 'Medialunas', 'Budines & Muffins', 'Sándwiches'],
  },
  {
    label: 'Destacados',
    items: ['Huevos Benedictinos', 'Bowls veganos', 'Granola Bowl', 'Tartas del día', 'Pastelería artesanal'],
  },
  {
    label: 'Mediodía',
    items: ['Ensaladas frescas', 'Wraps', 'Focaccia del día', 'Sopas de estación', 'Tabla de quesos'],
  },
  {
    label: 'Bebidas',
    items: ['Specialty Coffee', 'Matcha Latte', 'Chai', 'Jugos naturales', 'Aguas saborizadas', 'Kombucha'],
  },
  {
    label: 'Sin TACC & Vegano',
    items: ['Opciones certificadas sin gluten', 'Leches vegetales (avena · coco)', 'Bowls 100% plant-based', 'Postres veganos'],
  },
  {
    label: 'Para Entonarse',
    items: ['La Fuerza', 'Aperol Spritz', 'Negroni', 'Vermouth', 'Gin Tonic', 'Artesano Rojo', '+ 7 más'],
  },
]

export default function Menu() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="menu" ref={ref} className="py-24 md:py-36 bg-white">
      <div className="container-custom">

        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="section-label">Menú</span>
          <h2 className="section-title text-dark-900 mb-4">
            Lo que hacemos
          </h2>
          <p className="font-sans text-sm text-dark-900/40 mt-4">
            Ingredientes de primera · Opciones veganas · Sin TACC
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((cat, i) => (
            <motion.div
              key={cat.label}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 + i * 0.1 }}
              className="border border-dark-900/10 p-6 hover:border-lina-500/50 transition-colors"
            >
              <h3 className="font-display font-black text-lg uppercase tracking-wide text-lina-500 mb-5">
                {cat.label}
              </h3>
              <ul className="flex flex-col gap-2.5">
                {cat.items.map((item) => (
                  <li key={item} className="flex items-center gap-3">
                    <div className="w-1 h-1 rounded-full bg-lina-500 flex-none" />
                    <span className="font-sans text-xs text-dark-900/60">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <a href="/menu.pdf" target="_blank" rel="noopener noreferrer" className="btn-lina">
            Ver Menú Completo →
          </a>
        </motion.div>

      </div>
    </section>
  )
}
