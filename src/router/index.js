import Vue from "vue";
import VueRouter from "vue-router";
import { ROUTES } from "@/const";
import index from "../views/index";
import character from "@/views/character";
import episode from "@/views/episode";

Vue.use(VueRouter);

const routes = [
  {
    path: ROUTES.index,
    name: "index",
    component: index,
  },
  {
    path: ROUTES.character,
    name: "character",
    component: character,
    props: true,
  },
  {
    path: ROUTES.episode,
    name: "episode",
    component: episode,
    props: true,
  },
];

const router = new VueRouter({
  base: "/rick_and_morty/",
  mode: "history",
  routes,
});

export default router;
