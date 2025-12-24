"use client";
import { useCart } from "@/context/CartContext";

export default function Page() {
  const { cart, removeFromCart, increaseQty, decreaseQty } = useCart();

  if (cart.length === 0) {
    return (
      <div className="py-24 text-center">
        <h2 className="text-2xl font-semibold">Your cart is empty 🛒</h2>
      </div>
    );
  }

  const subtotal = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  const shipping = 2;
  const tax = 4;
  const total = subtotal + shipping + tax;

  return (
    <div className="lg:max-w-5xl max-lg:max-w-2xl mx-auto bg-white p-4 py-20">
      <div className="grid lg:grid-cols-3 gap-6">
        {/* LEFT: CART ITEMS */}
        <div className="lg:col-span-2 bg-gray-100 p-6 rounded-md">
          <h3 className="text-lg font-semibold text-slate-900">Your Cart</h3>
          <hr className="border-gray-300 mt-4 mb-8" />

          <div className="space-y-6">
            {cart.map((item) => (
              <div
                key={item.id}
                className="grid sm:grid-cols-3 items-center gap-4"
              >
                <div className="sm:col-span-2 flex sm:items-center max-sm:flex-col gap-6">
                  {/* IMAGE */}
                  <div className="w-24 h-24 shrink-0 bg-white p-2 rounded-md">
                    <img
                      src={item.image}
                      alt={item.name}
                      width={96}
                      height={96}
                      className="w-full h-full object-contain"
                    />
                  </div>

                  {/* INFO */}
                  <div>
                    <h4 className="text-[15px] font-semibold text-slate-900">
                      {item.name}
                    </h4>
                    <h4 className="text-[15px] font-semibold text-slate-900">
                      {item.price}
                    </h4>
                    <button
                      onClick={() => removeFromCart(item.id)}
                      className="text-xs font-medium text-red-500 mt-1"
                    >
                      Remove
                    </button>

                    {/* QTY */}
                    <div className="flex items-center mt-4 border border-gray-300 rounded-md w-max">
                      <button
                        onClick={() => decreaseQty(item.id)}
                        className="px-3 py-2 hover:bg-gray-200"
                      >
                        −
                      </button>
                      <span className="px-4 text-sm font-semibold">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() => increaseQty(item.id)}
                        className="px-3 py-2 hover:bg-gray-200"
                      >
                        +
                      </button>
                    </div>
                  </div>
                </div>

                {/* PRICE */}
                <div className="sm:ml-auto">
                  <h4 className="text-[15px] font-semibold text-slate-900">
                    ${(item.price * item.quantity).toFixed(2)}
                  </h4>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT: ORDER SUMMARY */}
        <div className="bg-gray-100 rounded-md p-6 sticky top-24 h-max">
          <h3 className="text-lg font-semibold text-slate-900">
            Order Details
          </h3>
          <hr className="border-gray-300 mt-4 mb-6" />

          <ul className="text-slate-600 font-medium space-y-4 text-sm">
            <li className="flex">
              Subtotal
              <span className="ml-auto text-slate-900 font-semibold">
                ${subtotal.toFixed(2)}
              </span>
            </li>
            <li className="flex">
              Shipping
              <span className="ml-auto text-slate-900 font-semibold">
                ${shipping.toFixed(2)}
              </span>
            </li>
            <li className="flex">
              Tax
              <span className="ml-auto text-slate-900 font-semibold">
                ${tax.toFixed(2)}
              </span>
            </li>
            <li className="flex text-slate-900 font-semibold border-t pt-4">
              Total
              <span className="ml-auto">${total.toFixed(2)}</span>
            </li>
          </ul>

          <div className="mt-8 space-y-3">
            <button className="w-full bg-black hover:bg-gray-800 text-white py-3 rounded-md">
              Checkout
            </button>
            <button className="w-full border border-gray-300 py-3 rounded-md">
              Continue Shopping
            </button>
          </div>

          {/* PROMO */}
          <div className="mt-6">
            <p className="text-sm font-medium mb-2">
              Do you have a promo code?
            </p>
            <div className="flex border border-black overflow-hidden rounded-md">
              <input
                type="text"
                placeholder="Promo code"
                className="w-full px-4 py-2 text-sm outline-none"
              />
              <button className="bg-black text-white px-4 text-sm">
                Apply
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
