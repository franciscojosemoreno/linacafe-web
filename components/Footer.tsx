import { images } from '@/config/images'
import { siteConfig } from '@/config/site'

export default function Footer() {
  return (
    <footer className="bg-dark-900 border-t border-white/10 text-white py-16 md:py-20">
      <div className="container-custom">

        <div className="grid md:grid-cols-3 gap-10 mb-12">
          {/* Brand */}
          <div>
            <img src={images.logo} alt="LINA CAFÉ" className="h-12 w-auto mb-4" />
            <p className="font-serif italic text-white/40 text-sm leading-relaxed max-w-xs">
              {siteConfig.tagline}
            </p>
            <div className="flex gap-4 mt-5">
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
            <p className="font-display font-bold text-xs tracking-[0.2em] uppercase text-white/30 mb-5">
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
              <p className="font-sans text-xs text-white/30 mt-1">{siteConfig.location.address}</p>
              <p className="font-sans text-xs text-white/20">{siteConfig.location.neighborhood}</p>
              <p className="font-sans text-xs text-white/30 mt-2">{siteConfig.location.hours}</p>
            </a>
          </div>

          {/* Menú */}
          <div>
            <p className="font-display font-bold text-xs tracking-[0.2em] uppercase text-white/30 mb-5">
              Menú
            </p>
            <div className="flex flex-col gap-2 mt-2">
              {['Specialty Coffee', 'Bebidas & Jugos', 'Para Comer', 'Sin TACC · Vegano', 'Para Entonarse'].map((cat) => (
                <span key={cat} className="font-sans text-xs text-white/25">{cat}</span>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
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
