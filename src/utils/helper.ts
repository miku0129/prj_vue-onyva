import axios from "axios";
import { getAllEtudantApi } from "../assets/asset";

export const getAllEtudiants = async () => {
  return await axios.get(getAllEtudantApi).then((res) => {
    return res.data;
  });
};

