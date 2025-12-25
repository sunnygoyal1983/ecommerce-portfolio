'use client';

import Link from 'next/link';
import { useCart } from '@/context/CartContext';
import CartItem from '@/components/CartItem';
import { formatPrice } from '@/lib/utils';
import { ArrowRight, ShoppingBag } from 'lucide-react';

export default function CartPage() {
  const { items, totalPrice, totalItems } = useCart();

  if (items.length === 0) {
    return (
      <div className="container mx-auto px-4 py-20 text-center">
        <div className="flex flex-col items-center justify-center space-y-6">
          <div className="bg-gray-100 p-6 rounded-full">
            <ShoppingBag size={48} className="text-gray-400" />
          </div>
          <h1 className="text-3xl font-bold text-gray-900">Your cart is empty</h1>
          <p className="text-gray-600 max-w-md mx-auto">
            Looks like you haven't added anything to your cart yet. 
            Explore our collections and find something you love!
          </p>
          <Link
            href="/"
            className="inline-block bg-black text-white px-8 py-3 rounded-md font-bold hover:bg-gray-800 transition"
          >
            Continue Shopping
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-8 text-gray-900">Shopping Cart ({totalItems})</h1>
      
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        {/* Cart Items */}
        <div className="lg:col-span-8">
          <div className="border-t">
            {items.map((item) => (
              <CartItem key={item.id} item={item} />
            ))}
          </div>
          
          <div className="mt-8">
            <Link
              href="/"
              className="text-black font-semibold flex items-center hover:underline"
            >
              ← Continue Shopping
            </Link>
          </div>
        </div>

        {/* Order Summary */}
        <div className="lg:col-span-4">
          <div className="bg-gray-50 rounded-xl p-6 sticky top-24">
            <h2 className="text-xl font-bold mb-6 text-gray-900">Order Summary</h2>
            
            <div className="space-y-4 mb-6">
              <div className="flex justify-between text-gray-600">
                <span>Subtotal</span>
                <span>{formatPrice(totalPrice)}</span>
              </div>
              <div className="flex justify-between text-gray-600">
                <span>Shipping</span>
                <span className="text-green-600 font-medium">Free</span>
              </div>
              <div className="flex justify-between text-gray-600">
                <span>Tax</span>
                <span>{formatPrice(totalPrice * 0.1)}</span>
              </div>
              <div className="border-t pt-4 flex justify-between text-xl font-bold text-gray-900">
                <span>Total</span>
                <span>{formatPrice(totalPrice * 1.1)}</span>
              </div>
            </div>

            <Link
              href="/checkout"
              className="w-full bg-black text-white py-4 rounded-md font-bold text-lg hover:bg-gray-800 transition flex items-center justify-center space-x-2"
            >
              <span>Proceed to Checkout</span>
              <ArrowRight size={20} />
            </Link>
            
            <p className="mt-4 text-xs text-gray-500 text-center">
              Shipping and taxes calculated at checkout.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
