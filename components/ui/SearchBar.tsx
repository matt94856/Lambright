'use client';

import { useState, useRef, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';
import { products } from '@/data/products';

const SearchBar = () => {
  const router = useRouter();
  const [query, setQuery] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const [results, setResults] = useState<typeof products>([]);
  const searchRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleSearch = (value: string) => {
    setQuery(value);
    if (value.length > 2) {
      const filtered = products.filter(
        (product) =>
          product.name.toLowerCase().includes(value.toLowerCase()) ||
          product.description.toLowerCase().includes(value.toLowerCase()) ||
          product.category.toLowerCase().includes(value.toLowerCase())
      );
      setResults(filtered.slice(0, 5));
      setIsOpen(true);
    } else {
      setResults([]);
      setIsOpen(false);
    }
  };

  const handleSelect = (productId: string) => {
    setQuery('');
    setIsOpen(false);
    router.push(`/product/${productId}`);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim()) {
      router.push(`/search?q=${encodeURIComponent(query)}`);
      setQuery('');
      setIsOpen(false);
    }
  };

  return (
    <div className="relative" ref={searchRef}>
      <form onSubmit={handleSubmit} className="relative">
        <input
          type="text"
          value={query}
          onChange={(e) => handleSearch(e.target.value)}
          placeholder="Search products, brands, and more..."
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-grainger-blue"
        />
        <button
          type="submit"
          className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
        >
          <MagnifyingGlassIcon className="h-6 w-6" />
        </button>
      </form>

      {/* Autocomplete Results */}
      {isOpen && results.length > 0 && (
        <div className="absolute z-50 w-full mt-1 bg-white rounded-lg shadow-lg border border-gray-200">
          {results.map((product) => (
            <button
              key={product.id}
              onClick={() => handleSelect(product.id)}
              className="w-full px-4 py-3 text-left hover:bg-gray-50 flex items-center space-x-4"
            >
              <div className="relative h-12 w-12 flex-shrink-0">
                <img
                  src={product.image}
                  alt={product.name}
                  className="object-cover rounded"
                />
              </div>
              <div>
                <div className="font-medium text-gray-900">{product.name}</div>
                <div className="text-sm text-gray-500">{product.category}</div>
              </div>
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default SearchBar; 