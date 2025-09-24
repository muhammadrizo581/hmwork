import { memo } from "react";
import { Hero } from "@/widgets/hero";
import { SubHero } from "@/widgets/sub-header";
import { Category } from "@/widgets/category";
import { useFetchProduct } from "@/entities/product";
import { ProductList } from "@/widgets/product-list/ui/ProductList";

export const Home = memo(() => {
  const { data } = useFetchProduct();

  return (
    <div>
      <Hero />
      <SubHero />
      <Category />
      <ProductList data={data?.products} />
    </div>
  );
});
