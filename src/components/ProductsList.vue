<script setup lang="ts">
import type { Product } from "../models/Product";

const props = defineProps<{
  products: Product[];
}>();
</script>

<template>
  <div class="product-list mx-auto">
    <h1>Products</h1>

    <div class="container grid">
      <div class="col" v-for="product in props.products" :key="product.id">
        <div class="card">
          <img
            :src="product.thumbnail"
            class="card-img-top"
            alt="Image of {{ product.title }}"
          />
          <div class="card-body">
            <h5 class="card-title">
              <span class="title">{{ product.title }}</span>
              <span class="brand">{{ product.brand }}</span>
            </h5>
            <p class="card-text">{{ product.description }}</p>
            <RouterLink
              class="btn btn-primary"
              :to="{ name: 'product-details', params: { id: product.id } }"
              >Details</RouterLink
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.product-list {
  .container {
    display: grid;
    grid-template-columns: repeat(auto-fill, 18rem);
    justify-content: space-between;
    grid-gap: 1.5rem;

    .card {
      width: 18rem;

      .card-title {
        display: grid;
        grid-template-columns: 50% 50%;

        .brand {
          text-align: right;
        }
      }
    }
  }
}
</style>
