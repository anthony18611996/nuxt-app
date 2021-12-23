<template>
  <div>
    <div class="text-end mb-3">
      <nuxt-link
        no-prefetch
        to="/news/add"
        class="btn btn-primary btn-lg fs-4"
        role="button"
      >
        Добавить
      </nuxt-link>
    </div>
    <newsItem v-for="item of news" :key="item.id" :newsItem="item"></newsItem>
  </div>
</template>

<script>
import newsItem from "~/components/News/item";
import { GET_NEWS_URL } from "~/api/news/urls";

export default {
  name: "index",
  components: {
    newsItem,
  },
  async asyncData({ $api }) {
    const news = await $api.$get(GET_NEWS_URL);
    return { news };
  },
  data: () => {
    return {
      news: [],
    };
  },
  methods: {},
};
</script>

<style scoped></style>
