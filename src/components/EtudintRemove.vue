<script setup lang="ts">
import { useRouter } from "vue-router";
import { removeAEtudiantApi, removeItem } from "../assets/asset.ts";

const props = defineProps<{ etudiantId: number }>();
const router = useRouter();
</script>

<template>
  <div>
    <BButton
      variant="outline-danger"
      class="global-style-btn"
      @click="
        async () => {
          try {
            await axios.delete(`${removeAEtudiantApi}${props.etudiantId}`);
            router.push({ path: '/' }).then(() => {
              router.go(0);
            });
          } catch (e) {
            console.log(e);
          }
        }
      "
      >{{ removeItem }}</BButton
    >
  </div>
</template>
