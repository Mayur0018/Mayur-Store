import Hero from "@/components/Hero";
import Categories from "@/components/Categories";
import Promo from "@/components/Promo";
import Cart from "@/components/Cart";
export default function HomePage() {
  return (
    <div className="space-y-20 md:py-20 md:px-20 py-12">
      {/* HERO SECTION */}
      <Hero />
      {/* CATEGORIES */}
      <Categories />
      {/* FEATURED PRODUCTS */}
      <Cart />
      {/* PROMO SECTION */}
      <Promo />
    </div>
  );
}
