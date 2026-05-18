'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { images } from '@/config/images'

const links = [
  { href: '#menu', label: 'Menú' },
  { href: '#galeria', label: 'Galería' },
  { href: '#bebidas', label: 'Bebidas' },
  { href: '#locales', label: 'Locales' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-dark-900/95 backdrop-blur-sm border-b border-white/10' : 'bg-transparent'
      }`}
    >
      <div className="container-custom flex items-center justify-between h-16 md:h-20">
        <a href="#" className="flex-none">
          <img src={images.logo} alt="LINA CAFÉ" className="h-10 md:h-12 w-auto" />
        </a>

        <nav className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="font-display font-bold text-xs tracking-[0.2em] uppercase text-white/70 hover:text-white transition-colors"
            >
              {l.label}
            </a>
          ))}
          <a
            href="https://www.instagram.com/linacafepalermo/"
            target="_blank"
            rel="noopener noreferrer"
            className="font-display font-bold text-xs tracking-[0.2em] uppercase px-5 py-2.5 border-2 border-lina-500 text-lina-500 hover:bg-lina-500 hover:text-white transition-all"
          >
            Instagram
          </a>
        </nav>

        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setOpen(!open)}
          aria-label="Menú"
        >
          <span className="block w-6 h-0.5 bg-white transition-all" />
          <span className="block w-6 h-0.5 bg-white transition-all" />
          <span className="block w-6 h-0.5 bg-white transition-all" />
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-dark-800 border-t border-white/10 overflow-hidden"
          >
            <div className="container-custom py-6 flex flex-col gap-5">
              {links.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="font-display font-bold text-xs tracking-[0.2em] uppercase text-white/70 hover:text-white transition-colors"
                >
                  {l.label}
                </a>
              ))}
              <a
                href="https://www.instagram.com/linacafepalermo/"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-lina self-start"
              >
                Instagram
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
