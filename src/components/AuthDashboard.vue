<script setup lang="ts">
import { ref, reactive, onMounted, toRaw } from "vue";
import axios from "axios";
import { Hanko } from "@teamhanko/hanko-elements";
import AuthLogoutBtn from "./AuthLogoutBtn.vue";
import EtudiantCreate from "./EtudiantCreate.vue";
import EtudiantEdit from "./EtudiantEdit.vue";
import { seeProfile } from "../assets/asset";
import { getAllEtudiants } from "../utils/helper";

let etd: Etudiant = reactive({
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
  console.log(`user-id: ${id}, email: ${email}`);

  try {
    const data = await getAllEtudiants();

    const fakeEmail = "test3@email.com";

    console.log("data", data);
    const etdData = data.etudiant.find((etd: Etudiant) => {
      // console.log("etd", etd.email);
      return etd.email === fakeEmail;
    });

    hasAvatar.value = etdData ? true : false;

    etd.name = etdData.name;
    etd.email = etdData.email;
    etd.fromWhen = etdData.fromWhen;
    etd.myGoal = etdData.myGoal;
    etd.myMethod = etdData.myMethod;

    etd = toRaw(etd)
    console.log("etd", etd);
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
    <!-- <EtudiantCreate v-if="!hasAvatar" /> -->
    <EtudiantEdit v-if="hasAvatar" :etd="etd" />
  </div>
</template>
