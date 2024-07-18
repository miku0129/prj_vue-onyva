import { createWebHashHistory, createRouter } from "vue-router";

import Home from "../components/Home.vue";
import AuthLogin from "../components/AuthLogin.vue";
import Etudiant from "../components/Etudiant.vue";
import EtudiantCreate from "../components/EtudiantCreate.vue";
import EtudiantEdit from "../components/EtudiantEdit.vue";

const routes = [
  { path: "/", component: Home },
  { path: "/auth/", component: AuthLogin },
  { path: "/etudiant/create/", component: EtudiantCreate },
  { path: "/etudiant/:id/", component: Etudiant },
  { path: "/etudiant/:id/edit", component: EtudiantEdit },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
