<script setup lang="ts">
import { onMounted, reactive } from "vue";
import { useRoute } from "vue-router";
import router from "../utils/router";
import { getAllEtudiants } from "../utils/helper";

type DataType = { etudiants: Etudiant[] };
let data: DataType = reactive({ etudiants: [] });

const route = useRoute();
const etdProf = reactive({
  name: "",
});
const getStudentProfile = async () => {
  // const { etudiant } = await getAllEtudiants();
  console.log("??", await getAllEtudiants())
  // data.etudiants = etudiant;

  // const etd = data.etudiants.filter((etd) => {
  //   if (route) {
  //     return etd.id === Number(route.params.id);
  //   }
  // });
  // if (JSON.stringify(etd) !== JSON.stringify([])) {
  //   console.log("etd!", etd);
  //   etdProf.name = etd[0].name;
  // } else {
  //   console.log("etd", etd);
  // }
};

// const getStudentProfile = (arg: string) => {
//   const etd = data.etudiants.filter((etd) => {
//     if (route) {
//       return etd.id === Number(route.params.id);
//     }
//   });
//   console.log("etd", etd)

//   if (arg === "name") {
//     return etd[0].name;
//   } else if (arg === "fromWhen") {
//     return etd[0].fromWhen;
//   } else if (arg === "myGoal") {
//     return etd[0].myGoal;
//   } else if (arg === "myMethod") {
//     return etd[0].myMethod;
//   }
// };

onMounted(async () => {
  await getStudentProfile();
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
            <span>{{ etdProf.name }}</span>
          </p>
        </div>

        <!-- <p class="i-am">
          J'étudie le français depuis
          <span>{{
            (() => {
              if (JSON.stringify(data.etudiants) !== JSON.stringify([])) {
                return getStudentProfile("fromWhen");
              }
            })()
          }}</span>
        </p> -->
      </div>
    </div>
    <div class="student-info-box-sub">
      <!-- <p>
        {{
          (() => {
            if (JSON.stringify(data.etudiants) !== JSON.stringify([])) {
              return getStudentProfile("myGoal");
            }
          })()
        }}
      </p>
      <p>
        {{
          (() => {
            if (JSON.stringify(data.etudiants) !== JSON.stringify([])) {
              return getStudentProfile("myMethod");
            }
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
