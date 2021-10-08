export const ROUTES = {
  index: "/",
  character: "/character/:characterId",
  episode: "/episode/:episodeId",
};
export const BASE_URL = "https://rickandmortyapi.com/api/";
export const BASE_CHARACTERS_URL = BASE_URL + "character?page=";
export const BASE_CHARACTER_URL = BASE_URL + "character/";
export const BASE_EPISODE_URL = BASE_URL + "episode/";

export const OPTIONS = [
  { value: "All", text: "All characters" },
  { value: "Alive", text: "Alive" },
  { value: "Dead", text: "Dead" },
  { value: "unknown", text: "Unknown" },
];
