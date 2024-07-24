<script setup lang="ts">
import { useRouter } from "vue-router";
import { etudiantsApi, removeItem } from "../assets/asset.ts";

const props = defineProps<{ etudiantId: number }>();
const router = useRouter();
</script>

<template>
  <div class="remove-btn">
    <BButton
      variant="outline-danger"
      class="global-style-btn"
      @click="
        async () => {
          try {
            await axios.delete(`${etudiantsApi}/${props.etudiantId}/delete`);
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
<style>
.remove-btn {
  display: flex;
  justify-content: center;
  .global-style-btn {
    margin-top: 0px;
  }
}
</style>
