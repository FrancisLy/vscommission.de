import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { ChevronDown, Menu, X } from "lucide-react";
import { navigationItems } from "@/data/navigation";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setOpenDropdown(null);
  }, [location.pathname]);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-md shadow-primary/5 py-3"
          : "bg-transparent py-5"
      )}
    >
      <div className="container mx-auto px-6 lg:px-8">
        <nav className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group">
            <div className="flex items-center gap-2">
              <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-accent to-accent-600 flex items-center justify-center text-white font-bold text-lg shadow-lg shadow-accent/30 group-hover:scale-105 transition-transform">
                V
              </div>
              <span
                className={cn(
                  "text-xl font-bold font-heading transition-colors",
                  scrolled ? "text-primary" : "text-primary"
                )}
              >
                VS<span className="text-accent">Commission</span>
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            {navigationItems.map((item) => (
              <div
                key={item.href}
                className="relative"
                onMouseEnter={() => item.children && setOpenDropdown(item.href)}
                onMouseLeave={() => setOpenDropdown(null)}
              >
                <Link
                  to={item.href}
                  className={cn(
                    "flex items-center gap-1 px-4 py-2 rounded-lg text-sm font-medium transition-colors",
                    location.pathname === item.href ||
                      location.pathname.startsWith(item.href + "/")
                      ? "text-accent"
                      : "text-primary-700 hover:text-accent"
                  )}
                >
                  {item.label}
                  {item.children && (
                    <ChevronDown className="w-4 h-4" />
                  )}
                </Link>

                {/* Dropdown */}
                {item.children && openDropdown === item.href && (
                  <div className="absolute top-full left-0 pt-2 w-72">
                    <div className="bg-white rounded-xl shadow-xl shadow-primary/10 border border-slate-100 p-2 animate-scale-in origin-top">
                      {item.children.map((child) => (
                        <Link
                          key={child.href}
                          to={child.href}
                          className="block px-4 py-3 rounded-lg hover:bg-primary-50 transition-colors group"
                        >
                          <div className="font-semibold text-primary text-sm group-hover:text-accent transition-colors">
                            {child.label}
                          </div>
                          <div className="text-xs text-slate-500 mt-0.5">
                            {child.description}
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center gap-3">
            <Button to="/kontakt" variant="ghost" size="sm">
              Login
            </Button>
            <Button to="/fuer-werbetreibende" variant="primary" size="sm">
              Jetzt starten
            </Button>
          </div>

          {/* Mobile Toggle */}
          <button
            className="lg:hidden p-2 text-primary"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Menü öffnen"
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </nav>

        {/* Mobile Menu */}
        {mobileOpen && (
          <div className="lg:hidden mt-4 bg-white rounded-2xl shadow-xl border border-slate-100 p-4 max-h-[80vh] overflow-y-auto animate-scale-in origin-top">
            {navigationItems.map((item) => (
              <div key={item.href} className="border-b border-slate-100 last:border-0">
                <Link
                  to={item.href}
                  className="block py-3 font-medium text-primary hover:text-accent"
                >
                  {item.label}
                </Link>
                {item.children && (
                  <div className="pl-4 pb-2">
                    {item.children.map((child) => (
                      <Link
                        key={child.href}
                        to={child.href}
                        className="block py-2 text-sm text-slate-600 hover:text-accent"
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <div className="flex flex-col gap-2 mt-4">
              <Button to="/kontakt" variant="outline" size="md">
                Login
              </Button>
              <Button to="/fuer-werbetreibende" variant="primary" size="md">
                Jetzt starten
              </Button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
