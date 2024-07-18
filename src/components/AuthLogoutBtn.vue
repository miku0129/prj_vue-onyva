<script setup lang="ts">
import { useRouter } from "vue-router";
import { Hanko } from "@teamhanko/hanko-elements";
import { doLogout } from "../assets/asset";

const hankoApi = import.meta.env.VITE_HANKO_API_URL_LOCAL;

const router = useRouter();
const hanko = new Hanko(hankoApi);

const logout = () => {
  hanko.user.logout().catch((error: Error) => {
    // handle error
    window.alert(error.message);
  });
  router.push("/auth");
};
</script>

<template>
  <BButton variant="outline-primary" @click="logout">{{ doLogout }}</BButton>
</template>
