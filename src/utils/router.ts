import { createWebHashHistory, createRouter } from "vue-router";

import Home from "../components/Home.vue";
import AuthLogin from "../components/AuthLogin.vue";
import Etudiant from "../components/Etudiant.vue";
import AuthDashboard from "../components/AuthDashboard.vue";
import AuthProfile from "../components/AuthProfile.vue";

const routes = [
  { path: "/", component: Home },
  { path: "/etudiant/:id/", component: Etudiant },
  { path: "/auth", component: AuthLogin },
  { path: "/auth/dashboard", component: AuthDashboard },
  { path: "/auth/profile", component: AuthProfile },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
