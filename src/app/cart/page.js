"use client";

import { useCart } from "@/context/CartContext";

const page = () => {
  const {
    cart,
    removeFromCart,
    increaseQty,
    decreaseQty,
  } = useCart();

  if (cart.length === 0) {
    return (
      <div className="py-20 text-center">
        <h2 className="text-xl font-semibold">Your cart is empty</h2>
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
    <div className="max-w-5xl mx-auto py-20 px-4">
      <h1 className="text-xl font-semibold">Shopping Cart</h1>

      <div className="grid lg:grid-cols-3 gap-8 mt-6">
        {/* LEFT */}
        <div className="lg:col-span-2 space-y-6">
          {cart.map((item) => (
            <div
              key={item.id}
              className="flex gap-4 bg-white px-4 py-6 rounded-md shadow-sm border"
            >
              <img
                src={item.image}
                className="w-24 h-24 object-contain"
              />

              <div className="flex-1">
                <h3 className="font-semibold">{item.name}</h3>
                <p className="mt-2">${item.price}</p>

                <div className="flex items-center gap-3 mt-4">
                  <button
                    onClick={() => decreaseQty(item.id)}
                    className="w-6 h-6 bg-gray-300 rounded"
                  >
                    −
                  </button>
                  <span>{item.quantity}</span>
                  <button
                    onClick={() => increaseQty(item.id)}
                    className="w-6 h-6 bg-black text-white rounded"
                  >
                    +
                  </button>
                </div>
              </div>

              <button
                onClick={() => removeFromCart(item.id)}
                className="text-red-500"
              >
                🗑️
              </button>
            </div>
          ))}
        </div>

        {/* RIGHT */}
        <div className="bg-white p-6 rounded-md shadow-sm border h-max">
          <ul className="space-y-4">
            <li className="flex">
              Subtotal <span className="ml-auto">${subtotal}</span>
            </li>
            <li className="flex">
              Shipping <span className="ml-auto">${shipping}</span>
            </li>
            <li className="flex">
              Tax <span className="ml-auto">${tax}</span>
            </li>
            <hr />
            <li className="flex font-semibold">
              Total <span className="ml-auto">${total}</span>
            </li>
          </ul>

          <button className="w-full bg-black text-white py-3 mt-6 rounded-md">
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default page;
