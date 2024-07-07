<script setup lang="ts">
import { title, navHome, navGallery } from "../assets/asset";
</script>

<template>
  <div>
    <BNavbar toggleable="lg" variant="primary" v-b-color-mode="'dark'">
      <BNavbarBrand
        ><RouterLink to="/" class="header-title"
          >{{ title }}
          </RouterLink
        ></BNavbarBrand
      >
      <BNavbarToggle target="nav-collapse" />
      <BCollapse id="nav-collapse" is-nav>
        <BNavbarNav>
          <BNavItem
            ><RouterLink to="/">{{ navHome }}</RouterLink></BNavItem
          >
          <BNavItem
            ><RouterLink to="/gallery">{{ navGallery }}</RouterLink></BNavItem
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
