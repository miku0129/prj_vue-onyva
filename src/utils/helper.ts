import axios from "axios";
import { Hanko } from "@teamhanko/hanko-elements";
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

export const findMyEtudiant = async () => {
  const hankoApi = import.meta.env.VITE_HANKO_API_URL_LOCAL;
  const hanko = new Hanko(hankoApi);
  const { email } = await hanko.user.getCurrent();
  const data = await getAllEtudiants();
  const etudiant = data.etudiant.find((etd: Etudiant) => {
    return etd.email === email;
  });
  console.log("etudiant", etudiant);
  return etudiant;
};
