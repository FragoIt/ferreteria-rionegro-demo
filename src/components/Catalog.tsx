import React, { useState, useMemo } from 'react';
import ProductCard, { Product } from './ProductCard';
import SearchFilter from './SearchFilter';

// Import product images
import taladroImage from '@/assets/products/taladro-bosch.jpg';
import llavesImage from '@/assets/products/juego-llaves.jpg';
import aceiteImage from '@/assets/products/aceite-motor.jpg';
import bateriaImage from '@/assets/products/bateria-12v.jpg';
import discoImage from '@/assets/products/disco-corte.jpg';
import guantesImage from '@/assets/products/guantes-seguridad.jpg';
import llantaImage from '@/assets/products/llanta-pickup.jpg';
import soldaduraImage from '@/assets/products/soldadura.jpg';
import destornilladoresImage from '@/assets/products/destornilladores.jpg';
import tornillosImage from '@/assets/products/tornillos.jpg';
import cascoImage from '@/assets/products/casco-seguridad.jpg';
import brocasImage from '@/assets/products/brocas.jpg';

const Catalog = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('Todas las categorías');
  const [selectedAvailability, setSelectedAvailability] = useState<boolean | null>(null);

  const whatsappNumber = "573001234567";

  const products: Product[] = [
    {
      id: '1',
      name: 'Taladro Percutor Bosch GSB 13 RE',
      price: '$289.900',
      image: taladroImage,
      category: 'Herramientas Eléctricas',
      available: true,
      description: 'Taladro percutor de 13mm con 650W de potencia. Ideal para mampostería y metal.',
      code: 'TAL-BSH-001'
    },
    {
      id: '2',
      name: 'Juego de Llaves Combinadas 8-24mm',
      price: '$156.500',
      image: llavesImage,
      category: 'Herramientas Manuales',
      available: true,
      description: 'Set de 12 llaves combinadas cromadas, desde 8mm hasta 24mm.',
      code: 'LLV-CMB-012'
    },
    {
      id: '3',
      name: 'Aceite Motor 20W50 Galón',
      price: '$89.900',
      image: aceiteImage,
      category: 'Automotriz',
      available: true,
      description: 'Aceite multigrado para motores a gasolina y diesel. Presentación de 1 galón.',
      code: 'ACE-20W50-001'
    },
    {
      id: '4',
      name: 'Batería Automotriz 12V 65Ah',
      price: '$245.000',
      image: bateriaImage,
      category: 'Automotriz',
      available: true,
      description: 'Batería libre de mantenimiento 12V 65Ah. Compatible con la mayoría de vehículos.',
      code: 'BAT-12V-065'
    },
    {
      id: '5',
      name: 'Disco de Corte Metal 4.5"',
      price: '$12.500',
      image: discoImage,
      category: 'Herramientas Eléctricas',
      available: true,
      description: 'Disco de corte para metal de 4.5 pulgadas. Compatible con pulidoras estándar.',
      code: 'DSC-MET-045'
    },
    {
      id: '6',
      name: 'Guantes de Seguridad Nitrilo',
      price: '$18.900',
      image: guantesImage,
      category: 'Seguridad Industrial',
      available: true,
      description: 'Guantes de trabajo con recubrimiento de nitrilo. Excelente grip y resistencia.',
      code: 'GUA-NIT-001'
    },
    {
      id: '7',
      name: 'Llanta Pickup 265/70R16',
      price: '$385.000',
      image: llantaImage,
      category: 'Automotriz',
      available: false,
      description: 'Llanta para camioneta 265/70R16. Diseño all-terrain para ciudad y campo.',
      code: 'LLN-265-016'
    },
    {
      id: '8',
      name: 'Soldadura E6013 1/8" - 5Kg',
      price: '$67.500',
      image: soldaduraImage,
      category: 'Construcción',
      available: true,
      description: 'Electrodo para soldadura E6013 de 1/8 pulgada. Caja de 5 kilogramos.',
      code: 'SOL-E6013-5K'
    },
    {
      id: '9',
      name: 'Set Destornilladores Precision 24 Pcs',
      price: '$45.900',
      image: destornilladoresImage,
      category: 'Herramientas Manuales',
      available: true,
      description: 'Juego de destornilladores de precisión 24 piezas. Incluye puntas intercambiables.',
      code: 'DST-PRE-024'
    },
    {
      id: '10',
      name: 'Tornillos Autorroscantes Surtidos',
      price: '$28.500',
      image: tornillosImage,
      category: 'Ferretería General',
      available: true,
      description: 'Caja surtida de tornillos autorroscantes. Varios tamaños y cabezas.',
      code: 'TOR-AUTO-SUR'
    },
    {
      id: '11',
      name: 'Casco de Seguridad Industrial',
      price: '$35.900',
      image: cascoImage,
      category: 'Seguridad Industrial',
      available: true,
      description: 'Casco de seguridad tipo I clase G. Cumple normas ANSI Z89.1.',
      code: 'CSC-IND-001'
    },
    {
      id: '12',
      name: 'Set Brocas HSS 1-13mm 25 Pcs',
      price: '$89.900',
      image: brocasImage,
      category: 'Herramientas Eléctricas',
      available: true,
      description: 'Juego de brocas HSS de 1mm a 13mm. 25 piezas en estuche metálico.',
      code: 'BRC-HSS-25P'
    }
  ];

  const filteredProducts = useMemo(() => {
    return products.filter(product => {
      const matchesSearch = searchQuery === '' || 
        product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        (product.code && product.code.toLowerCase().includes(searchQuery.toLowerCase())) ||
        product.category.toLowerCase().includes(searchQuery.toLowerCase());

      const matchesCategory = selectedCategory === 'Todas las categorías' || 
        product.category === selectedCategory;

      const matchesAvailability = selectedAvailability === null || 
        product.available === selectedAvailability;

      return matchesSearch && matchesCategory && matchesAvailability;
    });
  }, [searchQuery, selectedCategory, selectedAvailability, products]);

  const handleWhatsAppClick = (product: Product) => {
    const message = `¡Hola! Me interesa el producto:

📦 *${product.name}*
💰 Precio: ${product.price}
🔖 Código: ${product.code}
📋 Categoría: ${product.category}
${product.available ? '✅ En stock' : '⏰ Bajo pedido'}

¿Podrían darme más información y disponibilidad? ¡Gracias! 😊`;

    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  return (
    <>
      <SearchFilter
        onSearch={setSearchQuery}
        onFilterCategory={setSelectedCategory}
        onFilterAvailability={setSelectedAvailability}
        searchQuery={searchQuery}
        selectedCategory={selectedCategory}
        selectedAvailability={selectedAvailability}
      />

      <section id="catalogo" className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-fade-up">
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
              Catálogo{' '}
              <span className="text-primary">Destacado</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Descubre nuestra selección de productos más solicitados con la mejor calidad y precios competitivos.
            </p>
          </div>

          {/* Results Info */}
          <div className="mb-8">
            <p className="text-muted-foreground">
              {filteredProducts.length === products.length 
                ? `Mostrando todos los ${products.length} productos`
                : `Mostrando ${filteredProducts.length} de ${products.length} productos`
              }
              {searchQuery && ` para "${searchQuery}"`}
              {selectedCategory !== 'Todas las categorías' && ` en ${selectedCategory}`}
            </p>
          </div>

          {/* Products Grid */}
          {filteredProducts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredProducts.map((product, index) => (
                <div 
                  key={product.id} 
                  className="animate-scale-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <ProductCard
                    product={product}
                    onWhatsAppClick={handleWhatsAppClick}
                  />
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <div className="w-24 h-24 bg-muted rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-4xl">🔍</span>
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">
                No encontramos productos
              </h3>
              <p className="text-muted-foreground mb-6">
                Intenta con otros términos de búsqueda o ajusta los filtros.
              </p>
              <button
                onClick={() => {
                  setSearchQuery('');
                  setSelectedCategory('Todas las categorías');
                  setSelectedAvailability(null);
                }}
                className="text-primary hover:underline font-medium"
              >
                Ver todos los productos
              </button>
            </div>
          )}

          {/* Categories Section */}
          <div id="categorias" className="mt-20 pt-20 border-t">
            <h3 className="text-2xl md:text-3xl font-bold text-center text-foreground mb-8">
              Nuestras Categorías
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              {[
                { name: 'Herramientas Eléctricas', icon: '⚡' },
                { name: 'Herramientas Manuales', icon: '🔧' },
                { name: 'Automotriz', icon: '🚗' },
                { name: 'Construcción', icon: '🏗️' },
                { name: 'Seguridad Industrial', icon: '🦺' },
                { name: 'Ferretería General', icon: '🔩' }
              ].map((category, index) => (
                <button
                  key={category.name}
                  onClick={() => setSelectedCategory(category.name)}
                  className="p-6 bg-card rounded-lg shadow-card hover:shadow-elegant transition-all duration-300 hover:scale-105 text-center group animate-scale-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="text-3xl mb-3 group-hover:scale-110 transition-transform">
                    {category.icon}
                  </div>
                  <div className="text-sm font-medium text-foreground">
                    {category.name}
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Catalog;