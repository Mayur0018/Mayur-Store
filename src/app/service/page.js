import React from 'react'

const page = () => {
  return (
     <div className="bg-gray-50 py-20">
      {/* Hero Section */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold text-gray-900">
            Our Services
          </h1>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            At <span className="font-semibold">Mayurs Store</span>, we provide
            premium services to ensure the best shopping experience for our
            customers.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {/* Service Card */}
            <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
              <div className="w-12 h-12 flex items-center justify-center bg-black text-white rounded-full mb-4">
                🚚
              </div>
              <h3 className="text-lg font-semibold text-gray-900">
                Fast Delivery
              </h3>
              <p className="text-gray-600 mt-2 text-sm">
                Get your products delivered quickly and safely with our trusted
                logistics partners.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
              <div className="w-12 h-12 flex items-center justify-center bg-black text-white rounded-full mb-4">
                🔒
              </div>
              <h3 className="text-lg font-semibold text-gray-900">
                Secure Payments
              </h3>
              <p className="text-gray-600 mt-2 text-sm">
                Multiple secure payment options to ensure your transactions are
                always protected.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
              <div className="w-12 h-12 flex items-center justify-center bg-black text-white rounded-full mb-4">
                🔄
              </div>
              <h3 className="text-lg font-semibold text-gray-900">
                Easy Returns
              </h3>
              <p className="text-gray-600 mt-2 text-sm">
                Hassle-free return and exchange policy for a stress-free shopping
                experience.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
              <div className="w-12 h-12 flex items-center justify-center bg-black text-white rounded-full mb-4">
                🎧
              </div>
              <h3 className="text-lg font-semibold text-gray-900">
                24/7 Customer Support
              </h3>
              <p className="text-gray-600 mt-2 text-sm">
                Our support team is always available to help you with any issues
                or questions.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
              <div className="w-12 h-12 flex items-center justify-center bg-black text-white rounded-full mb-4">
                ⭐
              </div>
              <h3 className="text-lg font-semibold text-gray-900">
                Quality Products
              </h3>
              <p className="text-gray-600 mt-2 text-sm">
                We offer only high-quality, verified products from trusted
                brands.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
              <div className="w-12 h-12 flex items-center justify-center bg-black text-white rounded-full mb-4">
                🛍️
              </div>
              <h3 className="text-lg font-semibold text-gray-900">
                Personalized Shopping
              </h3>
              <p className="text-gray-600 mt-2 text-sm">
                Enjoy product recommendations tailored to your style and needs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-black py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white">
            Experience Shopping Like Never Before
          </h2>
          <p className="text-gray-300 mt-4">
            Join thousands of happy customers shopping with Mayurs Store.
          </p>
          <button className="mt-6 bg-white text-black px-6 py-3 rounded-lg font-medium hover:bg-gray-200 transition">
            Start Shopping
          </button>
        </div>
      </section>
    </div>
  )
}

export default page