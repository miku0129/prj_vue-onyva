<script setup lang="ts">
import { onMounted, reactive } from "vue";
import router from "../utils/router";
import { getAllEtudiants } from "../utils/helper";

// import axios from "axios";
// defineProps<{
//   etudiant: Etudiant[];
// }>();

type DataType = { etudiants: Etudiant[] };
let data: DataType = reactive({ etudiants: [] });

const getData = async () => {
  const { etudiant } = await getAllEtudiants();
  data.etudiants = etudiant;
  console.log("data", data);
  console.log("etudiant", etudiant);
};

onMounted(() => {
  getData();
});
</script>

<template>
  <div class="student-info-container container-style">
    <div class="student-info-box-main">
      <BImg
        rounded="circle"
        alt="Circle image"
        :src="
          'https://robohash.org/' + $route.params.id + '/?set=set5&size=180x180'
        "
      />
      <div>
        <div>
          <p class="i-am">
            Je m'appelle
            <span>{{
              (() => {
                if (JSON.stringify(data.etudiants)!==JSON.stringify([])) {
                  const etd = data.etudiants.filter((etd) => {
                    return etd.id === Number($route.params.id);
                  });
                  return etd[0].name;
                }
              })()
            }}</span>
          </p>
        </div>

        <!-- <p class="i-am">
          J'étudie le français depuis
          <span>{{
            (() => {
              const etd = data.etudiants.filter((etd) => {
                return etd.id === Number($route.params.id);
              });
              return etd[0].fromWhen;
            })()
          }}</span>
        </p> -->
      </div>
    </div>
    <div class="student-info-box-sub">
      <!-- <p>
        {{
          (() => {
            const etd = data.etudiants.filter((etd) => {
              return etd.id === Number($route.params.id);
            });
            return etd[0].myGoal;
          })()
        }}
      </p>
      <p>
        {{
          (() => {
            const etd = data.etudiants.filter((etd) => {
              return etd.id === Number($route.params.id);
            });
            return etd[0].myMethod;
          })()
        }}
      </p> -->
    </div>
    <div class="btn-group">
      <RouterLink :to="'/etudiant/' + $route.params.id + '/edit'" class="link">
        <BButton variant="outline-primary" class="edit-btn">Edit</BButton>
      </RouterLink>
      <div>
        <BButton
          variant="outline-danger"
          class="edit-btn"
          @click="
            async () => {
              try {
                await axios.delete(
                  `https://app.msano.ovh/www/api/etudiant/delete/${$route.params.id}`
                );
                router.go(-1);
              } catch (e) {
                console.log(e);
              }
            }
          "
          >Effacer</BButton
        >
      </div>
    </div>
  </div>
</template>

<style scoped>
.student-info-container {
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-top: 10px;
  .student-info-box-main {
    text-align: center;
    img {
      height: 300px;
      width: 300px;
      object-fit: cover;
      background-color: sandybrown;
    }
    .i-am {
      font-size: x-large;
      color: sandybrown;
      span {
        font-size: xx-large;
        color: gray;
        font-weight: 500;
      }
    }
    div {
      display: flex;
      flex-direction: column;
      padding: 10px;
    }
  }
  .student-info-box-sub {
    font-size: large;
    padding: 10px;
    max-width: 400px;
    margin: 0 auto;
  }
  .edit-btn {
    width: fit-content;
    margin: 0 auto;
  }
}
.btn-group {
  display: flex;
  justify-content: center;
  gap: 10px;
}
</style>
