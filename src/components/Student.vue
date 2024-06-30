<script setup>
import SampleStudentData from "../assets/sample-student-data";
const stData = SampleStudentData();
</script>

<template>
  <div class="student-info-container container-style">
    <div class="student-info-box-main">
      <img :src="stData[$route.params.id].image" />
      <div>
        <h2>{{ stData[$route.params.id].name }}</h2>
        <h4>Nationality: {{ stData[$route.params.id].nationality }}</h4>
        <h4>Depuis: {{ stData[$route.params.id].whenYouCome }}</h4>
      </div>
    </div>
    <div class="student-info-box-sub">
      <p>
        {{ stData[$route.params.id].myGoal }}
      </p>
      <p>
        {{ stData[$route.params.id].myAchievmentInUFCV }}
      </p>
      <div>
        <img :src="stData[$route.params.id].signature" />
      </div>
    </div>
  </div>
</template>

<style scoped>
.student-info-container {
  display: flex;
  flex-direction: row;
  gap: 10px;
  padding: 20px;
  .student-info-box-main {
    img {
      height: 300px;
      width: 300px;
      object-fit: cover;
    }
    div {
      display: flex;
      flex-direction: column;
      gap: 10px;
    }
    @media (max-width: 400px) {
      display: flex;
      flex-direction: column;
      margin: 0 auto;
    }
  }
  .student-info-box-sub {
    font-size: large;
    padding: 10px;
    div {
      text-align: right;
      img {
        width: 300px;
        text-align: center;
      }
    }
  }
  @media (max-width: 400px) {
    flex-direction: column;
  }
}
</style>
