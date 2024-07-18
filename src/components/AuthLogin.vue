<script setup lang="ts">
import { ref } from "vue";
import samplePhotoData from "../assets/sample-photo-data.ts";

const photoListInit: Photo[] = samplePhotoData();
const photoList = ref(photoListInit);
</script>

<template>
  <div class="photos">
    <div v-for="photo in photoList" v-bind:key="photo.id">
      <img :src="photo.download_url" width="300px" />
    </div>
  </div>
</template>

<style scoped>
.photos {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  justify-content: center;
  img {
    width: 200px;
    object-fit: cover;
    height: 200px;
  }
}
</style>
