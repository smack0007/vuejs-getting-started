<script setup lang="ts">
import { ref, watch } from "vue";
import HelloWorld from "../components/HelloWorld.vue";
import ProductsList from "../components/ProductsList.vue";
import SearchBox from "../components/SearchBox.vue";
import type { Product } from "../models/Product";
import { useProductsStore } from "../stores/products";

const props = defineProps<{
  brand: string;
}>();

const { products, findProductsByBrand } = useProductsStore();

let allBrandProducts: Product[] = [];

const today = new Date();
const brandProducts = ref<Product[]>(allBrandProducts);

const searchBox = ref<{ clearSearch(): void }>();

function updateAllProducts() {
  console.info("brand", props.brand);
  if (props.brand !== "") {
    allBrandProducts = findProductsByBrand(props.brand);
  } else {
    allBrandProducts = products;
  }
  brandProducts.value = allBrandProducts;

  if (searchBox.value !== undefined) {
    searchBox.value.clearSearch();
  }
}

function search(value: string) {
  value = value.toLowerCase();
  console.info(brandProducts.value);
  brandProducts.value = allBrandProducts.filter(
    (x) =>
      x.brand.toLowerCase().includes(value) ||
      x.category.toLowerCase().includes(value) ||
      x.description.toLowerCase().includes(value) ||
      x.title.toLowerCase().includes(value)
  );
  console.info("search", value, brandProducts.value);
}

watch(props, updateAllProducts);
updateAllProducts();
</script>

<template>
  <div class="home">
    <HelloWorld first-name="Zachary" last-name="Snow" />

    <div
      v-if="today.getDay() === 5"
      class="sales-banner alert alert-primary"
      role="alert"
    >
      Friday! Everything must go!
    </div>

    <SearchBox
      ref="searchBox"
      class="mb-3"
      @execute-search="search"
    ></SearchBox>

    <ProductsList :products="brandProducts"></ProductsList>
  </div>
</template>

<style scoped lang="scss"></style>
