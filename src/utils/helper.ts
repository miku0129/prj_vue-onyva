import axios from "axios";
import { Hanko } from "@teamhanko/hanko-elements";
import { etudiantsApi } from "../assets/asset";

export const getHankoApi = () => {
  return import.meta.env.DEV === true
    ? import.meta.env.VITE_HANKO_API_URL_LOCAL
    : import.meta.env.VITE_HANKO_API_URL_PROD;
};

export const getAllEtudiants = async () => {
  return await axios.get(etudiantsApi).then((res) => {
    console.log("res", res.data);
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
  const hankoApi = getHankoApi();

  const hanko = new Hanko(hankoApi);
  const { email } = await hanko.user.getCurrent();

  const data = await getAllEtudiants();
  const etudiant = data.etudiants.find((etd: Etudiant) => {
    return etd.email === email;
  });
  return etudiant;
};
