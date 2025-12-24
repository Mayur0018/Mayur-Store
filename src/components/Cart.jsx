import React from "react";
import Link from "next/link";
import { products } from "@/Data/product";

const Cart = () => {
  return (
    <section className="py-12">
      <h2 className="text-2xl font-bold mb-6">Featured Products</h2>

      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {products.map((product) => (
          <Link
            key={product.id}
            href={`/cartdetails/${product.id}`}
            className="block"
          >
            <div className="bg-white   rounded-lg p-4 hover:shadow-lg transition">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-56 object-cover rounded"
              />

              <h3 className="mt-3 font-medium">{product.name}</h3>

              <p className="text-lg font-semibold mt-1">{product.price}</p>

              <button className="mt-3 w-full bg-black text-white py-2 rounded-lg">
                View Details
              </button>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default Cart;
