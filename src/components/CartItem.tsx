'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Minus, Plus, Trash2 } from 'lucide-react';
import { CartItem as CartItemType } from '@/lib/types';
import { formatPrice } from '@/lib/utils';
import { useCart } from '@/context/CartContext';

interface CartItemProps {
  item: CartItemType;
}

const CartItem = ({ item }: CartItemProps) => {
  const { updateQuantity, removeFromCart } = useCart();

  return (
    <div className="flex items-center py-6 border-b">
      <div className="relative h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border bg-gray-50">
        <Image
          src={item.images[0]}
          alt={item.name}
          fill
          className="object-cover"
        />
      </div>

      <div className="ml-4 flex flex-1 flex-col">
        <div>
          <div className="flex justify-between text-base font-medium text-gray-900">
            <h3>
              <Link href={`/product/${item.slug}`} className="hover:underline">
                {item.name}
              </Link>
            </h3>
            <p className="ml-4">{formatPrice(item.price * item.quantity)}</p>
          </div>
          <p className="mt-1 text-sm text-gray-500 capitalize">{item.category}</p>
        </div>
        
        <div className="flex flex-1 items-end justify-between text-sm mt-4">
          <div className="flex items-center border rounded-md">
            <button
              onClick={() => updateQuantity(item.id, item.quantity - 1)}
              className="p-1 hover:bg-gray-100 transition"
              disabled={item.quantity <= 1}
            >
              <Minus size={16} />
            </button>
            <span className="px-3 font-medium">{item.quantity}</span>
            <button
              onClick={() => updateQuantity(item.id, item.quantity + 1)}
              className="p-1 hover:bg-gray-100 transition"
            >
              <Plus size={16} />
            </button>
          </div>

          <div className="flex">
            <button
              onClick={() => removeFromCart(item.id)}
              className="flex items-center text-red-600 hover:text-red-500 transition font-medium"
            >
              <Trash2 size={18} className="mr-1" />
              Remove
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
