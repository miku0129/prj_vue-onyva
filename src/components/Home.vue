<script setup lang="ts">
import StudentPreview from "./StudentPreview.vue";
import { ref } from "vue";
import sampleStudentData from "../assets/sample-student-data.ts";

const studentlListInit: Student[] = sampleStudentData();
const studentList = ref(studentlListInit);
</script>

<template>
  <div class="container-style">
    <h2>Les étudiants de la formation.</h2>
    <div class="student-profiles-container">
      <div v-for="student in studentList" v-bind:key="student.name">
        <StudentPreview :student="student" />
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
  padding: 10px;
}
</style>
