'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Product } from '@/lib/types';
import { formatPrice } from '@/lib/utils';
import { useCart } from '@/context/CartContext';
import { ShoppingCart } from 'lucide-react';

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  const { addToCart } = useCart();

  return (
    <div className="group bg-white rounded-lg border overflow-hidden hover:shadow-md transition">
      <Link href={`/product/${product.slug}`} className="block relative aspect-square overflow-hidden bg-gray-100">
        <Image
          src={product.images[0]}
          alt={product.name}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-300"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </Link>
      
      <div className="p-4">
        <div className="mb-2">
          <Link 
            href={`/category/${product.category}`}
            className="text-xs font-medium text-gray-500 uppercase tracking-wider hover:text-gray-900"
          >
            {product.category}
          </Link>
        </div>
        
        <Link href={`/product/${product.slug}`}>
          <h3 className="text-lg font-semibold text-gray-800 mb-1 group-hover:text-black transition">
            {product.name}
          </h3>
        </Link>
        
        <div className="flex items-center justify-between mt-4">
          <span className="text-xl font-bold text-gray-900">
            {formatPrice(product.price)}
          </span>
          
          <button
            onClick={(e) => {
              e.preventDefault();
              addToCart(product);
            }}
            className="p-2 rounded-full bg-gray-900 text-white hover:bg-black transition-colors"
            aria-label="Add to cart"
          >
            <ShoppingCart size={18} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
