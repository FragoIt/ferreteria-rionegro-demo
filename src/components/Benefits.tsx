import React from 'react';
import { Package, Users, Truck, Shield, Clock, Star } from 'lucide-react';
import { Card } from '@/components/ui/card';

const Benefits = () => {
  const benefits = [
    {
      icon: Package,
      title: 'Variedad y Calidad',
      description: 'Más de 1.000 referencias en stock de las mejores marcas del mercado.',
      highlight: '+1.000 productos'
    },
    {
      icon: Users,
      title: 'Asesoría Experta',
      description: 'Te ayudamos a encontrar la pieza exacta que necesitas para tu proyecto.',
      highlight: '15 años de experiencia'
    },
    {
      icon: Truck,
      title: 'Entrega Rápida',
      description: 'Recibe tu pedido el mismo día en Rionegro y alrededores.',
      highlight: 'Entrega inmediata'
    }
  ];

  const additionalFeatures = [
    {
      icon: Shield,
      title: 'Garantía Total',
      description: 'Todos nuestros productos cuentan con garantía de fábrica.'
    },
    {
      icon: Clock,
      title: 'Horarios Flexibles',
      description: 'Abierto de lunes a viernes 7AM-6PM, sábados 7AM-5PM.'
    },
    {
      icon: Star,
      title: 'Precios Competitivos',
      description: 'Los mejores precios del mercado con calidad garantizada.'
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-up">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
            ¿Por qué elegir{' '}
            <span className="text-primary">FerreRionegro</span>?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Somos tu aliado estratégico para todos tus proyectos de construcción, 
            reparación y mantenimiento con servicio excepcional.
          </p>
        </div>

        {/* Main Benefits */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {benefits.map((benefit, index) => (
            <Card 
              key={index} 
              className="p-8 text-center hover:shadow-elegant transition-all duration-300 hover:scale-105 gradient-card border-0 animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <benefit.icon className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">
                {benefit.title}
              </h3>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                {benefit.description}
              </p>
              <div className="inline-block bg-secondary/20 text-secondary px-3 py-1 rounded-full text-sm font-semibold">
                {benefit.highlight}
              </div>
            </Card>
          ))}
        </div>

        {/* Additional Features */}
        <div className="bg-muted/30 rounded-2xl p-8 md:p-12">
          <h3 className="text-2xl md:text-3xl font-bold text-center text-foreground mb-8">
            Beneficios Adicionales
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {additionalFeatures.map((feature, index) => (
              <div 
                key={index} 
                className="flex items-start gap-4 animate-fade-up"
                style={{ animationDelay: `${(index + 3) * 0.1}s` }}
              >
                <div className="w-10 h-10 bg-accent/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <feature.icon className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">
                    {feature.title}
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;