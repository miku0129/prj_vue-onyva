<script setup lang="ts">
import { title, navHome, navLogin } from "../assets/asset";
</script>

<template>
  <div>
    <BNavbar toggleable="lg" variant="primary" v-b-color-mode="'dark'">
      <BNavbarBrand
        ><RouterLink to="/" class="header-title"
          >{{ title }} <img src="../../public/favicon-32x32.png" /> </RouterLink
      ></BNavbarBrand>
      <BNavbarToggle target="nav-collapse" />
      <BCollapse id="nav-collapse" is-nav>
        <BNavbarNav>
          <BNavItem
            ><RouterLink to="/">{{ navHome }}</RouterLink></BNavItem
          >
          <BNavItem
            ><RouterLink to="/auth">{{ navLogin }}</RouterLink></BNavItem
          >
        </BNavbarNav>
      </BCollapse>
    </BNavbar>
  </div>
</template>

<style scoped>
.header-title {
  font-size: xx-large;
  color: white;
  text-decoration: none;
}
</style>
