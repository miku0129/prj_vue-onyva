<script setup lang="ts">
import { ref, reactive, onMounted, toRaw } from "vue";
import AuthLogoutBtn from "./AuthLogoutBtn.vue";
import EtudiantCreate from "./EtudiantCreate.vue";
import EtudiantEdit from "./EtudiantEdit.vue";
import { findMyEtudiant } from "../utils/helper";
import { seeProfile } from "../assets/asset";

let etudiant: Etudiant = reactive({
  id: 0,
  name: "",
  email: "",
  fromWhen: "",
  myGoal: "",
  myMethod: "",
});
let hasAvatar = ref(false);

const prefetch = async () => {
  try {
    const etdData = await findMyEtudiant();
    hasAvatar.value = etdData ? true : false;

    if (hasAvatar.value) {
      etudiant.id = etdData.id;
      etudiant.name = etdData.name;
      etudiant.email = etdData.email;
      etudiant.fromWhen = etdData.fromWhen;
      etudiant.myGoal = etdData.myGoal;
      etudiant.myMethod = etdData.myMethod;

      etudiant = toRaw(etudiant);
    }
  } catch (e) {
    alert(e);
  }
};

onMounted(async () => {
  await prefetch();
});
</script>

<template>
  <div>
    <RouterLink :to="'/auth/profile'" class="link">
      <BButton variant="primary" class="global-style-btn">{{
        seeProfile
      }}</BButton>
    </RouterLink>
    <AuthLogoutBtn />
    <EtudiantCreate v-if="!hasAvatar" />
    <EtudiantEdit v-if="hasAvatar" :etd="etudiant" />
  </div>
</template>
