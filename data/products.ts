export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  category: string;
  brand: string;
  rating: number;
  reviews: number;
  inStock: boolean;
  features: string[];
}

export const products: Product[] = [
  {
    id: '1',
    name: 'Industrial Safety Gloves',
    description: 'Heavy-duty safety gloves for industrial use. Provides excellent grip and protection.',
    price: 24.99,
    image: '/images/product-1-placeholder.jpg',
    category: 'Safety',
    brand: 'SafetyPro',
    rating: 4.5,
    reviews: 128,
    inStock: true,
    features: [
      'Cut-resistant material',
      'Chemical resistant',
      'Comfortable fit',
      'Reinforced palm'
    ]
  },
  {
    id: '2',
    name: 'Professional Tool Set',
    description: 'Complete set of professional-grade tools for industrial maintenance.',
    price: 199.99,
    image: '/images/product-2-placeholder.jpg',
    category: 'Tools',
    brand: 'ProTools',
    rating: 4.8,
    reviews: 256,
    inStock: true,
    features: [
      '72-piece set',
      'Durable carrying case',
      'Lifetime warranty',
      'Professional grade'
    ]
  },
  {
    id: '3',
    name: 'Industrial Air Compressor',
    description: 'High-performance air compressor for industrial applications.',
    price: 599.99,
    image: '/images/product-3-placeholder.jpg',
    category: 'Equipment',
    brand: 'AirTech',
    rating: 4.6,
    reviews: 89,
    inStock: true,
    features: [
      '5 HP motor',
      '60-gallon tank',
      'Oil-free operation',
      'Low noise level'
    ]
  },
  {
    id: '4',
    name: 'Safety Goggles',
    description: 'Professional safety goggles with anti-fog coating.',
    price: 19.99,
    image: '/images/product-4-placeholder.jpg',
    category: 'Safety',
    brand: 'SafetyPro',
    rating: 4.3,
    reviews: 167,
    inStock: true,
    features: [
      'Anti-fog coating',
      'UV protection',
      'Comfortable fit',
      'Impact resistant'
    ]
  }
];

export const categories = [
  {
    id: '1',
    name: 'Safety Equipment',
    description: 'Personal protective equipment and safety gear',
    image: '/images/category-1-placeholder.jpg'
  },
  {
    id: '2',
    name: 'Tools & Equipment',
    description: 'Professional tools and industrial equipment',
    image: '/images/category-2-placeholder.jpg'
  },
  {
    id: '3',
    name: 'Electrical Supplies',
    description: 'Electrical components and supplies',
    image: '/images/category-3-placeholder.jpg'
  }
]; 