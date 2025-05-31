"use client";
export const dynamic = "force-dynamic";

import { useSearchParams } from 'next/navigation';
import Layout from '@/components/layout/Layout';
import ProductCard from '@/components/product/ProductCard';
import { products } from '@/data/products';

export default function SearchPage() {
  const searchParams = useSearchParams();
  const query = searchParams.get('q') || '';

  const filteredProducts = products.filter(
    (product) =>
      product.name.toLowerCase().includes(query.toLowerCase()) ||
      product.description.toLowerCase().includes(query.toLowerCase()) ||
      product.category.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8">
          Search Results for "{query}"
        </h1>

        {filteredProducts.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-gray-600 mb-4">
              No products found matching your search criteria.
            </p>
            <p className="text-gray-600">
              Try adjusting your search terms or browse our categories.
            </p>
          </div>
        ) : (
          <>
            <p className="text-gray-600 mb-8">
              Found {filteredProducts.length} results
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {filteredProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </>
        )}
      </div>
    </Layout>
  );
} 