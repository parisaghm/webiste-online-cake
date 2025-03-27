import { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ShoppingBag, ArrowLeft } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import CartItem from '@/components/cart/CartItem';

const Cart = () => {
  const { state, clearCart, subtotal, totalItems } = useCart();
  const { items } = state;
  const navigate = useNavigate();

  // Scroll to top on component mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleCheckout = () => {
    navigate('/payment');
  };

  return (
    <div className="min-h-screen pt-28 pb-16">
      <div className="max-w-7xl mx-auto px-6">
        <h1 className="text-3xl md:text-4xl font-serif font-medium mb-4 animate-fade-up">
          Your Cart
        </h1>
        <p className="text-muted-foreground mb-8 animate-fade-up" style={{ animationDelay: '0.2s' }}>
          Review your items before proceeding to checkout.
        </p>

        {items.length === 0 ? (
          <div className="text-center py-16 animate-fade-in">
            <ShoppingBag className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
            <h2 className="text-xl font-medium mb-4">Your cart is empty</h2>
            <p className="text-muted-foreground mb-8 max-w-md mx-auto">
              Looks like you haven't added any cakes to your cart yet. 
              Check out our delicious collection of cakes!
            </p>
            <Button asChild>
              <Link to="/products">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Continue Shopping
              </Link>
            </Button>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Cart Items */}
            <div className="lg:col-span-2 animate-fade-up">
              <div className="bg-white rounded-lg shadow-sm p-6">
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-xl font-medium">
                    Cart Items ({totalItems})
                  </h2>
                  <Button 
                    variant="outline" 
                    size="sm" 
                    onClick={clearCart}
                  >
                    Clear Cart
                  </Button>
                </div>
                <div className="divide-y divide-border">
                  {items.map((item) => (
                    <CartItem
                      key={item.product.id}
                      product={item.product}
                      quantity={item.quantity}
                    />
                  ))}
                </div>
              </div>
              
              <div className="mt-6">
                <Button asChild variant="outline">
                  <Link to="/products">
                    <ArrowLeft className="mr-2 h-4 w-4" />
                    Continue Shopping
                  </Link>
                </Button>
              </div>
            </div>

            {/* Order Summary */}
            <div className="animate-fade-up" style={{ animationDelay: '0.3s' }}>
              <div className="bg-white rounded-lg shadow-sm p-6 sticky top-28">
                <h2 className="text-xl font-medium mb-6">Order Summary</h2>
                <div className="space-y-4 mb-6">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Subtotal</span>
                    <span>${subtotal.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Shipping</span>
                    <span>Calculated at checkout</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Tax</span>
                    <span>Calculated at checkout</span>
                  </div>
                </div>
                <div className="border-t border-border pt-4 mb-6">
                  <div className="flex justify-between font-medium">
                    <span>Total</span>
                    <span>${subtotal.toFixed(2)}</span>
                  </div>
                </div>
                <Button 
                  className="w-full" 
                  size="lg"
                  onClick={handleCheckout}
                >
                  Proceed to Checkout
                </Button>

                <p className="text-xs text-muted-foreground text-center mt-4">
                  Secure payment processing. Free shipping on orders over $50.
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
