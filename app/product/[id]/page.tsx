import Image from 'next/image';
import { notFound } from 'next/navigation';
import Layout from '@/components/layout/Layout';
import { products } from '@/data/products';
import { StarIcon } from '@heroicons/react/24/solid';
import { StarIcon as StarOutlineIcon } from '@heroicons/react/24/outline';
import { useState } from 'react';
import { useCartStore } from '@/store/cart';

interface ProductPageProps {
  params: {
    id: string;
  };
}

export default function ProductPage({ params }: ProductPageProps) {
  const product = products.find((p) => p.id === params.id);
  const addItem = useCartStore((state) => state.addItem);
  const [quantity, setQuantity] = useState(1);

  if (!product) {
    notFound();
  }

  const renderStars = (rating: number) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      if (i <= Math.floor(rating)) {
        stars.push(
          <StarIcon key={i} className="h-5 w-5 text-yellow-400" />
        );
      } else if (i - 0.5 <= rating) {
        stars.push(
          <StarIcon key={i} className="h-5 w-5 text-yellow-400" />
        );
      } else {
        stars.push(
          <StarOutlineIcon key={i} className="h-5 w-5 text-yellow-400" />
        );
      }
    }
    return stars;
  };

  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Product Image */}
          <div className="relative h-[500px] rounded-lg overflow-hidden">
            <Image
              src={product.image}
              alt={product.name}
              fill
              className="object-cover"
              priority
            />
          </div>

          {/* Product Info */}
          <div>
            <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
            
            {/* Rating */}
            <div className="flex items-center mb-4">
              <div className="flex mr-2">
                {renderStars(product.rating)}
              </div>
              <span className="text-gray-600">({product.reviews} reviews)</span>
            </div>

            {/* Price */}
            <div className="text-2xl font-bold text-grainger-blue mb-6">
              ${product.price.toFixed(2)}
            </div>

            {/* Description */}
            <p className="text-gray-600 mb-6">{product.description}</p>

            {/* Features */}
            <div className="mb-6">
              <h2 className="text-xl font-semibold mb-3">Features</h2>
              <ul className="list-disc list-inside space-y-2">
                {product.features.map((feature, index) => (
                  <li key={index} className="text-gray-600">{feature}</li>
                ))}
              </ul>
            </div>

            {/* Add to Cart */}
            <div className="flex items-center space-x-4">
              <div className="flex items-center border border-gray-300 rounded-lg">
                <button
                  className="px-4 py-2 text-gray-600 hover:bg-gray-100"
                  onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                >
                  -
                </button>
                <span className="px-4 py-2">{quantity}</span>
                <button
                  className="px-4 py-2 text-gray-600 hover:bg-gray-100"
                  onClick={() => setQuantity((q) => q + 1)}
                >
                  +
                </button>
              </div>
              <button
                className="flex-1 bg-grainger-blue hover:bg-grainger-dark-blue text-white px-8 py-3 rounded-lg transition-colors"
                onClick={() => addItem(product, quantity)}
              >
                Add to Cart
              </button>
            </div>

            {/* Additional Info */}
            <div className="mt-8 pt-8 border-t border-gray-200">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <h3 className="font-semibold mb-2">Brand</h3>
                  <p className="text-gray-600">{product.brand}</p>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Category</h3>
                  <p className="text-gray-600">{product.category}</p>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Availability</h3>
                  <p className="text-green-600">
                    {product.inStock ? 'In Stock' : 'Out of Stock'}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
} 