import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X, MessageCircle, MapPin, Phone, Clock } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const whatsappNumber = "573001234567"; // Número ficticio colombiano
  const whatsappMessage = "¡Hola! Me interesa conocer más sobre sus productos y servicios 😊";

  const handleWhatsAppClick = () => {
    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;
    window.open(url, '_blank');
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <>
      {/* Info Bar */}
      <div className="bg-primary text-primary-foreground py-2 px-4 text-sm">
        <div className="container mx-auto flex flex-col sm:flex-row items-center justify-between gap-2">
          <div className="flex items-center gap-4 text-xs sm:text-sm">
            <div className="flex items-center gap-1">
              <MapPin className="w-3 h-3" />
              <span>Rionegro, Antioquia</span>
            </div>
            <div className="flex items-center gap-1">
              <Phone className="w-3 h-3" />
              <span>+57 300 123 4567</span>
            </div>
            <div className="flex items-center gap-1">
              <Clock className="w-3 h-3" />
              <span>Lun-Vie 7AM-6PM, Sáb 7AM-5PM</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header 
        className={`sticky top-0 z-50 transition-all duration-300 ${
          isScrolled 
            ? 'bg-background/95 backdrop-blur-md shadow-elegant' 
            : 'bg-background'
        }`}
      >
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-lg">F</span>
              </div>
              <div>
                <h1 className="text-2xl font-bold text-primary">FerreRionegro</h1>
                <p className="text-xs text-muted-foreground">Ferretería y Repuestos</p>
              </div>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-8">
              <button
                onClick={() => scrollToSection('inicio')}
                className="text-foreground hover:text-primary transition-colors font-medium"
              >
                Inicio
              </button>
              <button
                onClick={() => scrollToSection('catalogo')}
                className="text-foreground hover:text-primary transition-colors font-medium"
              >
                Catálogo
              </button>
              <button
                onClick={() => scrollToSection('categorias')}
                className="text-foreground hover:text-primary transition-colors font-medium"
              >
                Categorías
              </button>
              <button
                onClick={() => scrollToSection('nosotros')}
                className="text-foreground hover:text-primary transition-colors font-medium"
              >
                Nosotros
              </button>
              <button
                onClick={() => scrollToSection('contacto')}
                className="text-foreground hover:text-primary transition-colors font-medium"
              >
                Contacto
              </button>
            </nav>

            {/* WhatsApp Button & Mobile Menu */}
            <div className="flex items-center gap-4">
              <Button
                onClick={handleWhatsAppClick}
                className="btn-whatsapp hidden sm:flex"
              >
                <MessageCircle className="w-4 h-4" />
                Cotizar por WhatsApp
              </Button>

              <Button
                onClick={handleWhatsAppClick}
                className="btn-whatsapp sm:hidden"
                size="sm"
              >
                <MessageCircle className="w-4 h-4" />
              </Button>

              {/* Mobile Menu Button */}
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="lg:hidden"
              >
                {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </Button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <nav className="lg:hidden mt-4 pb-4 border-t border-border pt-4 animate-fade-up">
              <div className="flex flex-col gap-3">
                <button
                  onClick={() => scrollToSection('inicio')}
                  className="text-left py-2 text-foreground hover:text-primary transition-colors font-medium"
                >
                  Inicio
                </button>
                <button
                  onClick={() => scrollToSection('catalogo')}
                  className="text-left py-2 text-foreground hover:text-primary transition-colors font-medium"
                >
                  Catálogo
                </button>
                <button
                  onClick={() => scrollToSection('categorias')}
                  className="text-left py-2 text-foreground hover:text-primary transition-colors font-medium"
                >
                  Categorías
                </button>
                <button
                  onClick={() => scrollToSection('nosotros')}
                  className="text-left py-2 text-foreground hover:text-primary transition-colors font-medium"
                >
                  Nosotros
                </button>
                <button
                  onClick={() => scrollToSection('contacto')}
                  className="text-left py-2 text-foreground hover:text-primary transition-colors font-medium"
                >
                  Contacto
                </button>
              </div>
            </nav>
          )}
        </div>
      </header>
    </>
  );
};

export default Header;