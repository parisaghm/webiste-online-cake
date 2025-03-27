
import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import ProductCard from '@/components/ui/ProductCard';
import { allProducts } from '@/data/products';

const Categories = [
  { id: 'all', name: 'All Cakes' },
  { id: 'birthday', name: 'Birthday' },
  { id: 'wedding', name: 'Wedding' },
  { id: 'specialty', name: 'Specialty' },
];

const Products = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [filteredProducts, setFilteredProducts] = useState(allProducts);

  // Scroll to top on component mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Filter products when category changes
  useEffect(() => {
    if (selectedCategory === 'all') {
      setFilteredProducts(allProducts);
    } else {
      setFilteredProducts(
        allProducts.filter((product) => product.category === selectedCategory)
      );
    }
  }, [selectedCategory]);

  return (
    <div className="min-h-screen pt-28 pb-16">
      {/* Header */}
      <div className="max-w-7xl mx-auto px-6 mb-12">
        <h1 className="text-3xl md:text-4xl font-serif font-medium mb-4 animate-fade-up">
          Our Cakes Collection
        </h1>
        <p className="text-muted-foreground max-w-2xl animate-fade-up" style={{ animationDelay: '0.2s' }}>
          Discover our handcrafted cakes made with premium ingredients and artisanal techniques.
          Perfect for birthdays, weddings, and special occasions.
        </p>
      </div>

      {/* Categories */}
      <div className="max-w-7xl mx-auto px-6 mb-8">
        <div className="flex flex-wrap gap-3 animate-fade-up" style={{ animationDelay: '0.3s' }}>
          {Categories.map((category) => (
            <Button
              key={category.id}
              variant={selectedCategory === category.id ? 'default' : 'outline'}
              onClick={() => setSelectedCategory(category.id)}
              className="mb-2"
            >
              {category.name}
            </Button>
          ))}
        </div>
      </div>

      {/* Products Grid */}
      <div className="max-w-7xl mx-auto px-6">
        {filteredProducts.length === 0 ? (
          <div className="text-center py-16">
            <p className="text-muted-foreground">No products found in this category.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8">
            {filteredProducts.map((product, index) => (
              <div key={product.id} className="animate-fade-up" style={{ animationDelay: `${index * 0.1}s` }}>
                <ProductCard product={product} />
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Products;
