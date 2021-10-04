import axios from "axios";
// import { BASE_CHARACTERS_URL } from "@/const";

export const getAllCharacters = async (apiUrl) => await axios.get(apiUrl);
