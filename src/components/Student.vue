<script setup lang="ts">
defineProps<{ name: string }>();
const mainProps = {
  blank: true,
  blankColor: "#777",
  width: 75,
  height: 75,
  class: "m1",
};
</script>

<template>
  <div class="student-container">
    <BImg v-bind="mainProps" rounded="circle" alt="Circle image" width="150" height="150"/>
    <h1>{{ name }}</h1>
  </div>
</template>

<style scoped>
.student-container{
  text-align: center;  
}
</style>
