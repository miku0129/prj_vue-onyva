<script setup lang="ts">
defineProps<{
  student: Student;
}>();

const mainProps = {
  width: 150,
  height: 150,
  class: "m1 student-img",
};
</script>

<template>
  <div class="student-container">
    <BImg
      v-bind="mainProps"
      rounded="circle"
      alt="Circle image"
      :src=student.image
    />
    <h5>{{ student.name }}</h5>
  </div>
</template>

<style scoped>
.student-container {
  text-align: center;
}
.student-img{
  object-fit: cover;
}
</style>
