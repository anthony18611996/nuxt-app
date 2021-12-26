<template>
  <div>
    <!-- <Loader v-if="$fetchState" />-->
    <Error
      errorMessage="Oops, something went wrong. Please try again later."
      v-if="error"
    />
    <div v-else>
      <div class="text-end mb-3">
        <nuxt-link
          no-prefetch
          to="/news/add"
          class="btn btn-primary btn-lg fs-4"
          role="button"
        >
          Add news
        </nuxt-link>
      </div>
      <newsItem v-for="item of news" :key="item.id" :newsItem="item"></newsItem>
    </div>
  </div>
</template>

<script>
import Loader from "~/components/Loaders/Loader";
import Error from "~/components/Errors/Error";
import newsItem from "~/components/News/item";
import { GET_NEWS_URL } from "~/api/news/urls";

export default {
  name: "index",
  components: {
    newsItem,
    Loader,
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
  data() {
    return {
      //loading: true,
      error: "",
      news: [],
    };
  },
  methods: {},
};
</script>

<style scoped></style>
