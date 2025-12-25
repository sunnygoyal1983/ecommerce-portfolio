'use client';

import { useState } from 'react';
import { useCart } from '@/context/CartContext';
import { Product } from '@/lib/types';
import { Minus, Plus, ShoppingCart } from 'lucide-react';

interface AddToCartButtonProps {
  product: Product;
}

export default function AddToCartButton({ product }: AddToCartButtonProps) {
  const [quantity, setQuantity] = useState(1);
  const { addToCart } = useCart();

  const handleIncrement = () => setQuantity((prev) => prev + 1);
  const handleDecrement = () => setQuantity((prev) => (prev > 1 ? prev - 1 : 1));

  return (
    <div className="flex flex-col sm:flex-row gap-4">
      <div className="flex items-center border-2 border-gray-200 rounded-lg overflow-hidden h-14">
        <button
          onClick={handleDecrement}
          className="px-4 h-full hover:bg-gray-100 transition text-gray-600"
          aria-label="Decrease quantity"
        >
          <Minus size={20} />
        </button>
        <span className="w-12 text-center font-bold text-lg">{quantity}</span>
        <button
          onClick={handleIncrement}
          className="px-4 h-full hover:bg-gray-100 transition text-gray-600"
          aria-label="Increase quantity"
        >
          <Plus size={20} />
        </button>
      </div>

      <button
        onClick={() => addToCart(product, quantity)}
        className="flex-1 bg-black text-white h-14 rounded-lg font-bold flex items-center justify-center space-x-2 hover:bg-gray-800 transition active:scale-[0.98]"
      >
        <ShoppingCart size={20} />
        <span>Add to Cart</span>
      </button>
    </div>
  );
}
