
import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ShoppingBag, ArrowLeft, Plus, Minus } from 'lucide-react';
import { Product, useCart } from '@/context/CartContext';
import { allProducts } from '@/data/products';
import ProductCard from '@/components/ui/ProductCard';

const ProductDetail = () => {
  const { id } = useParams<{ id: string }>();
  const { addItem } = useCart();
  const [quantity, setQuantity] = useState(1);
  const [product, setProduct] = useState<Product | null>(null);
  const [relatedProducts, setRelatedProducts] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  // Fetch product data
  useEffect(() => {
    // Scroll to top
    window.scrollTo(0, 0);
    setIsLoading(true);

    // In a real app, this would be an API call
    setTimeout(() => {
      const foundProduct = allProducts.find((p) => p.id === Number(id));
      setProduct(foundProduct || null);

      if (foundProduct) {
        // Get related products (same category, different product)
        const related = allProducts
          .filter((p) => p.category === foundProduct.category && p.id !== foundProduct.id)
          .slice(0, 4);
        setRelatedProducts(related);
      }

      setIsLoading(false);
    }, 300);
  }, [id]);

  const handleIncreaseQuantity = () => {
    setQuantity((prev) => prev + 1);
  };

  const handleDecreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity((prev) => prev - 1);
    }
  };

  const handleAddToCart = () => {
    if (product) {
      addItem(product, quantity);
    }
  };

  if (isLoading) {
    return (
      <div className="min-h-screen pt-28 flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
      </div>
    );
  }

  if (!product) {
    return (
      <div className="min-h-screen pt-28 flex flex-col items-center justify-center px-6">
        <h1 className="text-2xl font-medium mb-4">Product Not Found</h1>
        <p className="text-muted-foreground mb-6">The product you're looking for does not exist.</p>
        <Button asChild>
          <Link to="/products">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Products
          </Link>
        </Button>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-28 pb-16">
      <div className="max-w-7xl mx-auto px-6">
        {/* Back button */}
        <div className="mb-8 animate-fade-up">
          <Button variant="ghost" asChild className="px-0">
            <Link to="/products">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Products
            </Link>
          </Button>
        </div>

        {/* Product Details */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 mb-16">
          {/* Product Image */}
          <div className="rounded-lg overflow-hidden aspect-square animate-fade-in">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Product Info */}
          <div className="animate-fade-up">
            <span className="inline-block bg-secondary text-foreground text-xs px-3 py-1 rounded-full mb-4">
              {product.category.charAt(0).toUpperCase() + product.category.slice(1)}
            </span>
            <h1 className="text-3xl md:text-4xl font-serif font-medium mb-4">{product.name}</h1>
            <p className="text-2xl font-medium mb-6">${product.price.toFixed(2)}</p>
            <p className="text-muted-foreground mb-8">{product.description}</p>

            <div className="flex items-center mb-6">
              <Button
                variant="outline"
                size="icon"
                onClick={handleDecreaseQuantity}
                aria-label="Decrease quantity"
              >
                <Minus size={16} />
              </Button>
              <span className="w-12 text-center">{quantity}</span>
              <Button
                variant="outline"
                size="icon"
                onClick={handleIncreaseQuantity}
                aria-label="Increase quantity"
              >
                <Plus size={16} />
              </Button>
            </div>

            <Button size="lg" className="w-full md:w-auto" onClick={handleAddToCart}>
              <ShoppingBag className="mr-2 h-5 w-5" />
              Add to Cart
            </Button>

            <div className="mt-8 pt-8 border-t border-border">
              <h3 className="font-medium mb-3">Product Details</h3>
              <ul className="text-muted-foreground space-y-2">
                <li>Handmade with premium ingredients</li>
                <li>Available for delivery within 24 hours</li>
                <li>Serves 8-10 people</li>
                <li>Best consumed within 3 days</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <div className="pt-8 border-t border-border">
            <h2 className="text-2xl font-serif font-medium mb-6 animate-fade-up">You May Also Like</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {relatedProducts.map((product, index) => (
                <div key={product.id} className="animate-fade-up" style={{ animationDelay: `${index * 0.1}s` }}>
                  <ProductCard product={product} />
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductDetail;
