"use client";

import { useState, useContext } from "react";
import Link from "next/link";
import { FiShoppingCart } from "react-icons/fi";
import { CartContext } from "@/context/CartContext";

export default function Header() {
  const [open, setOpen] = useState(false);
  const cartContext = useContext(CartContext);
  console.log("cartcontextData", cartContext);

  const cartCount = cartContext?.cartCount ?? 0;
  console.log("Header Count Value", cartCount);

  return (
    <header className="fixed w-full z-50 bg-white border-b shadow-sm">
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="text-xl font-bold text-gray-900">
          Mayurs Store
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center gap-8 text-gray-700 font-medium">
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
          <Link href="/service">Services</Link>
          <Link href="/contact">Contact</Link>
        </nav>

        {/* Right Actions */}
        <div className="hidden md:flex items-center gap-6">
          {/* Cart */}
          <Link href="/cart" className="relative">
            <FiShoppingCart className="text-2xl text-gray-800" />
            {cartCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-black text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
                {cartCount}
              </span>
            )}
          </Link>

          <button className="bg-black text-white px-4 py-2 rounded-lg hover:bg-gray-800">
            Get Started
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button onClick={() => setOpen(!open)} className="md:hidden text-2xl">
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-white border-t">
          <nav className="flex flex-col gap-4 px-4 py-6">
            <Link onClick={() => setOpen(false)} href="/">
              Home
            </Link>
            <Link onClick={() => setOpen(false)} href="/about">
              About
            </Link>
            <Link onClick={() => setOpen(false)} href="/service">
              Services
            </Link>
            <Link onClick={() => setOpen(false)} href="/contact">
              Contact
            </Link>

            <Link href="/cart" className="flex items-center gap-2 mt-2">
              <FiShoppingCart />
              {cartCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-black text-red-500 text-xs w-5 h-5 rounded-full flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </Link>

            <button className="mt-4 bg-black text-white py-2 rounded-lg">
              Get Started
            </button>
          </nav>
        </div>
      )}
    </header>
  );
}
