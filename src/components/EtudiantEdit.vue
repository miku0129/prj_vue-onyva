<script setup lang="ts">
import { reactive } from "vue";
import EtudiantRemove from "./EtudintRemove.vue";
import Form from "./Form.vue";

interface EtudiantProps {
  etd: Etudiant;
}
const props = defineProps<EtudiantProps>();

const isEdit = reactive({ bool: true });
const show = reactive({ bool: true });
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
  <Form
    v-model:isEdit="isEdit"
    v-model:show="show"
    v-model:formContent="formContent"
  />
  <EtudiantRemove :etudiantId="props.etd.id" />
</template>

<style scoped>
.edit-form {
  padding: 20px;
}
</style>
