<script setup lang="ts">
import { ref, reactive, nextTick, toRaw } from "vue";
// import { useRoute } from "vue-router";
// import axios from "axios";
import router from "../utils/router";
import EtudiantRemove from "./EtudintRemove.vue";
import Etudiant from "./Etudiant.vue";

interface EtudiantProps {
  etd: Etudiant;
}
const props = defineProps<EtudiantProps>();

const isEdit = true;
const show = ref(true);
const formContent = reactive({
  id: props.etd.id, 
  name: props.etd.name,
  email: props.etd.email,
  fromWhen: props.etd.fromWhen,
  myGoal: props.etd.myGoal,
  myMethod: props.etd.myMethod,
});
</script>

<template>
  <p>edit</p>
  <Form
    v-model:isEdit="isEdit"
    v-model:show="show"
    v-model:formContent="formContent"
  />
</template>

<style scoped>
.edit-form {
  padding: 20px;
}
.btn-group {
  margin: 10px;
}
</style>
