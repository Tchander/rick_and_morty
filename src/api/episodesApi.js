import axios from "axios";
import { BASE_EPISODE_URL } from "@/const";

export const getEpisodeByApi = async (id) =>
  await axios.get(BASE_EPISODE_URL + id);
