<script setup lang="ts">
defineProps<{
  etudiant: Etudiant;
}>();

const mainProps = {
  width: 150,
  height: 150,
  class: "m1 etudiant-img",
};
</script>

<template>
  <div class="etudiant-container">
    <RouterLink
      :to="'/etudiants/' + etudiant.id"
      class="link"
      ref="jest-router-verify"
    >
      <BImg
        v-bind="mainProps"
        rounded="circle"
        alt="Circle image"
        :src="'https://robohash.org/' + etudiant.id + '/?set=set5&size=180x180'"
      />
      <h5>{{ etudiant.name }}</h5>
    </RouterLink>
  </div>
</template>

<style scoped>
.etudiant-container {
  text-align: center;
  .link {
    text-decoration: none;
    h5 {
      color: gray;
    }
  }
  .etudiant-img {
    object-fit: cover;
  }
  &:hover {
    transform: translate(0px, -10px);
    transition: all 0.5s ease-in-out;
    .etudiant-img {
      background-color: sandybrown;
    }
  }
}
</style>
