import { createApp } from "vue";

import App from "./App.vue";
import router from "./router";
import { createPinia } from "pinia";

import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/main.scss";

const app = createApp(App);

app.use(router);

const pinia = createPinia();
app.use(pinia);

app.mount("#app");
