<template>
  <p><strong>Current route path:</strong> {{ $route.fullPath }}</p>
  <nav class="nav-router">
    <RouterLink to="/">Go to Home</RouterLink>
    <RouterLink to="/gallery">Go to Gallery</RouterLink>
  </nav>
  <main>
    <RouterView />
  </main>
</template>

<style scoped>
h1 {
  color: gray;
}
.nav-router{
  display: flex;
  flex-direction: row;
  gap: 20px; 
}
</style>

