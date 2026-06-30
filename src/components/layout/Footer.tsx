import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, Linkedin, Twitter, Instagram } from "lucide-react";
import { footerLinks } from "@/data/navigation";

export function Footer() {
  return (
    <footer className="bg-primary-900 text-white pt-20 pb-8">
      <div className="container mx-auto px-6 lg:px-8">
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12 pb-12 border-b border-primary-800">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center gap-2 mb-4">
              <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-accent to-accent-600 flex items-center justify-center text-white font-bold text-lg shadow-lg shadow-accent/30">
                V
              </div>
              <span className="text-xl font-bold font-heading">
                VS<span className="text-accent">Commission</span>
              </span>
            </Link>
            <p className="text-primary-200 text-sm leading-relaxed mb-6 max-w-sm">
              Die führende Affiliate-Marketing-Plattform für den deutschsprachigen
              Raum. Wir verbinden Marken mit den besten Publishern in Deutschland,
              Österreich, Belgien und den Niederlanden.
            </p>
            <div className="space-y-2 text-sm">
              <div className="flex items-center gap-2 text-primary-200">
                <MapPin className="w-4 h-4 text-accent" />
                <span>Musterstraße 1, 10115 Berlin, Deutschland</span>
              </div>
              <div className="flex items-center gap-2 text-primary-200">
                <Mail className="w-4 h-4 text-accent" />
                <a href="mailto:info@vscommission.de" className="hover:text-accent transition-colors">
                  info@vscommission.de
                </a>
              </div>
              <div className="flex items-center gap-2 text-primary-200">
                <Phone className="w-4 h-4 text-accent" />
                <a href="tel:+493012345678" className="hover:text-accent transition-colors">
                  +49 (0) 30 1234 5678
                </a>
              </div>
            </div>
          </div>

          {/* Link Columns */}
          {Object.values(footerLinks).map((section) => (
            <div key={section.title}>
              <h3 className="font-semibold text-white mb-4 text-sm uppercase tracking-wider">
                {section.title}
              </h3>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      to={link.href}
                      className="text-primary-200 text-sm hover:text-accent transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Social & Newsletter */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 py-8 border-b border-primary-800">
          <div className="flex items-center gap-4">
            <span className="text-sm text-primary-200">Folgen Sie uns:</span>
            <div className="flex items-center gap-3">
              {[
                { icon: Linkedin, label: "LinkedIn" },
                { icon: Twitter, label: "Twitter" },
                { icon: Instagram, label: "Instagram" },
              ].map(({ icon: Icon, label }) => (
                <a
                  key={label}
                  href="#"
                  aria-label={label}
                  className="w-9 h-9 rounded-lg bg-primary-800 flex items-center justify-center text-primary-200 hover:bg-accent hover:text-white transition-all"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>
          <div className="text-sm text-primary-300">
            <span className="text-accent">●</span> System-Status: Alle Systeme
            betriebsbereit
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-primary-300">
          <div className="flex flex-col md:flex-row items-center gap-2 md:gap-6">
            <p>© {new Date().getFullYear()} VSCommission GmbH. Alle Rechte vorbehalten.</p>
            <a
              href="mailto:info@vscommission.de"
              className="inline-flex items-center gap-1.5 text-primary-200 hover:text-accent transition-colors font-medium"
            >
              <Mail className="w-4 h-4" />
              info@vscommission.de
            </a>
          </div>
          <p>
            Made with <span className="text-accent">♥</span> in Berlin
          </p>
        </div>
      </div>
    </footer>
  );
}
