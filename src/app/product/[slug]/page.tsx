import { notFound } from 'next/navigation';
import { getProductBySlug } from '@/lib/data';
import Image from 'next/image';
import { formatPrice } from '@/lib/utils';
import AddToCartButton from './AddToCartButton';

interface ProductPageProps {
  params: Promise<{ slug: string }>;
}

export default async function ProductPage({ params }: ProductPageProps) {
  const { slug } = await params;
  const product = await getProductBySlug(slug);

  if (!product) {
    notFound();
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Image Gallery */}
        <div className="relative aspect-square rounded-2xl overflow-hidden bg-gray-100 border">
          <Image
            src={product.images[0]}
            alt={product.name}
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* Product Info */}
        <div className="flex flex-col justify-center">
          <div className="mb-6">
            <span className="text-sm font-bold text-gray-500 uppercase tracking-widest mb-2 block">
              {product.category}
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              {product.name}
            </h1>
            <p className="text-3xl font-light text-gray-900">
              {formatPrice(product.price)}
            </p>
          </div>

          <div className="prose prose-sm text-gray-600 mb-8 max-w-none">
            <p className="text-lg leading-relaxed">{product.description}</p>
          </div>

          <div className="space-y-6">
            <div className="flex items-center space-x-4">
              <span className={`h-3 w-3 rounded-full ${product.stock > 0 ? 'bg-green-500' : 'bg-red-500'}`}></span>
              <span className="text-sm font-medium text-gray-700">
                {product.stock > 0 ? `${product.stock} items in stock` : 'Out of stock'}
              </span>
            </div>

            <AddToCartButton product={product} />
          </div>

          {/* Additional Features */}
          <div className="mt-12 pt-12 border-t grid grid-cols-2 gap-6">
            <div>
              <h4 className="font-bold text-gray-900 mb-1">Details</h4>
              <p className="text-sm text-gray-600 italic">Hand-selected premium quality materials.</p>
            </div>
            <div>
              <h4 className="font-bold text-gray-900 mb-1">Shipping</h4>
              <p className="text-sm text-gray-600 italic">Free worldwide shipping on this item.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
