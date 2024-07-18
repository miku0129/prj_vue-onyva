<script setup lang="ts">
import AuthLogoutBtn from "./AuthLogoutBtn.vue";
import { seeProfile } from "../assets/asset";
</script>

<template>
  <div>
    <!-- <AuthProfile /> -->
    <RouterLink :to="'/auth/profile'" class="link">
      <BButton variant="primary" class="global-style-btn">{{
        seeProfile
      }}</BButton>
    </RouterLink>

    <AuthLogoutBtn />
  </div>
</template>
