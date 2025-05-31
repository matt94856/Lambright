import Image from "next/image";
import Link from "next/link";
import Layout from "@/components/layout/Layout";

export default function Home() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative h-[600px] bg-grainger-gray">
        <div className="absolute inset-0">
          <Image
            src="/images/hero-placeholder.jpg"
            alt="Industrial supplies"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black bg-opacity-40" />
        </div>
        <div className="relative container mx-auto px-4 h-full flex items-center">
          <div className="max-w-2xl text-white">
            <h1 className="text-5xl font-bold mb-4">
              Your Trusted MRO Partner
            </h1>
            <p className="text-xl mb-8">
              Find the industrial supplies and equipment you need to keep your business running smoothly.
            </p>
            <Link
              href="/categories"
              className="bg-grainger-blue hover:bg-grainger-dark-blue text-white px-8 py-3 rounded-lg inline-block transition-colors"
            >
              Shop Now
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Categories */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8">Featured Categories</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[1, 2, 3].map((item) => (
              <Link
                key={item}
                href={`/category/${item}`}
                className="group relative h-64 rounded-lg overflow-hidden"
              >
                <Image
                  src={`/images/category-${item}-placeholder.jpg`}
                  alt={`Category ${item}`}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black bg-opacity-30 group-hover:bg-opacity-40 transition-opacity" />
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <h3 className="text-xl font-semibold mb-2">Category Name</h3>
                  <p className="text-sm">Browse our selection of quality products</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8">Featured Products</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[1, 2, 3, 4].map((item) => (
              <div key={item} className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="relative h-48">
                  <Image
                    src={`/images/product-${item}-placeholder.jpg`}
                    alt={`Product ${item}`}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-semibold mb-2">Product Name</h3>
                  <p className="text-gray-600 text-sm mb-4">Product description goes here</p>
                  <div className="flex justify-between items-center">
                    <span className="text-grainger-blue font-bold">$99.99</span>
                    <button className="bg-grainger-blue hover:bg-grainger-dark-blue text-white px-4 py-2 rounded transition-colors">
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-grainger-blue text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Join thousands of businesses that trust Grainger for their industrial supply needs.
          </p>
          <Link
            href="/register"
            className="bg-white text-grainger-blue hover:bg-gray-100 px-8 py-3 rounded-lg inline-block transition-colors"
          >
            Create an Account
          </Link>
        </div>
      </section>
    </Layout>
  );
}
