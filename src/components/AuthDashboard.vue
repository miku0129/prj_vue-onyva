<script setup lang="ts">
import { ref, reactive, onMounted, toRaw } from "vue";
import { Hanko } from "@teamhanko/hanko-elements";
import AuthLogoutBtn from "./AuthLogoutBtn.vue";
import EtudiantCreate from "./EtudiantCreate.vue";
import EtudiantEdit from "./EtudiantEdit.vue";
import { getAllEtudiants } from "../utils/helper";
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

const hankoApi = import.meta.env.VITE_HANKO_API_URL_LOCAL;
const hanko = new Hanko(hankoApi);

const prefetch = async () => {
  const { id, email } = await hanko.user.getCurrent();
  // console.log(`Hanko user-id: ${id}, email: ${email}`);

  try {
    const data = await getAllEtudiants();

    const etdData = data.etudiant.find((etd: Etudiant) => {
      return etd.email === email;
    });

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
