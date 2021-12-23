<template>
  <div>
    <div class="card mb-3" v-for="item of newsList" :key="item.id">
      <div class="card-body">
        <h5 class="card-title">{{ item.title }}</h5>
        <img src="~/assets/img/demo.jpg" class="card-img-bottom" alt="" />
        <p class="card-text">
          {{ item.body }}
        </p>
        <p class="card-text">
          <small class="text-muted">Last updated 3 mins ago</small>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import { GET_NEWS_BY_AUTHOR } from "~/api/news/urls";
export default {
  validate({ params }) {
    return /^\d+$/.test(params.id);
  },
  async asyncData({ $api, params }) {
    const newsList = await $api.$get(GET_NEWS_BY_AUTHOR + params.id + "/posts");
    return { newsList };
  },
  data: () => {
    return {
      newsList: {},
    };
  },
};
</script>
