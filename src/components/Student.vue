<script setup>
import SampleStudentData from "../assets/sample-student-data";
const stData = SampleStudentData();
</script>

<template>
  <p>student {{ $route.params.id }}</p>
  <div class="student-info-container container-style">
    <img :src="stData[$route.params.id].image" />
    <div>
      <h2>Prenom: {{ stData[$route.params.id].name }}</h2>
      <h4>Nationality: {{ stData[$route.params.id].nationality }}</h4>
      <h4>Depuis: {{ stData[$route.params.id].whenYouCome }}</h4>
    </div>
  </div>
</template>

<style scoped>
.student-info-container {
  img {
    height: 400px;
    width: 400px;
    object-fit: cover;
  }
  display: flex;
  flex-direction: row;
  gap: 5px;
  div {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }
}
</style>
