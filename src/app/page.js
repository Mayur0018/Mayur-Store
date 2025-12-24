import Hero from "@/components/Hero";
import Categories from "@/components/Categories";
import Promo from "@/components/Promo";
import Cart from "@/components/Cart";
import NewCollection from "@/components/NewCollection";
import Productreview from "@/components/Productreview";
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
      {/* New NewCollection */}
      <NewCollection/>
      {/* Product Review  */}
      <Productreview/>
    </div>
  );
}
