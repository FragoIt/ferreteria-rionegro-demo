import React from 'react';
import { Button } from '@/components/ui/button';
import { MessageCircle, Phone, Search, Clock } from 'lucide-react';

const CTASection = () => {
  const whatsappNumber = "573001234567";
  const phoneNumber = "+573001234567";

  const handleWhatsAppClick = () => {
    const message = "¡Hola! No encuentro un producto específico que necesito. ¿Podrían ayudarme a conseguirlo? 😊";
    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  const handlePhoneClick = () => {
    window.open(`tel:${phoneNumber}`, '_self');
  };

  const scrollToContact = () => {
    const element = document.getElementById('contacto');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="py-20 gradient-hero relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 25px 25px, white 2px, transparent 0)`,
          backgroundSize: '50px 50px'
        }}></div>
      </div>

      <div className="relative container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto animate-fade-up">
          {/* Icon */}
          <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6">
            <Search className="w-8 h-8 text-white" />
          </div>

          {/* Heading */}
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            ¿No encuentras lo que{' '}
            <span className="text-secondary shadow-glow">buscas</span>?
          </h2>

          {/* Subtitle */}
          <p className="text-lg md:text-xl text-white/90 mb-8 max-w-2xl mx-auto leading-relaxed">
            Lo conseguimos por ti. Con nuestra amplia red de proveedores, 
            podemos encontrar esa pieza específica que necesitas para tu proyecto.
          </p>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10 max-w-2xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
              <Clock className="w-6 h-6 text-secondary mx-auto mb-2" />
              <div className="text-sm text-white/80">Respuesta en</div>
              <div className="font-bold text-white">2 horas</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
              <MessageCircle className="w-6 h-6 text-secondary mx-auto mb-2" />
              <div className="text-sm text-white/80">Cotización</div>
              <div className="font-bold text-white">Sin costo</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
              <Search className="w-6 h-6 text-secondary mx-auto mb-2" />
              <div className="text-sm text-white/80">Búsqueda</div>
              <div className="font-bold text-white">Garantizada</div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              onClick={handleWhatsAppClick}
              size="lg"
              className="btn-whatsapp text-lg px-8 py-4 shadow-glow hover:shadow-glow hover:scale-105 transition-all duration-300"
            >
              <MessageCircle className="w-5 h-5 mr-2" />
              Pide tu repuesto por WhatsApp
            </Button>
            
            <Button
              onClick={handlePhoneClick}
              variant="outline"
              size="lg"
              className="border-white/30 text-white hover:bg-white/10 backdrop-blur-sm px-8 py-4 text-lg font-semibold transition-all duration-300 hover:scale-105"
            >
              <Phone className="w-5 h-5 mr-2" />
              Llamar ahora
            </Button>
          </div>

          {/* Additional Info */}
          <div className="mt-10 p-6 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 max-w-2xl mx-auto">
            <h3 className="text-xl font-semibold text-white mb-3">
              ¿Qué información necesitamos?
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-white/80 text-sm">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 bg-secondary rounded-full"></span>
                Marca y modelo del equipo
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 bg-secondary rounded-full"></span>
                Código o referencia de la pieza
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 bg-secondary rounded-full"></span>
                Foto del repuesto (opcional)
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 bg-secondary rounded-full"></span>
                Año del vehículo/máquina
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;