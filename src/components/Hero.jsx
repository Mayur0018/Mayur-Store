import React from "react";

const Hero = () => {
  return (
    <section className="bg-gray-100 py-20">
      <div className=" mx-auto px-4 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Upgrade Your Shopping Experience
          </h1>
          <p className="text-gray-600 mb-6">
            Discover premium products at the best prices. Quality you can trust.
          </p>
          <button className="bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-800">
            Shop Now
          </button>
        </div>

        <div className="hidden md:block">
          <img
            src="https://www.iconicindia.com/cdn/shop/files/gANT_1c7bb5a4-0203-4127-8bd7-d9312db6d237.png?v=1743161744&width=1366"
            alt="Clothes on rail"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;    
