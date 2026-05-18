import { images } from '@/config/images'
import { siteConfig } from '@/config/site'

export default function Footer() {
  return (
    <footer className="bg-dark-900 border-t border-white/10 text-white py-20 md:py-28">
      <div className="container-custom">

        <div className="grid md:grid-cols-3 gap-12 md:gap-20 mb-16">
          {/* Brand */}
          <div>
            <img src={images.logo} alt="LINA CAFÉ" className="h-12 w-auto mb-6" />
            <p className="font-serif italic text-white/40 text-sm leading-relaxed max-w-xs mb-8">
              {siteConfig.tagline}
            </p>
            <div className="flex gap-6">
              <a
                href={siteConfig.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="font-display font-bold text-xs tracking-[0.15em] uppercase text-white/40 hover:text-lina-400 transition-colors"
              >
                Instagram
              </a>
              <a
                href={siteConfig.googleMaps}
                target="_blank"
                rel="noopener noreferrer"
                className="font-display font-bold text-xs tracking-[0.15em] uppercase text-white/40 hover:text-lina-400 transition-colors"
              >
                Google Maps
              </a>
            </div>
          </div>

          {/* Location */}
          <div>
            <p className="font-display font-bold text-xs tracking-[0.2em] uppercase text-white/30 mb-7">
              Local
            </p>
            <a
              href={siteConfig.location.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group"
            >
              <p className="font-display font-bold text-sm uppercase tracking-wide text-white/70 group-hover:text-white transition-colors">
                {siteConfig.location.name}
              </p>
              <p className="font-sans text-xs text-white/30 mt-2">{siteConfig.location.address}</p>
              <p className="font-sans text-xs text-white/20 mt-1">{siteConfig.location.neighborhood}</p>
              <p className="font-sans text-xs text-white/30 mt-3">{siteConfig.location.hours}</p>
            </a>
          </div>

          {/* Menú */}
          <div>
            <p className="font-display font-bold text-xs tracking-[0.2em] uppercase text-white/30 mb-7">
              Menú
            </p>
            <div className="flex flex-col gap-3">
              {['Specialty Coffee', 'Bebidas & Jugos', 'Para Comer', 'Sin TACC · Vegano', 'Para Entonarse'].map((cat) => (
                <span key={cat} className="font-sans text-xs text-white/30">{cat}</span>
              ))}
            </div>
            <a
              href="/menu.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="font-display font-bold text-xs tracking-[0.15em] uppercase text-lina-400 hover:text-lina-300 transition-colors mt-6 inline-block"
            >
              Ver Menú Completo →
            </a>
          </div>
        </div>

        <div className="border-t border-white/10 pt-10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="font-sans text-xs text-white/20">
            © {new Date().getFullYear()} LINA CAFÉ. Buenos Aires.
          </p>
          <a
            href="https://jmdigitalconsulting.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="font-sans text-xs text-white/15 hover:text-white/40 transition-colors"
          >
            Diseño web · JM Digital Consulting
          </a>
        </div>

      </div>
    </footer>
  )
}
