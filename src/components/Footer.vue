<script setup lang="ts">
import { footerLabel } from "../assets/asset";
</script>

<template>
  <div class="footer-container container-style">
    <p>&copy;{{ footerLabel }}</p>
  </div>
</template>

<style scoped>
.footer-container {
  border-top: 1px solid;
}
</style>
