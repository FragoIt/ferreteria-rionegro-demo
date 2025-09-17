import React from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { MessageCircle, Eye, ShoppingCart } from 'lucide-react';

export interface Product {
  id: string;
  name: string;
  price: string;
  image: string;
  category: string;
  available: boolean;
  description?: string;
  code?: string;
}

interface ProductCardProps {
  product: Product;
  onWhatsAppClick: (product: Product) => void;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, onWhatsAppClick }) => {
  return (
    <Card className="group overflow-hidden border-0 shadow-card hover:shadow-elegant transition-all duration-300 hover:scale-105 gradient-card">
      {/* Product Image */}
      <div className="relative overflow-hidden bg-muted/30">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
          loading="lazy"
        />
        
        {/* Availability Badge */}
        <Badge 
          className={`absolute top-3 left-3 ${
            product.available 
              ? 'bg-accent hover:bg-accent text-accent-foreground' 
              : 'bg-secondary hover:bg-secondary text-secondary-foreground'
          }`}
        >
          {product.available ? 'En Stock' : 'Bajo Pedido'}
        </Badge>

        {/* Quick Actions Overlay */}
        <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-2">
          <Button
            size="sm"
            variant="secondary"
            className="shadow-md"
            onClick={() => onWhatsAppClick(product)}
          >
            <Eye className="w-4 h-4" />
          </Button>
        </div>
      </div>

      {/* Product Info */}
      <div className="p-4 space-y-3">
        {/* Category */}
        <div className="text-xs text-muted-foreground uppercase tracking-wide font-medium">
          {product.category}
        </div>

        {/* Product Name */}
        <h3 className="font-bold text-lg text-foreground leading-tight line-clamp-2">
          {product.name}
        </h3>

        {/* Product Code */}
        {product.code && (
          <div className="text-sm text-muted-foreground">
            Código: {product.code}
          </div>
        )}

        {/* Description */}
        {product.description && (
          <p className="text-sm text-muted-foreground line-clamp-2">
            {product.description}
          </p>
        )}

        {/* Price and Action */}
        <div className="flex items-center justify-between pt-2">
          <div className="space-y-1">
            <div className="text-2xl font-bold text-primary">
              {product.price}
            </div>
            <div className="text-xs text-muted-foreground">
              Precio referencial
            </div>
          </div>
        </div>

        {/* WhatsApp Button */}
        <Button
          onClick={() => onWhatsAppClick(product)}
          className="w-full btn-whatsapp font-semibold"
          size="sm"
        >
          <MessageCircle className="w-4 h-4 mr-2" />
          Solicitar por WhatsApp
        </Button>
      </div>
    </Card>
  );
};

export default ProductCard;