<script setup lang="ts">
import { useRouter } from "vue-router";
import { etudiantsApi, removeItem } from "../assets/asset.ts";
import axios from "axios";

const props = defineProps<{ etudiantId: number }>();
const router = useRouter();

const onDelete = async () => {
  try {
    await axios.delete(`${etudiantsApi}/${props.etudiantId}/delete`);
    router.push({ path: "/" }).then(() => {
      router.go(0);
    });
  } catch (e) {
    console.log(e);
  }
};
</script>

<template>
  <div class="remove-btn">
    <BButton variant="outline-danger" class="global-style-btn" @click="onDelete">
      {{ removeItem }}
    </BButton>
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
