import { routeLoader$ } from "@builder.io/qwik-city";
import { menuList } from "~/data/menu";

export const useMenu = routeLoader$(() => menuList);