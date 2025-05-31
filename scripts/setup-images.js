const fs = require('fs');
const path = require('path');

// Create directories if they don't exist
const dirs = [
  'public/images',
  'public/images/products',
  'public/images/categories'
];

dirs.forEach(dir => {
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
});

// Copy placeholder images
const placeholders = {
  'logo-placeholder.svg': 'public/images/logo-placeholder.svg',
  'product-placeholder.svg': 'public/images/products/product-1-placeholder.svg',
  'product-placeholder.svg': 'public/images/products/product-2-placeholder.svg',
  'product-placeholder.svg': 'public/images/products/product-3-placeholder.svg',
  'product-placeholder.svg': 'public/images/products/product-4-placeholder.svg',
  'category-placeholder.svg': 'public/images/categories/category-1-placeholder.svg',
  'category-placeholder.svg': 'public/images/categories/category-2-placeholder.svg',
  'category-placeholder.svg': 'public/images/categories/category-3-placeholder.svg',
  'hero-placeholder.svg': 'public/images/hero-placeholder.svg'
};

Object.entries(placeholders).forEach(([src, dest]) => {
  fs.copyFileSync(
    path.join(__dirname, '..', src),
    path.join(__dirname, '..', dest)
  );
});

console.log('Placeholder images have been set up successfully!'); 