<script setup lang="ts">
import { ref, onMounted } from "vue";
import EtudiantPreview from "./EtudiantPreview.vue";
import { getAllEtudiants } from "../utils/helper.ts";
import { subTitle } from "../assets/asset.ts";

const etudiants = ref();
//DOM読み込み後に展開する
onMounted(async () => {
  const etudiantsData = await getAllEtudiants();
  etudiants.value = etudiantsData.etudiants;
});
</script>

<template>
  <div class="etudiant-profiles-container container-style">
    <h2>{{ subTitle }}</h2>
    <div class="etudiant-profiles-box">
      <div v-for="etudiant in etudiants" v-bind:key="etudiant.id">
        <EtudiantPreview :etudiant="etudiant" />
      </div>
    </div>
  </div>
</template>

<style scoped>
.etudiant-profiles-container {
  text-align: center;
  h2 {
    color: sandybrown;
    margin-bottom: 10px;
  }
  .etudiant-profiles-box {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    gap: 20px;
    padding: 10px;
  }
}
</style>
