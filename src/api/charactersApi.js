import axios from "axios";
import { BASE_CHARACTERS_URL } from "@/const";

export const getAllCharacters = async () =>
  await axios.get(BASE_CHARACTERS_URL);
