<script setup lang="ts">
import AuthLogoutBtn from "./AuthLogoutBtn.vue";
import { seeProfile } from "../assets/asset";
import EtudiantCreate from "./EtudiantCreate.vue";
import EtudiantEdit from "./EtudiantEdit.vue";

const hasAvatar = true;
</script>

<template>
  <div>
    <RouterLink :to="'/auth/profile'" class="link">
      <BButton variant="primary" class="global-style-btn">{{
        seeProfile
      }}</BButton>
    </RouterLink>
    <AuthLogoutBtn />
    <EtudiantCreate v-if="hasAvatar" />
    <EtudiantEdit v-if="!hasAvatar" />
  </div>
</template>
