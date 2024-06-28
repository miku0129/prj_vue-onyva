<script setup lang="ts">
import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";
import RouteHome from "./components/RouteHome.vue";
</script>

<template>
  <div class="display">
    <Header />
    <RouteHome />
    <Footer />
  </div>
</template>

<style scoped>
.display {
  margin: 0;
  padding: 0;
  min-height: 100vh;
  display: grid;
  grid-template-rows: auto 1fr auto;
}
</style>
