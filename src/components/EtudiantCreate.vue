<script setup lang="ts">
import { reactive } from "vue";
import Form from "./Form.vue";

const isEdit = reactive({ bool: false })
const show = reactive({ bool: true });
const formContent = reactive({
  id: 0,
  name: "",
  email: "",
  fromWhen: "",
  myGoal: "",
  myMethod: "",
});
</script>

<template>
  <p>create</p>
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
