"use client";

import { useState } from "react";

const page = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    alert("Message sent successfully!");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div className="bg-gray-50 min-h-screen py-20">
      {/* Header */}
      <section className="bg-white py-16 border-b">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold text-gray-900">Contact Us</h1>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            Have questions? We'd love to hear from you. Get in touch with
            <span className="font-semibold"> Mayurs Store</span>.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 grid gap-10 lg:grid-cols-2">
          {/* Contact Info */}
          <div>
            <h2 className="text-2xl font-semibold text-gray-900">
              Get in Touch
            </h2>
            <p className="text-gray-600 mt-4">
              Our team is here to help you with orders, support, and general
              inquiries.
            </p>

            <div className="mt-8 space-y-4 text-gray-700">
              <p>📍 <strong>Address:</strong> Mumbai, India</p>
              <p>📧 <strong>Email:</strong> support@mayursstore.com</p>
              <p>📞 <strong>Phone:</strong> +91 98765 43210</p>
              <p>⏰ <strong>Hours:</strong> Mon – Sat (9 AM – 6 PM)</p>
            </div>
          </div>

          {/* Form */}
          <div className="bg-white p-8 rounded-xl shadow">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Full Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Enter your name"
                  className="mt-1 w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-black outline-none"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="Enter your email"
                  className="mt-1 w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-black outline-none"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="5"
                  required
                  placeholder="Write your message..."
                  className="mt-1 w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-black outline-none"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-black text-white py-3 rounded-lg hover:bg-gray-800 transition"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default page;
