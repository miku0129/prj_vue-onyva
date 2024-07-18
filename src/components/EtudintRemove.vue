<script setup lang="ts">
import { removeEtudiantApi, removeItem } from "../assets/asset.ts";
</script>

<template>
  <div>
    <BButton
      variant="outline-danger"
      class="global-style-btn"
      @click="
        async () => {
          try {
            await axios.delete(`${removeEtudiantApi}${$route.params.id}`);
            // router.go(-1);
          } catch (e) {
            console.log(e);
          }
        }
      "
      >{{ removeItem }}</BButton
    >
  </div>
</template>
