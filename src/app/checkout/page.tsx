'use client';

import { useCart } from '@/context/CartContext';
import CheckoutForm from '@/components/CheckoutForm';
import { formatPrice } from '@/lib/utils';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

export default function CheckoutPage() {
  const { items, totalPrice } = useCart();
  const router = useRouter();

  // Redirect to cart if it's empty
  useEffect(() => {
    if (items.length === 0) {
      router.push('/cart');
    }
  }, [items, router]);

  if (items.length === 0) return null;

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-8 text-gray-900">Checkout</h1>
      
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        {/* Checkout Form */}
        <div className="lg:col-span-7">
          <div className="bg-white rounded-xl border p-6 md:p-8">
            <h2 className="text-xl font-bold mb-6 text-gray-900">Shipping Information</h2>
            <CheckoutForm />
          </div>
        </div>

        {/* Order Summary Sidebar */}
        <div className="lg:col-span-5">
          <div className="bg-gray-50 rounded-xl p-6 sticky top-24 border">
            <h2 className="text-xl font-bold mb-6 text-gray-900">Your Order</h2>
            
            <div className="space-y-4 mb-6 max-h-[400px] overflow-y-auto pr-2">
              {items.map((item) => (
                <div key={item.id} className="flex items-center space-x-4">
                  <div className="relative h-16 w-16 flex-shrink-0 overflow-hidden rounded-md border bg-white">
                    <Image
                      src={item.images[0]}
                      alt={item.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-sm font-medium text-gray-900 line-clamp-1">{item.name}</h3>
                    <p className="text-xs text-gray-500">Qty: {item.quantity}</p>
                  </div>
                  <p className="text-sm font-bold text-gray-900">
                    {formatPrice(item.price * item.quantity)}
                  </p>
                </div>
              ))}
            </div>

            <div className="space-y-4 border-t pt-6">
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

            <div className="mt-8 p-4 bg-white rounded-lg border border-dashed border-gray-300">
              <p className="text-sm text-gray-600 text-center">
                This is a mock checkout process for portfolio purposes. 
                No real payment will be processed.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
