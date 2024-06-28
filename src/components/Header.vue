<script setup></script>

<template>
  <div class="header-container">
    <div>
      <div class="header-title">UFCV</div>
      <div>Dynamiser son pfojet professionnel</div>
    </div>
    <nav class="nav-router">
      <RouterLink to="/">Accueil</RouterLink>
      <RouterLink to="/gallery">Gallery</RouterLink>
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
