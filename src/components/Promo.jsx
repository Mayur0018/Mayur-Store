import React from "react";

const Promo = () => {
  return (
    <section className="bg-black text-white py-16">
      <div className="mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-4">Limited Time Offer</h2>
        <p className="text-gray-300 mb-6">
          Get up to 40% off on selected products.
        </p>
        <button className="bg-white text-black px-6 py-3 rounded-lg font-medium hover:bg-gray-200">
          Explore Deals
        </button>
      </div>
    </section>
  );
};

export default Promo;
