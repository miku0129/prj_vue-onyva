<script setup>
import { title, sutTitle, navHome, navGallery } from '../assets/asset';
</script>

<template>
  <div class="header-container">
    <div>
      <div class="header-title">{{ title }}</div>
      <div>{{ sutTitle }}</div>
    </div>
    <nav class="nav-router">
      <RouterLink to="/">{{ navHome }}</RouterLink>
      <RouterLink to="/gallery">{{ navGallery }}</RouterLink>
    </nav>
  </div>
</template>

<style scoped>
.header-container {
  background-color: gainsboro;
}
.header-title {
  font-size: xxx-large;
}
.nav-router {
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  gap: 20px;
  margin-right: 20px;
}
</style>
