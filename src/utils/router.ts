import { createWebHashHistory ,  createRouter } from "vue-router";

import Home from "../components/Home.vue";
import Gallery from "../components/Gallery.vue";
import Etudiant from "../components/Etudiant.vue";
import EtudiantCreate from "../components/EtudiantCreate.vue"
import EtudiantEdit from "../components/EtudiantEdit.vue"

import { getAllEtudiants } from "./helper";
const etudiantsData = await getAllEtudiants(); 

const routes = [
  { path: "/", component: Home },
  { path: "/gallery/", component: Gallery },
  { path: "/etudiant/create/", component: EtudiantCreate },
  { path: "/etudiant/:id/", component: Etudiant , props: etudiantsData},
  { path: "/etudiant/:id/edit", component: EtudiantEdit , props: etudiantsData},
];

const router = createRouter({
  history: createWebHashHistory (),
  routes,
});

export default router;
