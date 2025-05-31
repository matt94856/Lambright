'use client';

import { useParams } from 'next/navigation';
import Layout from '@/components/layout/Layout';
import ProductCard from '@/components/product/ProductCard';
import { products, categories } from '@/data/products';

export default function CategoryPage() {
  const params = useParams();
  const categoryId = params.id as string;

  const category = categories.find((c) => c.id === categoryId);
  const categoryProducts = products.filter(
    (product) => product.category.toLowerCase() === category?.name.toLowerCase()
  );

  if (!category) {
    return (
      <Layout>
        <div className="container mx-auto px-4 py-16 text-center">
          <h1 className="text-3xl font-bold mb-4">Category Not Found</h1>
          <p className="text-gray-600">
            The category you're looking for doesn't exist.
          </p>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        {/* Category Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-4">{category.name}</h1>
          <p className="text-gray-600">{category.description}</p>
        </div>

        {/* Products Grid */}
        {categoryProducts.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-gray-600">
              No products found in this category.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {categoryProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        )}
      </div>
    </Layout>
  );
} 