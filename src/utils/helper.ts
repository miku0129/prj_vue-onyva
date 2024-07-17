import axios from "axios";
import { getAllEtudantApi } from "../assets/asset";

export const getAllEtudiants = async () => {
  return await axios.get(getAllEtudantApi).then((res) => {
    console.log("res", res.data)
    return res.data;
  });
};

// export const getAEtudiant = async (id: number) => {
//   const etds = await axios.get(getAllEtudantApi).then((res) => {
//     return res.data;
//   });
//   console.log("etds", etds);
//   return etds.etudiant.find((etd: Etudiant) => etd.id === id);
// };
