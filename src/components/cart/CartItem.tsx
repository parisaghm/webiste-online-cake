
import React from 'react';
import { Plus, Minus, Trash2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Product, useCart } from '@/context/CartContext';

interface CartItemProps {
  product: Product;
  quantity: number;
}

const CartItem: React.FC<CartItemProps> = ({ product, quantity }) => {
  const { updateQuantity, removeItem } = useCart();

  const handleIncreaseQuantity = () => {
    updateQuantity(product.id, quantity + 1);
  };

  const handleDecreaseQuantity = () => {
    if (quantity > 1) {
      updateQuantity(product.id, quantity - 1);
    } else {
      removeItem(product.id);
    }
  };

  const handleRemoveItem = () => {
    removeItem(product.id);
  };

  return (
    <div className="flex py-4 border-b border-border animate-scale-in">
      <div className="h-20 w-20 rounded-md overflow-hidden flex-shrink-0">
        <img 
          src={product.image} 
          alt={product.name} 
          className="h-full w-full object-cover"
        />
      </div>
      
      <div className="ml-4 flex flex-col flex-grow">
        <div className="flex justify-between">
          <h4 className="text-sm font-medium line-clamp-1">{product.name}</h4>
          <Button 
            variant="ghost" 
            size="icon" 
            className="h-6 w-6 text-muted-foreground hover:text-destructive"
            onClick={handleRemoveItem}
            aria-label="Remove item"
          >
            <Trash2 size={16} />
          </Button>
        </div>
        
        <p className="text-sm text-muted-foreground my-1">
          ${product.price.toFixed(2)}
        </p>
        
        <div className="flex items-center justify-between mt-auto">
          <div className="flex items-center border rounded-md">
            <Button 
              variant="ghost" 
              size="icon" 
              className="h-8 w-8 rounded-none"
              onClick={handleDecreaseQuantity}
              aria-label="Decrease quantity"
            >
              <Minus size={14} />
            </Button>
            <span className="w-8 text-center text-sm">{quantity}</span>
            <Button 
              variant="ghost" 
              size="icon" 
              className="h-8 w-8 rounded-none"
              onClick={handleIncreaseQuantity}
              aria-label="Increase quantity"
            >
              <Plus size={14} />
            </Button>
          </div>
          
          <span className="font-medium">
            ${(product.price * quantity).toFixed(2)}
          </span>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
