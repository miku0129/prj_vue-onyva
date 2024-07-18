<script setup lang="ts">
import { onMounted } from "vue";
import { register } from "@teamhanko/hanko-elements";

const hankoApi = import.meta.env.VITE_HANKO_API_URL_LOCAL;

onMounted(() => {
  register(hankoApi).catch((error: Error) => {
    // handle error
    window.alert(error.message);
  });
});
</script>

<template>
  <hanko-profile />
</template>
