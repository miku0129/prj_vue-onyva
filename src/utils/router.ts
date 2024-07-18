import { createWebHashHistory, createRouter } from "vue-router";

import Home from "../components/Home.vue";
import AuthLogin from "../components/AuthLogin.vue";
import Etudiant from "../components/Etudiant.vue";
import EtudiantCreate from "../components/EtudiantCreate.vue";
import EtudiantEdit from "../components/EtudiantEdit.vue";
import AuthDashboard from "../components/AuthDashboard.vue";

const routes = [
  { path: "/", component: Home },
  { path: "/etudiant/create/", component: EtudiantCreate },
  { path: "/etudiant/:id/", component: Etudiant },
  { path: "/etudiant/:id/edit", component: EtudiantEdit },
  { path: "/auth", component: AuthLogin },
  { path: "/auth/dashboard", component: AuthDashboard },

];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
