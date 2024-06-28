<script setup lang="ts">
import Student from "./Student.vue";
import { ref } from "vue";

const namelListInit: string[] = [
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "10",
];
const nameList = ref(namelListInit);
</script>

<template>
  <div class="container-style">
    <h2>Les étudiants dans la formation.</h2>
    <div class="student-profiles-container">
      <div v-for="studentName in nameList" v-bind:key="studentName">
        <Student :name="studentName" />
      </div>
    </div>
  </div>
</template>

<style scoped>
h2 {
  color: gray;
}
.student-profiles-container {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
  padding:10px;
}
</style>
