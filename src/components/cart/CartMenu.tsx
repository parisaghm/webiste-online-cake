
import React from 'react';
import { Link } from 'react-router-dom';
import { X, ShoppingBag } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useCart } from '@/context/CartContext';
import CartItem from './CartItem';

const CartMenu: React.FC = () => {
  const { state, toggleCart, clearCart, subtotal, totalItems } = useCart();
  const { items, isOpen } = state;

  return (
    <>
      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-30 z-40 transition-opacity"
          onClick={toggleCart}
        />
      )}

      {/* Cart Sidebar */}
      <div
        className={`fixed top-0 right-0 h-full w-full sm:w-96 max-w-full bg-background shadow-lg z-50 transform transition-transform duration-300 ease-in-out ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="px-6 py-4 border-b border-border flex items-center justify-between">
            <h2 className="text-lg font-medium flex items-center">
              <ShoppingBag className="mr-2 h-5 w-5" />
              Your Cart
              {totalItems > 0 && (
                <span className="ml-2 text-sm bg-primary text-white rounded-full h-6 w-6 flex items-center justify-center">
                  {totalItems}
                </span>
              )}
            </h2>
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleCart}
              aria-label="Close cart"
            >
              <X size={20} />
            </Button>
          </div>

          {/* Cart items */}
          <div className="flex-grow overflow-y-auto p-6">
            {items.length === 0 ? (
              <div className="flex flex-col items-center justify-center h-full text-center">
                <ShoppingBag className="h-12 w-12 text-muted-foreground mb-4" />
                <p className="text-lg font-medium mb-2">Your cart is empty</p>
                <p className="text-muted-foreground mb-6">
                  Looks like you haven't added any cakes to your cart yet.
                </p>
                <Button onClick={toggleCart}>
                  Continue Shopping
                </Button>
              </div>
            ) : (
              <div className="space-y-1">
                {items.map((item) => (
                  <CartItem
                    key={item.product.id}
                    product={item.product}
                    quantity={item.quantity}
                  />
                ))}
              </div>
            )}
          </div>

          {/* Footer */}
          {items.length > 0 && (
            <div className="border-t border-border p-6 space-y-4">
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Subtotal</span>
                <span className="font-medium">${subtotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Shipping</span>
                <span className="font-medium">Calculated at checkout</span>
              </div>
              <div className="flex justify-between text-base font-medium mt-4 pt-4 border-t border-border">
                <span>Total</span>
                <span>${subtotal.toFixed(2)}</span>
              </div>
              <div className="grid gap-3">
                <Link to="/cart" onClick={toggleCart}>
                  <Button className="w-full">Checkout</Button>
                </Link>
                <Button 
                  variant="outline" 
                  className="w-full"
                  onClick={clearCart}
                >
                  Clear Cart
                </Button>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default CartMenu;
