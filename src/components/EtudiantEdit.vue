<template>
  <p>edit</p>
  <BForm @submit="onSubmit" @reset="onReset" v-if="show" class="edit-form">
    <BFormGroup id="input-group-1" label="Nom" label-for="input-1">
      <BFormInput
        id="input-1"
        v-model="form.name"
        placeholder="Votre nom"
        required
      />
    </BFormGroup>

    <BFormGroup
      id="input-group-2"
      label="Email"
      label-for="input-2"
      description="Nous ne communiquerons jamais votre adresse électronique à qui que ce soit."
    >
      <BFormInput
        id="input-2"
        v-model="form.email"
        type="email"
        placeholder="Votre email"
        required
      />
    </BFormGroup>

    <BFormGroup id="input-group-3" label="Année" label-for="input-3">
      <BFormInput
        id="input-3"
        v-model="form.fromWhen"
        placeholder="Vous étudiez le français dupuis quand?"
      />
    </BFormGroup>

    <BFormGroup id="input-group-4" label="Objectif" label-for="input-4">
      <BFormTextarea
        id="input-4"
        v-model="form.myGoal"
        placeholder="Ton objectif"
        rows="3"
        max-rows="6"
      />
    </BFormGroup>

    <BFormGroup id="input-group-5" label="Method" label-for="input-5">
      <BFormTextarea
        id="textarea"
        v-model="form.myMethod"
        placeholder="Ton method"
        rows="3"
        max-rows="6"
      />
    </BFormGroup>

    <div class="btn-group">
      <BButton type="submit" variant="primary">Submit</BButton>
      <BButton type="reset" variant="danger">Reset</BButton>
    </div>
  </BForm>
  <EtudiantRemove />
</template>

<script setup lang="ts">
import { ref, reactive, nextTick, onMounted } from "vue";
import { useRoute } from "vue-router";
import axios from "axios";
import router from "../utils/router";
import EtudiantRemove from "./EtudintRemove.vue"; 
import { getAllEtudantApi } from "../assets/asset";

const route = useRoute();
const id = route.params.id;

const form = reactive({
  name: "",
  email: "",
  fromWhen: "",
  myGoal: "",
  myMethod: "",
});

const prefetch = async () => {
  try {
    const res = await axios.get(getAllEtudantApi);
    const etd = res.data.etudiant.find((e: Etudiant) => e.id === Number(id));

    form.name = etd.name;
    form.email = etd.email;
    form.fromWhen = etd.fromWhen;
    form.myGoal = etd.myGoal;
    form.myMethod = etd.myMethod;
  } catch (e) {
    alert(e);
  }
};

onMounted(() => {
  prefetch();
});

const show = ref(true);

const onSubmit = async (event: Event) => {
  event.preventDefault();
  try {
    await axios.put(`https://app.msano.ovh/www/api/etudiant/edit/${id}`, form);
    alert(JSON.stringify(form));
    router.push({ path: `/etudiant/${id}` }).then(() => {
      router.go(0);
    });
  } catch (e) {
    alert(e);
  }
};

const onReset = (event: Event) => {
  event.preventDefault();
  // Reset our form values
  form.name = "";
  form.email = "";
  form.fromWhen = "";
  form.myGoal = "";
  form.myMethod = "";

  // Trick to reset/clear native browser form validation state
  show.value = false;

  nextTick(() => {
    show.value = true;
  });
};
</script>
<style scoped>
.edit-form {
  padding: 20px;
}
.btn-group {
  margin: 10px;
}
</style>
