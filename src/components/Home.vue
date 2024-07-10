<script setup lang="ts">
import {ref,onMounted} from 'vue';
import axios from 'axios';
import StudentPreview from "./StudentPreview.vue";
import { subTitle, getAllEtudantApi } from "../assets/asset.ts";

const etudiants = ref();
const getEtudiants = ()=>{
  axios.get(`${getAllEtudantApi}`).then((res) =>{
    etudiants.value = res.data;
  })  
}
//DOM読み込み後に展開する
onMounted(async()=>{
  await getEtudiants();
})
</script>

<template>
  <div class="student-profiles-container container-style">
    <h2>{{ subTitle }}</h2>
    <div class="student-profiles-box">
      <div v-for="student in etudiants" v-bind:key="student.name">
        <StudentPreview :student="student" />
      </div>
    </div>
  </div>
</template>

<style scoped>
.student-profiles-container {
  text-align: center;
  h2 {
    color: sandybrown;
    margin-bottom: 10px;
  }
  .student-profiles-box {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    gap: 20px;
    padding: 10px;
  }
}
</style>
