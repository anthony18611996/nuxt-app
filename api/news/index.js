import { $api } from "../../plugins/api";
import { GET_NEWS_URL, GET_NEWS_BY_ID } from "./urls";

export async function getNews() {
  return await $api.$get(GET_NEWS_URL);
}

export async function getNewsById(id) {
  return await $api.$get(`${GET_NEWS_BY_ID}/${id}`);
}
