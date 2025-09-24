import { useQuery } from "@tanstack/react-query";
import { fetchProducts } from "../api";

export const useFetchProduct = () =>
  useQuery({
    queryKey: ["productKey"],
    queryFn: fetchProducts,
  });
