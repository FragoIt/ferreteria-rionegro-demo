import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, MessageCircle, Search } from 'lucide-react';
import heroImage from '@/assets/hero-ferreteria.jpg';

const Hero = () => {
  const whatsappNumber = "573001234567";
  const whatsappMessage = "¡Hola! Me interesa conocer más sobre sus productos y servicios 😊";

  const handleWhatsAppClick = () => {
    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;
    window.open(url, '_blank');
  };

  const scrollToCatalog = () => {
    const element = document.getElementById('catalogo');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      id="inicio" 
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{
        backgroundImage: `linear-gradient(rgba(31, 95, 139, 0.7), rgba(31, 95, 139, 0.5)), url(${heroImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}
    >
      {/* Background Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/80 to-primary/60"></div>
      
      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto animate-fade-up">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-secondary/20 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-medium mb-6 border border-white/20">
            <span className="w-2 h-2 bg-accent rounded-full animate-pulse"></span>
            15 años de experiencia en Rionegro
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            Todo lo que necesitas para tu{' '}
            <span className="text-secondary shadow-glow">proyecto</span>,{' '}
            en un solo lugar
          </h1>

          {/* Subtitle */}
          <p className="text-lg md:text-xl text-white/90 mb-8 max-w-2xl mx-auto leading-relaxed">
            Ferretería y repuestos con entrega rápida en Rionegro y alrededores. 
            Más de 1.000 referencias en stock con la mejor calidad y precios.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button
              onClick={scrollToCatalog}
              size="lg"
              className="gradient-button text-foreground font-semibold px-8 py-4 text-lg shadow-glow hover:shadow-glow hover:scale-105 transition-all duration-300"
            >
              <Search className="w-5 h-5 mr-2" />
              Ver Catálogo
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
            
            <Button
              onClick={handleWhatsAppClick}
              variant="outline"
              size="lg"
              className="border-white/30 text-white hover:bg-white/10 backdrop-blur-sm px-8 py-4 text-lg font-semibold transition-all duration-300 hover:scale-105"
            >
              <MessageCircle className="w-5 h-5 mr-2" />
              Cotizar Ahora
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
              <div className="text-2xl font-bold text-secondary mb-1">+1.000</div>
              <div className="text-white/80 text-sm">Productos en Stock</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
              <div className="text-2xl font-bold text-secondary mb-1">15 años</div>
              <div className="text-white/80 text-sm">De Experiencia</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
              <div className="text-2xl font-bold text-secondary mb-1">Entrega</div>
              <div className="text-white/80 text-sm">El Mismo Día</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/70 rounded-full mt-2"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;