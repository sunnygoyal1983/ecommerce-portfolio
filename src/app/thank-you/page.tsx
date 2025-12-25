'use client';

import Link from 'next/link';
import { CheckCircle, ArrowRight, Home } from 'lucide-react';

export default function ThankYouPage() {
  const orderNumber = Math.floor(100000 + Math.random() * 900000);

  return (
    <div className="container mx-auto px-4 py-20 text-center">
      <div className="max-w-2xl mx-auto flex flex-col items-center justify-center space-y-8">
        <div className="bg-green-100 p-6 rounded-full text-green-600 animate-bounce-slow">
          <CheckCircle size={64} />
        </div>
        
        <div className="space-y-4">
          <h1 className="text-4xl font-bold text-gray-900">Order Confirmed!</h1>
          <p className="text-xl text-gray-600">
            Thank you for your purchase. Your order <span className="font-bold text-black">#{orderNumber}</span> has been successfully placed.
          </p>
          <p className="text-gray-500">
            A confirmation email has been sent to your inbox. We'll notify you as soon as your items are on their way!
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full mt-8">
          <Link
            href="/"
            className="flex items-center justify-center space-x-2 bg-black text-white px-8 py-4 rounded-lg font-bold hover:bg-gray-800 transition"
          >
            <Home size={20} />
            <span>Back to Home</span>
          </Link>
          <Link
            href="/category/electronics"
            className="flex items-center justify-center space-x-2 border-2 border-black text-black px-8 py-4 rounded-lg font-bold hover:bg-gray-50 transition"
          >
            <span>Continue Shopping</span>
            <ArrowRight size={20} />
          </Link>
        </div>

        <div className="pt-12 border-t w-full">
          <p className="text-sm text-gray-400">
            This is a portfolio project demonstration. No real order was processed.
          </p>
        </div>
      </div>
    </div>
  );
}
