<template>
  <p><strong>Current route path:</strong> {{ $route.fullPath }}</p>
  <main>
    <RouterView />
  </main>
</template>

<style scoped>
h1 {
  color: gray;
}
</style>

