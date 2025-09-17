import React from 'react';
import { Button } from '@/components/ui/button';
import { MapPin, Phone, Clock, Mail, MessageCircle, Facebook, Instagram } from 'lucide-react';

const Footer = () => {
  const whatsappNumber = "573001234567";
  const phoneNumber = "+573001234567";
  const email = "info@ferrerionegro.com.co";

  const handleWhatsAppClick = () => {
    const message = "¡Hola! Me interesa conocer más sobre FerreRionegro 😊";
    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  const handlePhoneClick = () => {
    window.open(`tel:${phoneNumber}`, '_self');
  };

  const handleEmailClick = () => {
    window.open(`mailto:${email}`, '_self');
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const quickLinks = [
    { label: 'Inicio', action: () => scrollToSection('inicio') },
    { label: 'Catálogo', action: () => scrollToSection('catalogo') },
    { label: 'Categorías', action: () => scrollToSection('categorias') },
    { label: 'Nosotros', action: () => scrollToSection('nosotros') },
    { label: 'Contacto', action: () => scrollToSection('contacto') }
  ];

  const categories = [
    'Herramientas Eléctricas',
    'Herramientas Manuales',
    'Automotriz',
    'Construcción',
    'Seguridad Industrial',
    'Ferretería General'
  ];

  const services = [
    'Asesoría técnica especializada',
    'Búsqueda de repuestos específicos',
    'Entrega a domicilio',
    'Cotizaciones personalizadas',
    'Garantía en productos',
    'Servicio postventa'
  ];

  return (
    <footer className="bg-primary text-primary-foreground">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-secondary rounded-lg flex items-center justify-center">
                <span className="text-secondary-foreground font-bold text-lg">F</span>
              </div>
              <div>
                <h3 className="text-xl font-bold">FerreRionegro</h3>
                <p className="text-xs text-primary-foreground/80">Ferretería y Repuestos</p>
              </div>
            </div>
            
            <p className="text-primary-foreground/90 text-sm leading-relaxed">
              15 años siendo el aliado estratégico de constructores, mecánicos y emprendedores 
              en Rionegro y el Oriente Antioqueño.
            </p>

            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-sm">
                <MapPin className="w-4 h-4 text-secondary flex-shrink-0" />
                <div>
                  <div className="font-medium">Carrera 50 #25-30, Centro</div>
                  <div className="text-primary-foreground/80">Rionegro, Antioquia</div>
                </div>
              </div>
              
              <button
                onClick={handlePhoneClick}
                className="flex items-center gap-3 text-sm hover:text-secondary transition-colors"
              >
                <Phone className="w-4 h-4 text-secondary flex-shrink-0" />
                <div>
                  <div className="font-medium">+57 300 123 4567</div>
                  <div className="text-primary-foreground/80">+57 (4) 561-2345</div>
                </div>
              </button>

              <button
                onClick={handleEmailClick}
                className="flex items-center gap-3 text-sm hover:text-secondary transition-colors"
              >
                <Mail className="w-4 h-4 text-secondary flex-shrink-0" />
                <div>
                  <div className="font-medium">{email}</div>
                  <div className="text-primary-foreground/80">Respuesta en 2 horas</div>
                </div>
              </button>

              <div className="flex items-center gap-3 text-sm">
                <Clock className="w-4 h-4 text-secondary flex-shrink-0" />
                <div>
                  <div className="font-medium">Lun-Vie: 7AM-6PM</div>
                  <div className="text-primary-foreground/80">Sábado: 7AM-5PM</div>
                </div>
              </div>
            </div>

            {/* Social Media */}
            <div className="flex items-center gap-3 pt-2">
              <Button
                onClick={handleWhatsAppClick}
                size="sm"
                className="btn-whatsapp"
              >
                <MessageCircle className="w-4 h-4 mr-2" />
                WhatsApp
              </Button>
              <Button variant="outline" size="sm" className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10">
                <Facebook className="w-4 h-4" />
              </Button>
              <Button variant="outline" size="sm" className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10">
                <Instagram className="w-4 h-4" />
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-secondary">
              Enlaces Rápidos
            </h4>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <button
                    onClick={link.action}
                    className="text-primary-foreground/80 hover:text-secondary transition-colors text-sm"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Categories */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-secondary">
              Nuestras Categorías
            </h4>
            <ul className="space-y-2">
              {categories.map((category, index) => (
                <li key={index}>
                  <span className="text-primary-foreground/80 text-sm">
                    {category}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-secondary">
              Nuestros Servicios
            </h4>
            <ul className="space-y-2">
              {services.map((service, index) => (
                <li key={index} className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 bg-secondary rounded-full mt-2 flex-shrink-0"></span>
                  <span className="text-primary-foreground/80 text-sm">
                    {service}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-primary-foreground/20">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="text-sm text-primary-foreground/80 text-center md:text-left">
              <p>
                © 2024 FerreRionegro. Todos los derechos reservados. | 
                <span className="hover:text-secondary cursor-pointer ml-1">Política de Privacidad</span> | 
                <span className="hover:text-secondary cursor-pointer ml-1">Términos y Condiciones</span>
              </p>
            </div>
            <div className="text-sm text-primary-foreground/80 text-center md:text-right">
              <p>
                Desarrollado con ❤️ para impulsar tu negocio |{' '}
                <span className="text-secondary font-medium">Rionegro, Antioquia</span>
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Floating WhatsApp Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <Button
          onClick={handleWhatsAppClick}
          className="btn-whatsapp shadow-glow animate-pulse hover:animate-none w-14 h-14 rounded-full p-0"
        >
          <MessageCircle className="w-6 h-6" />
        </Button>
      </div>
    </footer>
  );
};

export default Footer;