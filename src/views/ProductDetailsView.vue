<script setup lang="ts">
import { onMounted } from "vue";
import { useRoute } from "vue-router";
import { useProductsStore } from "../stores/products";
import { Carousel } from "bootstrap";

const route = useRoute();

const { findProductById } = useProductsStore();

const product = findProductById(+route.params.id);

onMounted(() => {
  if (product) {
    new Carousel(".product-images", {
      interval: 2000,
      ride: "carousel",
      pause: "hover",
    });
  }
});

function goBack() {
  history.back();
}
</script>

<template>
  <div v-if="!product" class="product-not-found">
    <h1 class="alert alert-danger">Product not Found</h1>

    <RouterLink
      class="btn btn-secondary"
      :to="{ name: 'home' }"
      @click.prevent="goBack"
      >Back</RouterLink
    >
  </div>
  <div v-else class="product-details">
    <div class="product-info">
      <h1 class="title">{{ product.title }}</h1>
      <h2 class="brand">{{ product.brand }}</h2>

      <h3 class="price">{{ product.price }}&euro;</h3>

      <p class="description">{{ product.description }}</p>

      <RouterLink
        class="btn btn-secondary"
        :to="{ name: 'home' }"
        @click.prevent="goBack"
        >Back</RouterLink
      >
    </div>
    <div class="product-images carousel slide">
      <div class="carousel-inner">
        <div
          v-for="(image, index) in product.images.filter(
            (image: string) => image !== product?.thumbnail
          )"
          :key="index"
          :class="{
            'carousel-item': true,
            active: index === 0,
          }"
        >
          <img
            class="d-block w-100"
            :src="image"
            :alt="`Product image ${index + 1}`"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.product-details {
  display: grid;
  grid-template-columns: 50% 50%;

  .product-info {
    .price {
      text-decoration: underline;
    }
  }

  .product-images {
    width: 500px;
    height: 300px;

    img {
      height: 300px;
    }
  }
}
</style>
