const fs = require('fs');
const path = require('path');

// Generate mock categories
const categories = [
  {
    id: 'electrical',
    name: 'Electrical',
    description: 'Electrical supplies and equipment for industrial and commercial use.',
    image: '/images/categories/category-1-placeholder.svg'
  },
  {
    id: 'plumbing',
    name: 'Plumbing',
    description: 'Plumbing supplies and fixtures for residential and commercial applications.',
    image: '/images/categories/category-2-placeholder.svg'
  },
  {
    id: 'tools',
    name: 'Tools',
    description: 'Professional tools and equipment for various industries.',
    image: '/images/categories/category-3-placeholder.svg'
  }
];

// Generate mock products
const products = [
  {
    id: 'product-1',
    name: 'Industrial Circuit Breaker',
    description: 'High-quality circuit breaker for industrial applications.',
    price: 299.99,
    category: 'electrical',
    image: '/images/products/product-1-placeholder.svg',
    stock: 50,
    rating: 4.5,
    reviews: 128
  },
  {
    id: 'product-2',
    name: 'Commercial Water Heater',
    description: 'Energy-efficient water heater for commercial buildings.',
    price: 899.99,
    category: 'plumbing',
    image: '/images/products/product-2-placeholder.svg',
    stock: 25,
    rating: 4.2,
    reviews: 89
  },
  {
    id: 'product-3',
    name: 'Professional Drill Set',
    description: 'Complete drill set with various bits and accessories.',
    price: 199.99,
    category: 'tools',
    image: '/images/products/product-3-placeholder.svg',
    stock: 100,
    rating: 4.8,
    reviews: 256
  },
  {
    id: 'product-4',
    name: 'LED Work Light',
    description: 'Bright LED work light for construction and maintenance.',
    price: 79.99,
    category: 'electrical',
    image: '/images/products/product-4-placeholder.svg',
    stock: 75,
    rating: 4.3,
    reviews: 167
  }
];

// Create data directory if it doesn't exist
const dataDir = path.join(__dirname, '..', 'data');
if (!fs.existsSync(dataDir)) {
  fs.mkdirSync(dataDir);
}

// Write mock data to files
fs.writeFileSync(
  path.join(dataDir, 'categories.ts'),
  `export const categories = ${JSON.stringify(categories, null, 2)} as const;\n`
);

fs.writeFileSync(
  path.join(dataDir, 'products.ts'),
  `export const products = ${JSON.stringify(products, null, 2)} as const;\n`
);

console.log('Mock data generated successfully! 🎉'); 