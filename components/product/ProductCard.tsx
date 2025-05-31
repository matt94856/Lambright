import Image from 'next/image';
import Link from 'next/link';
import { StarIcon } from '@heroicons/react/24/solid';
import { StarIcon as StarOutlineIcon } from '@heroicons/react/24/outline';
import type { Product } from '@/data/products';
import { useCartStore } from '@/store/cart';

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  const addItem = useCartStore((state) => state.addItem);

  const renderStars = (rating: number) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      if (i <= Math.floor(rating)) {
        stars.push(
          <StarIcon key={i} className="h-4 w-4 text-yellow-400" />
        );
      } else if (i - 0.5 <= rating) {
        stars.push(
          <StarIcon key={i} className="h-4 w-4 text-yellow-400" />
        );
      } else {
        stars.push(
          <StarOutlineIcon key={i} className="h-4 w-4 text-yellow-400" />
        );
      }
    }
    return stars;
  };

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
      <Link href={`/product/${product.id}`}>
        <div className="relative h-48">
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-cover"
          />
        </div>
        <div className="p-4">
          <h3 className="font-semibold mb-2 line-clamp-2">{product.name}</h3>
          <p className="text-gray-600 text-sm mb-4 line-clamp-2">{product.description}</p>
          
          {/* Rating */}
          <div className="flex items-center mb-4">
            <div className="flex mr-2">
              {renderStars(product.rating)}
            </div>
            <span className="text-sm text-gray-600">({product.reviews})</span>
          </div>

          {/* Price and Add to Cart */}
          <div className="flex justify-between items-center">
            <span className="text-grainger-blue font-bold">
              ${product.price.toFixed(2)}
            </span>
            <button
              className="bg-grainger-blue hover:bg-grainger-dark-blue text-white px-4 py-2 rounded transition-colors"
              onClick={(e) => {
                e.preventDefault();
                addItem(product, 1);
              }}
            >
              Add to Cart
            </button>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default ProductCard; 