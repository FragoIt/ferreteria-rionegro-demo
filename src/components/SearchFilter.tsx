import React, { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Search, Filter, X } from 'lucide-react';

interface SearchFilterProps {
  onSearch: (query: string) => void;
  onFilterCategory: (category: string) => void;
  onFilterAvailability: (available: boolean | null) => void;
  searchQuery: string;
  selectedCategory: string;
  selectedAvailability: boolean | null;
}

const SearchFilter: React.FC<SearchFilterProps> = ({
  onSearch,
  onFilterCategory,
  onFilterAvailability,
  searchQuery,
  selectedCategory,
  selectedAvailability
}) => {
  const [localSearch, setLocalSearch] = useState(searchQuery);

  const categories = [
    'Todas las categorías',
    'Herramientas Eléctricas',
    'Herramientas Manuales',
    'Automotriz',
    'Construcción',
    'Seguridad Industrial',
    'Ferretería General'
  ];

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch(localSearch);
  };

  const clearFilters = () => {
    setLocalSearch('');
    onSearch('');
    onFilterCategory('Todas las categorías');
    onFilterAvailability(null);
  };

  const hasActiveFilters = searchQuery || selectedCategory !== 'Todas las categorías' || selectedAvailability !== null;

  return (
    <section id="buscador" className="py-12 bg-muted/20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-2">
              Encuentra tu producto ideal
            </h2>
            <p className="text-muted-foreground">
              Busca por nombre, código o categoría
            </p>
          </div>

          <div className="bg-card rounded-xl shadow-card p-6 border">
            <form onSubmit={handleSearchSubmit} className="space-y-4">
              {/* Search Input */}
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                <Input
                  type="text"
                  placeholder="Buscar productos... (ej: taladro, llaves, aceite)"
                  value={localSearch}
                  onChange={(e) => setLocalSearch(e.target.value)}
                  className="pl-10 h-12 text-base"
                />
              </div>

              {/* Filters Row */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {/* Category Filter */}
                <Select value={selectedCategory} onValueChange={onFilterCategory}>
                  <SelectTrigger className="h-12">
                    <SelectValue placeholder="Categoría" />
                  </SelectTrigger>
                  <SelectContent>
                    {categories.map((category) => (
                      <SelectItem key={category} value={category}>
                        {category}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>

                {/* Availability Filter */}
                <Select 
                  value={selectedAvailability === null ? 'all' : selectedAvailability ? 'available' : 'unavailable'} 
                  onValueChange={(value) => {
                    if (value === 'all') onFilterAvailability(null);
                    else if (value === 'available') onFilterAvailability(true);
                    else onFilterAvailability(false);
                  }}
                >
                  <SelectTrigger className="h-12">
                    <SelectValue placeholder="Disponibilidad" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">Todos los productos</SelectItem>
                    <SelectItem value="available">En stock</SelectItem>
                    <SelectItem value="unavailable">Bajo pedido</SelectItem>
                  </SelectContent>
                </Select>

                {/* Search Button */}
                <Button type="submit" className="h-12 bg-primary hover:bg-primary/90 font-semibold">
                  <Search className="w-4 h-4 mr-2" />
                  Buscar
                </Button>
              </div>

              {/* Clear Filters */}
              {hasActiveFilters && (
                <div className="flex justify-center pt-2">
                  <Button
                    type="button"
                    variant="ghost"
                    onClick={clearFilters}
                    className="text-muted-foreground hover:text-foreground"
                  >
                    <X className="w-4 h-4 mr-2" />
                    Limpiar filtros
                  </Button>
                </div>
              )}
            </form>

            {/* Quick Categories */}
            <div className="mt-6 pt-6 border-t">
              <p className="text-sm text-muted-foreground mb-3">Categorías populares:</p>
              <div className="flex flex-wrap gap-2">
                {['Herramientas Eléctricas', 'Automotriz', 'Construcción', 'Seguridad Industrial'].map((category) => (
                  <Button
                    key={category}
                    variant="outline"
                    size="sm"
                    onClick={() => onFilterCategory(category)}
                    className="text-xs"
                  >
                    {category}
                  </Button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SearchFilter;