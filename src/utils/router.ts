import { createWebHistory,  createRouter } from "vue-router";

import Home from "../components/Home.vue";
import Gallery from "../components/Gallery.vue";
import Student from "../components/Student.vue";

const routes = [
  { path: "/", component: Home },
  { path: "/gallery", component: Gallery },
  { path: "/student/:id", component: Student },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
