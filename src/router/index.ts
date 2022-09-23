import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import AboutView from "../views/AboutView.vue";
import ProductDetailsView from "../views/ProductDetailsView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/about",
      name: "about",
      component: AboutView,
    },
    {
      path: "/",
      name: "home",
      component: HomeView,
      props: {
        brand: "",
      },
    },
    {
      path: "/products/:id",
      name: "product-details",
      component: ProductDetailsView,
    },
    {
      path: "/apple",
      name: "apple",
      component: HomeView,
      props: {
        brand: "Apple",
      },
    },
    {
      path: "/microsoft",
      name: "microsoft",
      component: HomeView,
      props: {
        brand: "Microsoft",
      },
    },
    {
      path: "/samsung",
      name: "samsung",
      component: HomeView,
      props: {
        brand: "Samsung",
      },
    },
  ],
});

export default router;
