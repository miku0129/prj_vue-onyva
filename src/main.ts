import { createApp } from "vue";
import { createBootstrap } from "bootstrap-vue-next";

import App from "./App.vue";
import router from "./utils/router";

import "./style.css";


import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue-next/dist/bootstrap-vue-next.css";

createApp(App).use(router).use(createBootstrap).mount("#app");
