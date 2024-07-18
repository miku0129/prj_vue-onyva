<script setup lang="ts">
import { useRouter } from "vue-router";
import { Hanko } from "@teamhanko/hanko-elements";

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
  <button @click="logout">Logout</button>
</template>
