"use client";

import { useParams } from "next/navigation";
import { products } from "@/Data/product";
import { useContext, useState } from "react";
import { CartContext } from "@/context/CartContext";
import toast from "react-hot-toast";

export default function page() {
  const { id } = useParams();
  const product = products.find((item) => item.id === Number(id));
  const { addToCart } = useContext(CartContext);

  const [qty, setQty] = useState(1);

  const handleAddToCart = () => {
    addToCart({ ...product, qty });
    toast.success("Product added to cart 🛒");
  };
  if (!product) return <p className="p-10 text-center">Product Not Found</p>;

  return (
    <section className="max-w-7xl mx-auto px-4 py-20">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* LEFT: IMAGE */}
        <div className="flex justify-center">
          <img
            src={product.image}
            alt={product.name}
            className="w-auto h-[420px] object-cover rounded-2xl shadow-lg"
          />
        </div>

        {/* RIGHT: INFO */}
        <div className="flex flex-col">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900">
            {product.name}
          </h1>

          <p className="text-2xl font-semibold text-black mt-4">
            {product.price}
          </p>

          {/* Rating */}
          <div className="flex items-center gap-1 mt-3">
            ⭐⭐⭐⭐☆
            <span className="text-sm text-gray-500 ml-2">(124 reviews)</span>
          </div>

          <p className="text-gray-600 mt-6 leading-relaxed">
            {product.description}
          </p>

          {/* Quantity */}
          <div className="flex items-center gap-4 mt-8">
            <span className="font-medium">Quantity</span>
            <div className="flex items-center border rounded-lg overflow-hidden">
              <button
                onClick={() => setQty(Math.max(1, qty - 1))}
                className="px-4 py-2 text-lg hover:bg-gray-100"
              >
                −
              </button>
              <span className="px-4 font-semibold">{qty}</span>
              <button
                onClick={() => setQty(qty + 1)}
                className="px-4 py-2 text-lg hover:bg-gray-100"
              >
                +
              </button>
            </div>
          </div>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mt-10">
            <button
              onClick={handleAddToCart}
              className="flex-1 bg-black text-white py-3 rounded-xl text-lg hover:bg-gray-800 transition"
            >
              Add to Cart
            </button>

            <button className="flex-1 border border-black py-3 rounded-xl text-lg hover:bg-black hover:text-white transition">
              Buy Now
            </button>
          </div>

          {/* Extra Info */}
          <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-4 text-sm text-gray-600">
            <div className="flex items-center gap-2">🚚 Free Delivery</div>
            <div className="flex items-center gap-2">🔄 7 Days Return</div>
            <div className="flex items-center gap-2">🔒 Secure Payment</div>
          </div>
        </div>
      </div>
    </section>
  );
}
