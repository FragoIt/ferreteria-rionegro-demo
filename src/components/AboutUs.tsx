import React from 'react';
import { Card } from '@/components/ui/card';
import { Award, Users, MapPin, Clock, CheckCircle, Wrench } from 'lucide-react';
import equipoImage from '@/assets/equipo-ferreteria.jpg';

const AboutUs = () => {
  const achievements = [
    {
      icon: Award,
      number: '15+',
      label: 'Años de experiencia',
      description: 'Apoyando a constructores y mecánicos de la región'
    },
    {
      icon: Users,
      number: '2.500+',
      label: 'Clientes satisfechos',
      description: 'Empresas y personas que confían en nosotros'
    },
    {
      icon: Wrench,
      number: '1.000+',
      label: 'Referencias en stock',
      description: 'Productos disponibles para entrega inmediata'
    },
    {
      icon: MapPin,
      number: '50km',
      label: 'Radio de cobertura',
      description: 'Entregamos en Rionegro y municipios aledaños'
    }
  ];

  const values = [
    {
      title: 'Calidad Garantizada',
      description: 'Trabajamos solo con las mejores marcas y proveedores del mercado.',
      icon: CheckCircle
    },
    {
      title: 'Asesoría Técnica',
      description: 'Nuestro equipo te ayuda a encontrar la solución exacta que necesitas.',
      icon: Users
    },
    {
      title: 'Entrega Rápida',
      description: 'Servicio de entrega el mismo día en Rionegro y alrededores.',
      icon: Clock
    }
  ];

  return (
    <section id="nosotros" className="py-20 bg-muted/20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-up">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
            Sobre{' '}
            <span className="text-primary">FerreRionegro</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Conoce nuestra historia y por qué somos la ferretería de confianza 
            para cientos de profesionales en Rionegro y el Oriente Antioqueño.
          </p>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Story */}
          <div className="space-y-6 animate-fade-up">
            <h3 className="text-2xl md:text-3xl font-bold text-foreground">
              15 años apoyando tus proyectos
            </h3>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Desde el 2009, <strong className="text-foreground">FerreRionegro</strong> se ha consolidado como 
                la ferretería de confianza para constructores, mecánicos, electricistas y emprendedores 
                de Rionegro y el Oriente Antioqueño.
              </p>
              <p>
                Iniciamos como un pequeño almacén familiar con el sueño de ofrecer productos de calidad 
                a precios justos. Hoy somos reconocidos por nuestra amplia variedad, excelente servicio 
                y la capacidad de conseguir esa pieza específica que nadie más tiene.
              </p>
              <p>
                Nuestro compromiso va más allá de vender productos: somos sus <strong className="text-foreground">socios estratégicos</strong>, 
                ofreciendo asesoría técnica especializada y soluciones integrales para cada proyecto.
              </p>
            </div>

            {/* Values */}
            <div className="space-y-4 mt-8">
              <h4 className="text-xl font-semibold text-foreground mb-4">
                Nuestros valores
              </h4>
              {values.map((value, index) => (
                <div 
                  key={index} 
                  className="flex items-start gap-4 animate-scale-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                    <value.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h5 className="font-semibold text-foreground mb-1">
                      {value.title}
                    </h5>
                    <p className="text-sm text-muted-foreground">
                      {value.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Team Image */}
          <div className="relative animate-scale-in">
            <div className="relative overflow-hidden rounded-2xl shadow-elegant">
              <img
                src={equipoImage}
                alt="Equipo de FerreRionegro - Profesionales en ferretería y repuestos"
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent"></div>
            </div>
            
            {/* Floating Card */}
            <Card className="absolute -bottom-6 -left-6 bg-card p-6 shadow-elegant border-0 gradient-card">
              <div className="text-center">
                <div className="text-2xl font-bold text-primary mb-1">100%</div>
                <div className="text-sm text-muted-foreground">Cliente satisfechos</div>
              </div>
            </Card>
          </div>
        </div>

        {/* Achievements Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {achievements.map((achievement, index) => (
            <Card 
              key={index} 
              className="text-center p-6 border-0 shadow-card hover:shadow-elegant transition-all duration-300 hover:scale-105 gradient-card animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <achievement.icon className="w-6 h-6 text-primary" />
              </div>
              <div className="text-3xl font-bold text-primary mb-2">
                {achievement.number}
              </div>
              <div className="font-semibold text-foreground mb-2">
                {achievement.label}
              </div>
              <div className="text-sm text-muted-foreground">
                {achievement.description}
              </div>
            </Card>
          ))}
        </div>

        {/* Mission Statement */}
        <div className="mt-16 text-center">
          <Card className="p-8 md:p-12 border-0 shadow-elegant gradient-card max-w-4xl mx-auto">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <Award className="w-8 h-8 text-primary" />
            </div>
            <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
              Nuestra Misión
            </h3>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Ser el aliado estratégico de constructores, mecánicos y emprendedores, 
              proporcionando productos de calidad, asesoría especializada y soluciones 
              integrales que impulsen el éxito de sus proyectos en el Oriente Antioqueño.
            </p>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;