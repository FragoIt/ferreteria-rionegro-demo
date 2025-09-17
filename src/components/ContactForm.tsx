import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { MapPin, Phone, Clock, Mail, MessageCircle, CheckCircle } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    whatsapp: '',
    email: '',
    product: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const whatsappNumber = "573001234567";
  const phoneNumber = "+573001234567";
  const email = "info@ferrerionegro.com.co";

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      // Send to WhatsApp with form data
      const message = `*Nuevo contacto desde la web* 📋

*Nombre:* ${formData.name}
*WhatsApp:* ${formData.whatsapp}
*Email:* ${formData.email}
*Producto/Servicio:* ${formData.product}

*Mensaje:*
${formData.message}

¡Responder lo antes posible! 😊`;

      const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
      window.open(url, '_blank');

      // Reset form
      setFormData({
        name: '',
        whatsapp: '',
        email: '',
        product: '',
        message: ''
      });

      setIsSubmitting(false);
      
      toast({
        title: "¡Mensaje enviado!",
        description: "Te responderemos en menos de 2 horas por WhatsApp.",
      });
    }, 1000);
  };

  const handleDirectWhatsApp = () => {
    const message = "¡Hola! Me gustaría obtener más información sobre sus productos y servicios 😊";
    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: 'Dirección',
      content: 'Carrera 50 #25-30, Centro',
      subtitle: 'Rionegro, Antioquia'
    },
    {
      icon: Phone,
      title: 'Teléfonos',
      content: '+57 300 123 4567',
      subtitle: '+57 (4) 561-2345'
    },
    {
      icon: Clock,
      title: 'Horarios',
      content: 'Lun-Vie: 7AM-6PM',
      subtitle: 'Sábado: 7AM-5PM'
    },
    {
      icon: Mail,
      title: 'Email',
      content: email,
      subtitle: 'Respuesta en 2 horas'
    }
  ];

  return (
    <section id="contacto" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-up">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
            Contáctanos
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Estamos aquí para ayudarte. Envíanos tu consulta y te responderemos 
            en menos de 2 horas.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="animate-fade-up">
            <Card className="p-8 shadow-elegant border-0 gradient-card">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                  <MessageCircle className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-foreground">
                    Formulario de Contacto
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Te responderemos por WhatsApp
                  </p>
                </div>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Nombre completo *</Label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Tu nombre"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="whatsapp">WhatsApp *</Label>
                    <Input
                      id="whatsapp"
                      name="whatsapp"
                      value={formData.whatsapp}
                      onChange={handleInputChange}
                      placeholder="+57 300 123 4567"
                      required
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">Correo electrónico</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="tu@email.com"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="product">Producto o servicio de interés</Label>
                  <Input
                    id="product"
                    name="product"
                    value={formData.product}
                    onChange={handleInputChange}
                    placeholder="Ej: Taladro, repuestos auto, cotización proyecto..."
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Mensaje *</Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Cuéntanos qué necesitas, incluye detalles como marca, modelo, cantidad, etc."
                    className="min-h-[120px] resize-none"
                    required
                  />
                </div>

                <div className="flex flex-col sm:flex-row gap-3">
                  <Button 
                    type="submit" 
                    disabled={isSubmitting}
                    className="flex-1 h-12 font-semibold"
                  >
                    {isSubmitting ? (
                      'Enviando...'
                    ) : (
                      <>
                        <CheckCircle className="w-4 h-4 mr-2" />
                        Enviar Consulta
                      </>
                    )}
                  </Button>
                  <Button
                    type="button"
                    onClick={handleDirectWhatsApp}
                    className="btn-whatsapp h-12"
                  >
                    <MessageCircle className="w-4 h-4 mr-2" />
                    WhatsApp Directo
                  </Button>
                </div>

                <p className="text-xs text-muted-foreground text-center">
                  * Campos obligatorios. Te responderemos en menos de 2 horas en horario comercial.
                </p>
              </form>
            </Card>
          </div>

          {/* Contact Info */}
          <div className="space-y-6 animate-scale-in">
            <h3 className="text-2xl font-bold text-foreground mb-6">
              Información de Contacto
            </h3>
            
            {contactInfo.map((info, index) => (
              <Card 
                key={index} 
                className="p-6 shadow-card hover:shadow-elegant transition-all duration-300 border-0 gradient-card animate-fade-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <info.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">
                      {info.title}
                    </h4>
                    <p className="text-foreground font-medium">
                      {info.content}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      {info.subtitle}
                    </p>
                  </div>
                </div>
              </Card>
            ))}

            {/* Map Placeholder */}
            <Card className="p-6 shadow-card border-0 gradient-card">
              <h4 className="font-semibold text-foreground mb-4">Ubicación</h4>
              <div className="bg-muted/50 rounded-lg h-48 flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="w-8 h-8 text-primary mx-auto mb-2" />
                  <p className="text-sm text-muted-foreground">
                    Carrera 50 #25-30, Centro<br />
                    Rionegro, Antioquia
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;