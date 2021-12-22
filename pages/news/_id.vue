<template>
  <div class="container">
    <div class="row">
      <div class="card">
        <div class="card-body">
          <h5 class="card-title">{{ newsDetail.title }}</h5>
          <img src="" class="card-img-bottom" alt="" />
          <p class="card-text">
            {{ newsDetail.body }}
          </p>
          <p class="card-text">
            <small class="text-muted">Last updated 3 mins ago</small>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { GET_NEWS_URL } from "~/api/news/urls";
export default {
  validate({ params }) {
    return /^\d+$/.test(params.id);
  },
  async asyncData({ $api, params }) {
    const newsDetail = await $api.$get(GET_NEWS_URL + params.id);
    return { newsDetail };
  },
  data: () => {
    return {
      newsDetail: {},
    };
  },
};
</script>

<style scoped></style>
