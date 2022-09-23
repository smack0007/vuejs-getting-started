import type { Product } from "@/models/Product";
import { defineStore } from "pinia";
import { ref } from "vue";
import productsJson from "../assets/products.json";

export const useProductsStore = defineStore("products", () => {
  const products = ref(productsJson as Product[]);

  return { products };
});
