export const ROUTES = {
  index: "/",
  character: "/character/:characterId",
  episode: "/episode/:episodeId",
};
export const BASE_URL = "https://rickandmortyapi.com/api/";
export const BASE_CHARACTERS_URL = BASE_URL + "character?page=";
export const BASE_LOCATIONS_URL = BASE_URL + "location";
export const BASE_EPISODES_URL = BASE_URL + "episode";

export const OPTIONS = [
  { value: "All", text: "All species" },
  { value: "Human", text: "Humans" },
  { value: "Alien", text: "Aliens" },
  { value: "Humanoid", text: "Humanoid" },
  { value: "Poopybutthole", text: "Poopybutthole" },
  { value: "Mythological Creature", text: "Mythological Creature" },
  { value: "Animal", text: "Animal" },
  { value: "Cronenberg", text: "Cronenberg" },
  { value: "Disease", text: "Disease" },
  { value: "Robot", text: "Robot" },
  { value: "unknown", text: "unknown" },
  { value: "Planet", text: "Planet" },
];
