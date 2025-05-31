"use client";
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { MagnifyingGlassIcon, ShoppingCartIcon, UserIcon } from '@heroicons/react/24/outline';
import { motion } from 'framer-motion';
import SearchBar from '@/components/ui/SearchBar';
import { useCartStore } from '@/store/cart';

const Header = () => {
  const cartCount = useCartStore((state) => state.totalItems());

  return (
    <header className="bg-white shadow-md">
      {/* Top Bar */}
      <div className="bg-grainger-blue text-white py-2">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <div className="flex items-center space-x-4">
            <Link href="/contact" className="text-sm hover:underline">Contact Us</Link>
            <Link href="/locations" className="text-sm hover:underline">Find a Branch</Link>
          </div>
          <div className="flex items-center space-x-4">
            <Link href="/account" className="text-sm hover:underline">My Account</Link>
            <Link href="/orders" className="text-sm hover:underline">Order Status</Link>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0">
            <Image
              src="/images/logo-placeholder.svg"
              alt="Grainger Logo"
              width={180}
              height={40}
              className="h-10 w-auto"
            />
          </Link>

          {/* Search Bar */}
          <div className="flex-1 max-w-2xl mx-8">
            <SearchBar />
          </div>

          {/* Right Side Icons */}
          <div className="flex items-center space-x-6">
            <Link href="/account" className="flex items-center space-x-1 text-gray-700 hover:text-grainger-blue">
              <UserIcon className="h-6 w-6" />
              <span className="hidden md:inline">Sign In</span>
            </Link>
            <Link href="/cart" className="flex items-center space-x-1 text-gray-700 hover:text-grainger-blue relative">
              <ShoppingCartIcon className="h-6 w-6" />
              {cartCount > 0 && (
                <motion.span
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  className="absolute -top-2 -right-2 bg-grainger-blue text-white text-xs rounded-full h-5 w-5 flex items-center justify-center"
                >
                  {cartCount}
                </motion.span>
              )}
              <span className="hidden md:inline">Cart</span>
            </Link>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="bg-grainger-gray border-t border-gray-200">
        <div className="container mx-auto px-4">
          <ul className="flex space-x-8 py-3">
            <li>
              <Link href="/categories" className="text-gray-700 hover:text-grainger-blue">
                Categories
              </Link>
            </li>
            <li>
              <Link href="/brands" className="text-gray-700 hover:text-grainger-blue">
                Brands
              </Link>
            </li>
            <li>
              <Link href="/deals" className="text-gray-700 hover:text-grainger-blue">
                Deals
              </Link>
            </li>
            <li>
              <Link href="/solutions" className="text-gray-700 hover:text-grainger-blue">
                Solutions
              </Link>
            </li>
            <li>
              <Link href="/resources" className="text-gray-700 hover:text-grainger-blue">
                Resources
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header; 