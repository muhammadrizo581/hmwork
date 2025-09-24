import { ProductCard } from "@/entities/product";
import { memo, type FC } from "react";

export const ProductList: FC<{ data: any[] }> = memo((props) => {
  const { data } = props;
  return (
    <div className=" container grid grid-cols-3 gap-2">
      {data?.map((item: any) => (
        <ProductCard key={item.id} item={item} />
      ))}
    </div>
  );
});
