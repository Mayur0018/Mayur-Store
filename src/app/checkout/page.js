import React from 'react'

const page = () => {
  return (
     <div className="max-w-5xl max-lg:max-w-2xl mx-auto py-20">
      <h1 className="text-xl font-semibold text-slate-900">Shopping Cart</h1>

      <div className="grid lg:grid-cols-3 lg:gap-x-8 gap-x-6 gap-y-8 mt-6">
        {/* LEFT SIDE */}
        <div className="lg:col-span-2 space-y-6">
          {/* PRODUCT ITEM */}
          <div className="flex gap-4 bg-white px-4 py-6 rounded-md shadow-sm border border-gray-200">
            <div className="flex gap-6 sm:gap-4 max-sm:flex-col">
              <div className="w-24 h-24 shrink-0">
                <img
                  src="https://readymadeui.com/images/watch1.webp"
                  alt="product"
                  className="w-full h-full object-contain"
                />
              </div>

              <div className="flex flex-col gap-4">
                <div>
                  <h3 className="text-sm sm:text-base font-semibold text-slate-900">
                    Stylish Golden Watch
                  </h3>
                  <p className="text-[13px] font-medium text-slate-500 mt-2 flex items-center gap-2">
                    Color:
                    <span className="inline-block w-4 h-4 rounded-sm bg-[#ac7f48]" />
                  </p>
                </div>
                <h3 className="text-sm font-semibold text-slate-900">
                  $120.00
                </h3>
              </div>
            </div>

            <div className="ml-auto flex flex-col justify-between">
              <div className="flex gap-4 justify-end">❤️ 🗑️</div>

              <div className="flex items-center gap-3">
                <button className="w-[18px] h-[18px] bg-slate-400 rounded-full text-white text-xs">
                  −
                </button>
                <span className="font-semibold">2</span>
                <button className="w-[18px] h-[18px] bg-slate-800 rounded-full text-white text-xs">
                  +
                </button>
              </div>
            </div>
          </div>

          {/* COPY ABOVE BLOCK FOR MORE PRODUCTS */}
        </div>

        {/* RIGHT SIDE SUMMARY */}
        <div className="bg-white rounded-md px-4 py-6 h-max shadow-sm border border-gray-200">
          <ul className="text-slate-500 font-medium space-y-4">
            <li className="flex text-sm">
              Subtotal{" "}
              <span className="ml-auto font-semibold text-slate-900">
                $200.00
              </span>
            </li>
            <li className="flex text-sm">
              Shipping{" "}
              <span className="ml-auto font-semibold text-slate-900">
                $2.00
              </span>
            </li>
            <li className="flex text-sm">
              Tax{" "}
              <span className="ml-auto font-semibold text-slate-900">
                $4.00
              </span>
            </li>
            <hr />
            <li className="flex text-sm font-semibold text-slate-900">
              Total <span className="ml-auto">$206.00</span>
            </li>
          </ul>

          <div className="mt-8 space-y-4">
            <button className="w-full bg-slate-800 text-white py-2.5 rounded-md hover:bg-slate-900">
              Buy Now
            </button>
            <button className="w-full bg-slate-50 border py-2.5 rounded-md hover:bg-slate-100">
              Continue Shopping
            </button>
          </div>

          <div className="mt-5 flex justify-center gap-4">
            <img
              src="https://readymadeui.com/images/master.webp"
              className="w-10"
            />
            <img
              src="https://readymadeui.com/images/visa.webp"
              className="w-10"
            />
            <img
              src="https://readymadeui.com/images/american-express.webp"
              className="w-10"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default page