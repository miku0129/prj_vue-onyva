<script setup lang="ts">
import { useRouter } from "vue-router";
import { Hanko } from "@teamhanko/hanko-elements";
import { getHankoApi } from "../utils/helper";
import { doLogout } from "../assets/asset";

const hankoApi = getHankoApi(); 
const hanko = new Hanko(hankoApi);

const router = useRouter();

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
