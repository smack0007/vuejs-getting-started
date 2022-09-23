import type { Product } from "@/models/Product";
import { defineStore } from "pinia";
import { ref } from "vue";
import productsJson from "../assets/products.json";

export const useProductsStore = defineStore("products", () => {
  const products = ref(productsJson as Product[]);

  function findProductById(id: number): Product | undefined {
    return products.value.find((product) => product.id === id);
  }

  function findProductsByBrand(brand: string): Product[] {
    return products.value.filter((product) =>
      product.brand.toLowerCase().startsWith(brand.toLowerCase())
    );
  }

  return { products, findProductsByBrand, findProductById };
});
