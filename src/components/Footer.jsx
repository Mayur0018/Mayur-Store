import Link from "next/link";

export default function Footer() {
  return (
    <footer className="m-auto bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 py-12 grid gap-8 md:grid-cols-4">
        {/* Brand */}
        <div>
          <h2 className="text-xl font-bold text-white"> Mayurs Store</h2>
          <p className="mt-4 text-sm">
            Building modern web applications with Next.js & Tailwind CSS.
          </p>
        </div>

        {/* Links */}
        <div>
          <h3 className="text-white font-semibold mb-4">Company</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link href="/about" className="hover:text-white">
                About
              </Link>
            </li>
            <li>
              <Link href="/services" className="hover:text-white">
                Services
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-white">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* Resources */}
        <div>
          <h3 className="text-white font-semibold mb-4">Resources</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link href="#" className="hover:text-white">
                Blog
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-white">
                Docs
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-white">
                Support
              </Link>
            </li>
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h3 className="text-white font-semibold mb-4">Subscribe</h3>
          <p className="text-sm mb-4">
            Get updates and news directly to your inbox.
          </p>
          <form className="flex gap-2">
            <input
              type="email"
              placeholder="Email address"
              className="w-full px-3 py-2 rounded-md text-black focus:outline-none"
            />
            <button
              type="submit"
              className="bg-white text-black px-4 py-2 rounded-md font-medium hover:bg-gray-200"
            >
              Go
            </button>
          </form>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-gray-700 text-center py-4 text-sm">
        © {new Date().getFullYear()} MayursStore. All rights reserved.
      </div>
    </footer>
  );
}
