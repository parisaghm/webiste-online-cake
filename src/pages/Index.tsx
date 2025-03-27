
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import ProductCard from '@/components/ui/ProductCard';
import { featuredProducts } from '@/data/products';

const Index = () => {
  // Scroll to top on component mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen overflow-hidden">
      {/* Hero Section */}
      <section className="pt-32 pb-16 md:pt-44 md:pb-20 px-6 relative bg-cream-50">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-center">
            <div className="w-full md:w-1/2 pr-0 md:pr-10 mb-10 md:mb-0 animate-fade-up">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-medium mb-4 md:mb-6">
                Artisanal Cakes <br className="hidden md:block" /> for Every Occasion
              </h1>
              <p className="text-muted-foreground text-lg mb-8 md:max-w-md">
                Handcrafted with premium ingredients and artisanal techniques for an unforgettable taste experience.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button asChild size="lg">
                  <Link to="/products">
                    Shop Now
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <Link to="/about">Our Story</Link>
                </Button>
              </div>
            </div>
            <div className="w-full md:w-1/2 relative animate-fade-in">
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1578985545062-69928b1d9587?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1280&q=80"
                  alt="Delicious cake"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-5 -left-5 md:-left-10 bg-white rounded-lg shadow-md p-4 md:p-6 w-32 md:w-40 animate-fade-up" style={{ animationDelay: '0.3s' }}>
                <p className="font-medium text-sm md:text-base mb-1">New Arrival</p>
                <p className="text-muted-foreground text-xs md:text-sm">Raspberry Delight</p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Decorative elements */}
        <div className="hidden md:block absolute top-1/4 left-10 w-12 h-12 rounded-full bg-cake-100"></div>
        <div className="hidden md:block absolute bottom-1/4 right-10 w-20 h-20 rounded-full bg-cake-200"></div>
      </section>

      {/* Featured Products Section */}
      <section className="py-16 md:py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl font-serif font-medium mb-4">Our Featured Cakes</h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Discover our most beloved creations, crafted with attention to every delicious detail.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {featuredProducts.map((product, index) => (
              <div key={product.id} className="animate-fade-up" style={{ animationDelay: `${index * 0.1}s` }}>
                <ProductCard product={product} />
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Button asChild variant="outline" size="lg">
              <Link to="/products">
                View All Cakes
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 md:py-24 px-6 bg-cream-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl font-serif font-medium mb-4">Why Choose Our Cakes</h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Every cake tells a story of craftsmanship, quality, and passion for baking.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 md:p-8 rounded-lg shadow-sm animate-fade-up">
              <div className="w-12 h-12 bg-cake-100 rounded-full flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-primary" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="font-serif text-xl font-medium mb-3">Premium Ingredients</h3>
              <p className="text-muted-foreground">
                We select only the finest ingredients, sourced from trusted suppliers who share our commitment to quality.
              </p>
            </div>

            <div className="bg-white p-6 md:p-8 rounded-lg shadow-sm animate-fade-up" style={{ animationDelay: '0.2s' }}>
              <div className="w-12 h-12 bg-cake-100 rounded-full flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-primary" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                </svg>
              </div>
              <h3 className="font-serif text-xl font-medium mb-3">Artisanal Craftsmanship</h3>
              <p className="text-muted-foreground">
                Each cake is handcrafted by our skilled pastry chefs who bring years of experience and passion to their art.
              </p>
            </div>

            <div className="bg-white p-6 md:p-8 rounded-lg shadow-sm animate-fade-up" style={{ animationDelay: '0.4s' }}>
              <div className="w-12 h-12 bg-cake-100 rounded-full flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-primary" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="font-serif text-xl font-medium mb-3">Timely Delivery</h3>
              <p className="text-muted-foreground">
                We understand the importance of your celebrations, ensuring your cake arrives freshly made and right on time.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="bg-cake-100 rounded-2xl py-12 px-6 md:p-12 text-center">
            <h2 className="text-3xl md:text-4xl font-serif font-medium mb-4 animate-fade-up">Ready to Order?</h2>
            <p className="text-muted-foreground max-w-xl mx-auto mb-8 animate-fade-up" style={{ animationDelay: '0.2s' }}>
              Celebrate your special moments with our handcrafted cakes. Each bite is a testament to our commitment to quality.
            </p>
            <Button asChild size="lg" className="animate-fade-up" style={{ animationDelay: '0.4s' }}>
              <Link to="/products">
                Browse Our Collection
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
