import axios from "axios";
import { BASE_CHARACTER_URL } from "@/const";

export const getAllCharacters = async (apiUrl) => await axios.get(apiUrl);
export const getCharacterById = async (id) =>
  await axios.get(BASE_CHARACTER_URL + id);
