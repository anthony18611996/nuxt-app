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
          to="/news/add"
          class="btn btn-primary btn-lg fs-4"
          role="button"
        >
          Add news
        </nuxt-link>
      </div>
      <newsItem
        v-for="item of slicedNews"
        :key="item.id"
        :newsItem="item"
      ></newsItem>
      <nav aria-label="...">
        <ul class="pagination pagination-sm justify-content-center">
          <li
            class="page-item"
            style="cursor: pointer"
            aria-current="page"
            v-for="(item, index) of paginationItems"
            :key="item"
            @click="showPage(item)"
            :class="active === item ? 'active' : ''"
          >
            <span class="page-link">{{ index + 1 }}</span>
          </li>
        </ul>
      </nav>
    </div>
  </div>
</template>

<script>
import Error from "~/components/Errors/Error";
import newsItem from "~/components/News/item";
import { GET_NEWS_URL } from "~/api/news/urls";

export default {
  name: "index",
  components: {
    newsItem,
    Error,
  },
  //Получаем все новости
  async asyncData({ $api }) {
    try {
      const news = await $api.$get(GET_NEWS_URL).then((response) => {
        return response;
      });
      return { news };
    } catch (error) {
      return { error };
    }
  },
  data() {
    return {
      error: "",
      news: [],
      newsOnPage: 10,
      pageNum: 0,
      active: undefined,
    };
  },
  mounted() {
    //Показываем первую страницу при загрузке
    this.showPage(this.paginationItems - (this.paginationItems - 1));
  },
  methods: {
    //Показываем активную страницу
    showPage(item) {
      this.active = item;
      this.pageNum = item;
    },
  },
  computed: {
    //Рассчитываем кол-во кнопок пагинации
    paginationItems() {
      return Math.ceil(this.news.length / this.newsOnPage);
    },
    //Номер страницы-1 умножаем на кол-во записей на странице
    start() {
      return (this.pageNum - 1) * this.newsOnPage;
    },
    end() {
      return this.start + this.newsOnPage;
    },
    //Отдаем массив news по 10 эелементов
    slicedNews() {
      return this.news.slice(this.start, this.end);
    },
  },
};
</script>

<style scoped></style>
