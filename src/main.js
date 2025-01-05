import { createApp } from 'vue';
import { createPinia } from "pinia";

import App from './App.vue';
import router from "@/router/index.js";

import './assets/main.css';
import './assets/global.css';
import './assets/shared.css';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

const app = createApp(App);
const pinia = createPinia();

app.use(pinia);
app.use(router);
app.mount('#app');