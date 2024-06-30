import { createWebHashHistory ,  createRouter } from "vue-router";

import Home from "../components/Home.vue";
import Gallery from "../components/Gallery.vue";
import Student from "../components/Student.vue";

const routes = [
  { path: "/", component: Home },
  { path: "/gallery/", component: Gallery },
  { path: "/student/:id/", component: Student },
];

const router = createRouter({
  history: createWebHashHistory (),
  routes,
});

export default router;
