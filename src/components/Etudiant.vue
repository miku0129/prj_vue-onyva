<script setup lang="ts">
defineProps<{
  etudiant: Etudiant[];
}>();
</script>

<template>
  <div class="student-info-container container-style">

    <div class="student-info-box-main">
      <BImg
        rounded="circle"
        alt="Circle image"
        :src="
          'https://robohash.org/' + $route.params.id + '/?set=set5&size=180x180'
        "
      />
      <div>
        <div>
          <p class="i-am">
            Je m'appelle
            <span>{{ etudiant[Number($route.params.id) - 1].name }}</span>
          </p>
        </div>

        <p class="i-am">
          J'étudie le français depuis
          <span>{{ etudiant[Number($route.params.id) - 1].fromWhen }}</span>
        </p>
      </div>
    </div>
    <div class="student-info-box-sub">
      <p>
        {{ etudiant[Number($route.params.id) - 1].myGoal }}
      </p>
      <p>
        {{ etudiant[Number($route.params.id) - 1].myMethod }}
      </p>
    </div>
  </div>
</template>

<style scoped>
.student-info-container {
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-top: 10px;
  .student-info-box-main {
    text-align: center;
    img {
      height: 300px;
      width: 300px;
      object-fit: cover;
      background-color: sandybrown;
    }
    .i-am {
      font-size: x-large;
      color: sandybrown;
      span {
        font-size: xx-large;
        color: gray;
        font-weight: 500;
      }
    }
    div {
      display: flex;
      flex-direction: column;
      padding: 10px;
    }
  }
  .student-info-box-sub {
    font-size: large;
    padding: 10px;
    max-width: 400px;
    margin: 0 auto;
  }
}
</style>
