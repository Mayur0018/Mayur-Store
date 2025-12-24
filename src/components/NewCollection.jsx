import React from "react";

const products = [
  {
    title: "Crimson Luxe Gown – Elegant full-length dress",
    price: "$100.00",
    image: "https://readymadeui.com/images/fashion-img-1.webp",
  },
  {
    title: "Emerald Draped Dress – Flowing cape-style gown",
    price: "$120.00",
    image: "https://readymadeui.com/images/fashion-img-2.webp",
  },
  {
    title: "Floral Puff Sleeve Dress – Feminine and casual",
    price: "$140.00",
    image: "https://readymadeui.com/images/fashion-img-6.webp",
  },
   {
    title: "Emerald Draped Dress – Flowing cape-style gown",
    price: "$120.00",
    image: "https://readymadeui.com/images/fashion-img-2.webp",
  },
];

const NewCollection = () => {
  return (
    <div className="bg-white p-4 mx-auto max-w-[1400px]">
      <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-6 sm:mb-8">
        Premium Threads
      </h2>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
        {products.map((item, index) => (
          <div key={index} className="group overflow-hidden relative">
            <div className="aspect-[3/4] bg-slate-100 w-full overflow-hidden">
              <img
                src={item.image}
                alt={item.title}
                className="w-96 h-full object-cover object-top group-hover:scale-110 transition-all duration-700"
              />
            </div>

            <div className="p-4 relative">
              {/* Hover Buttons */}
              <div
                className="flex justify-between gap-2 w-full absolute px-4 pt-3 z-10
                transition-all duration-500
                left-0 right-0
                group-hover:bottom-20
                lg:bottom-5 lg:opacity-0 lg:bg-white lg:group-hover:opacity-100
                max-lg:bottom-20 max-lg:py-3 max-lg:bg-white/60"
              >
              </div>

              {/* Product Info */}
              <div className="z-20 relative bg-white">
                <h6 className="text-[15px] font-semibold text-slate-900 truncate">
                  {item.title}
                </h6>
                <h6 className="text-sm text-slate-600 font-medium mt-2">
                  {item.price}
                </h6>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NewCollection;
