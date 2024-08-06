<script setup lang="ts">
import { toRaw, nextTick } from "vue";
import { useRouter } from "vue-router";
import axios from "axios";
import { etudiantsApi } from "../assets/asset";
import { findMyEtudiant } from "../utils/helper";

interface FormProps {
  isEdit: isEditVal;
  show: showForm;
  formContent: FormContent;
}
const formProps = defineProps<FormProps>();

const router = useRouter();

const onSubmit = async (event: Event) => {
  event.preventDefault();
  if (formProps.isEdit.bool === false) {
    try {
      await axios.post(etudiantsApi, toRaw(formProps.formContent));
      alert("L'exécution a réussi.");
      // Trick to reset/clear native browser form validation state
      formProps.show.bool = false;
      nextTick(() => {
        formProps.show.bool = true;
      });

      const myEtudiant = await findMyEtudiant();

      router.push({ path: `/etudiants/${myEtudiant.id}` }).then(() => {
        router.go(0);
      });
    } catch (e) {
      alert(e);
    }
  } else {
    const updateForm = toRaw(formProps.formContent);
    try {
      await axios.put(`${etudiantsApi}/${updateForm.id}/edit`, updateForm);
      alert(JSON.stringify(updateForm));
      // Trick to reset/clear native browser form validation state
      formProps.show.bool = false;
      nextTick(() => {
        formProps.show.bool = true;
      });

      router
        .push({ path: `/etudiants/${formProps.formContent.id}` })
        .then(() => {
          router.go(0);
        });
    } catch (e) {
      alert(e);
    }
  }
};

const onReset = (event: Event) => {
  event.preventDefault();
  // Reset our form values
  formProps.formContent.name = "";
  formProps.formContent.email = "";
  formProps.formContent.fromWhen = "";
  formProps.formContent.myGoal = "";
  formProps.formContent.myMethod = "";
  // Trick to reset/clear native browser form validation state
  formProps.show.bool = false;
  nextTick(() => {
    formProps.show.bool = true;
  });
};
</script>

<template>
  <BForm @submit="onSubmit" @reset="onReset" v-if="show" class="edit-form">
    <BFormGroup id="input-group-1" label="Nom" label-for="input-1">
      <BFormInput
        id="input-1"
        v-model="formProps.formContent.name"
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
        v-model="formProps.formContent.email"
        type="email"
        placeholder="Votre email"
        required
      />
    </BFormGroup>

    <BFormGroup id="input-group-3" label="Année" label-for="input-3">
      <BFormInput
        id="input-3"
        v-model="formProps.formContent.fromWhen"
        placeholder="Vous étudiez le français dupuis quand?"
      />
    </BFormGroup>

    <BFormGroup id="input-group-4" label="Objectif" label-for="input-4">
      <BFormTextarea
        id="input-4"
        v-model="formProps.formContent.myGoal"
        placeholder="Ton objectif"
        rows="3"
        max-rows="6"
      />
    </BFormGroup>

    <BFormGroup id="input-group-5" label="Method" label-for="input-5">
      <BFormTextarea
        id="textarea"
        v-model="formProps.formContent.myMethod"
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
</template>
<style>
.btn-group {
  display: flex;
  margin: 20px;
  justify-content: flex-start;
  max-width: 30px;
}
</style>
