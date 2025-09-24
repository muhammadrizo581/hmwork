import { api } from "@/shared/api";

export const fetchProducts = () => {
  return api.get("products").then((res) => res.data);
};
