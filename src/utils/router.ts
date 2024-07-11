import { createWebHashHistory ,  createRouter } from "vue-router";

import Home from "../components/Home.vue";
import Gallery from "../components/Gallery.vue";
import Etudiant from "../components/Etudiant.vue";

import { getAllEtudiants } from "./helper";
const etudiantsData = await getAllEtudiants(); 

const routes = [
  { path: "/", component: Home },
  { path: "/gallery/", component: Gallery },
  { path: "/etudiant/:id/", component: Etudiant , props: etudiantsData},
];

const router = createRouter({
  history: createWebHashHistory (),
  routes,
});

export default router;
