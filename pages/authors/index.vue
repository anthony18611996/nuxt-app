<template>
  <div>
    <Error
      errorMessage="Oops, something went wrong. Please try again later."
      v-if="error"
    />
    <div v-else>
      <div class="text-end mb-3">
        <nuxt-link
          no-prefetch
          to="/news"
          class="btn btn-primary btn-lg fs-4"
          role="button"
        >
          Добавить
        </nuxt-link>
      </div>
      <newsItem v-for="item of news" :key="item.id" :newsItem="item"></newsItem>
    </div>
  </div>
</template>

<script>
import newsItem from "~/components/Authors/item";
import Error from "~/components/Errors/Error";
import { GET_NEWS_URL } from "~/api/news/urls";

export default {
  components: {
    newsItem,
    Error,
  },
  //Получаем все новости
  async asyncData({ $api }) {
    try {
      const news = await $api.$get(GET_NEWS_URL).then((response) => {
        console.log(response);
        return response;
      });
      return { news };
    } catch (error) {
      return { error };
    }
  },
  data: () => {
    return {
      error: "",
      news: [],
    };
  },
  methods: {},
};
</script>

<style scoped></style>
