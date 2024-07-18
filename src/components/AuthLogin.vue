<script setup lang="ts">
import { useRouter } from "vue-router";
import { onMounted } from "vue";
import { register } from "@teamhanko/hanko-elements";

const hankoApi = import.meta.env.VITE_HANKO_API_URL_LOCAL;

const router = useRouter();

const redirectAfterLogin = () => {
  // successfully logged in, redirect to a page in your application
  router.push("/auth/dashboard");
};

onMounted(() => {
  register(hankoApi).catch((error: Error) => {
    // handle error
    window.alert(error.message);
  });
});
</script>

<template>
  <hanko-auth @onAuthFlowCompleted="redirectAfterLogin" />
</template>
