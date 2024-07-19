<script setup lang="ts">
import { onMounted } from "vue";
import { register } from "@teamhanko/hanko-elements";
import router from "../utils/router";
import { getBack } from "../assets/asset";
import { getHankoApi } from "../utils/helper";

const hankoApi = getHankoApi();

onMounted(() => {
  register(hankoApi).catch((error: Error) => {
    // handle error
    window.alert(error.message);
  });
});
</script>

<template>
  <BButton
    variant="primary"
    class="global-style-btn"
    @click="
      () => {
        router.go(-1);
      }
    "
    >{{ getBack }}</BButton
  >
  <hanko-profile />
</template>
