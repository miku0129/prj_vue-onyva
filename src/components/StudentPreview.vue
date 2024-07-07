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
    <RouterLink :to="'/student/' + student.id" class="link">
      <BImg
        v-bind="mainProps"
        rounded="circle"
        alt="Circle image"
        :src="'https://robohash.org/' + student.id + '/?set=set5&size=180x180'"
      />
      <h5>{{ student.name }}</h5>
    </RouterLink>
  </div>
</template>

<style scoped>
.student-container {
  text-align: center;
  .link {
    text-decoration: none;
  }
}
.student-img {
  object-fit: cover;
}
</style>
